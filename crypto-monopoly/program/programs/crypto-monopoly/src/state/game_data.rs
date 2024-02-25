use anchor_lang::prelude::*;

use crate::constants::*;
use crate::errors::*;
use crate::state::prop::Prop;
use crate::state::player_data::Player;


#[account]
#[derive(Copy)]
pub struct GameData {
    buyin : u32,
    pub turn: u8,
    pub state: State,
    pub props: [Prop; 28],
    pub players: [Player; 4],
    n : u8,
    last_roll : u8,
}

impl GameData {
    
    pub fn onInitGame(&mut self, buyin_: u32) -> Result<()> {
        self.buyin = buyin_;
        self.n = 0;
        self.turn = 0;
        for prop in self.props.iter_mut() {
            prop.clear();
        }
        for player in self.players.iter_mut() {
            player.clear();
        }
        self.state = State::PreRoll;
        return Ok(());
    }

    pub fn onInitPlayer(&mut self, player : Pubkey) -> Result<()> {
        // TODO - accept SOL and make sure it matches correct

        self.players[self.n as usize].init(self.n, player)?;
        self.n += 1;
        // let i = self.getPlayerIndex(&player)?;
        return Ok(());
    }

    fn startGame(&mut self) {
        self.state = State::PreRoll;
        self.turn = 0;
    }

    pub fn whoseTurn(&self) -> Pubkey {
        return self.players[self.turn as usize].acct;
    }

    pub fn lastRoll(&self) -> u8 {
        return self.last_roll.try_into().unwrap();
    }

    

    pub fn startTurn(&mut self, p : u8) -> MoveResult {
        
        // roll dice
        self.last_roll = 12;
        
        // use dice to update move
        let new_pos = self.players[p as usize].makeMove(self.last_roll as u8);

        // act on new position
        if self.props[new_pos as usize].ownerId == p {
            // your own property, do nothing
            self.turn = (self.turn + 1)%self.n;
            return MoveResult::Noop;
        } else if self.props[new_pos as usize].ownerId >= 0 {
            // someone else owns this, pay rent!!
            let paid : u64 = self.props[new_pos as usize].rent.try_into().unwrap();
            self.players[p as usize].balance -= paid;
            self.players[self.props[new_pos as usize].ownerId as usize].balance += paid;
            self.turn = (self.turn + 1)%self.n;
            return MoveResult::Rent;
        } else {
            // no one owns it, you have the option to buy it
            self.state = State::PostRoll;
            return MoveResult::BuyOption;
        }
    }

    pub fn getPlayer(&self, p : &Pubkey) -> Result<Player> {
        return Ok(self.players[self.getPlayerIndex(p)? as usize]);
    }

    pub fn getProp(&self, ind : u8) -> Result<Prop> {
        return Ok(self.props[ind as usize]);
    }

    pub fn buyProp(&mut self, p : u8, pos : u8, payment : u32) -> Result<()> {

        // // enforce:
        // if payment < self.players[p].balance {
        //     // enough funds
        //     return false;
        // } else if self.turn != p {
        //     // player turn
        //     return false;
        // } else if self.state != State::PostRoll {
        //     // player in correct state
        //     return false;
        // } else if pos != self.players[p].pos {
        //     // pos is where the player is currently sitting
        //     return false;
        // } else if self.props[pos].price != payment {
        //     // payment is right amount
        //     return false;
        // }

        // change
        //      player balance
        self.players[p as usize].balance -= payment as u64;

        //      property owner
        self.props[pos as usize].bought(p);

        return Ok(());
    }

    // pub fn firesaleProp(&mut self, player : Pubkey, pos : u8) -> bool {
    //     let p = self.getPlayerIndex(&player)?;
    //     // enforce that player is owner of this pos
    //     if p != props[pos].ownerId {
    //         return false;
    //     }
    //     // release prop
    //     props[pos].fireSold();

    //     // then transfer funds
    //     players[p].balance += props[pos].price;
    // }

//     pub fn getLoan(&mut self, player : Pubkey, amt : u64) -> bool {
//         // TODO - figure out how to accept Sol here
//         let p = self.getPlayerIndex(&player)?;
//         if players[p].termLeft > 0 {
//             // already have loan
//             return false;
//         }
//         players[p].termLeft = LOAN_TERM; // TODO FIGURE OUT WHERE THIS DECREMENTS AND SCREAMS
//             // AND WHERE INTEREST IS CHARGED
//             // BASICALLY A 'EVENT LOOP' FUNC ON EVERY ROLL
//         players[p].balance += amt;
//         players[p].loanAmt += amt;
//         return true;
//     }

//     pub fn payLoan(&mut self, player : Pubkey, amt : u64) -> bool {
//         let p = self.getPlayerIndex(&player)?;
//         if players[p].balance < amt {
//             return false; // too poor to pay back
//         } else if players[p].loanAmt < amt {
//             // trying to repay too much, let's trim it
//             amt = players[p].loanAmt;
//         }
//         players[p].balance -= amt;
//         players[p].loanAmt -= amt;
//         return true;
//     }

    pub fn getPlayerIndex(&self, p : &Pubkey) -> Result<u8> {
        for i in 0..self.players.len() {
            if self.players[i].acct == *p {
                return Ok(i as u8);
            }
        }
        return err!(GameErrorCode::PlayerIndexNotFound);
    }
// }
}

// pub struct GameData {
//     pub total_wood_collected: u64,
// }

// impl GameData {
//     pub fn on_tree_chopped(&mut self, amount_chopped: u64) -> Result<()> {
//         match self.total_wood_collected.checked_add(amount_chopped) {
//             Some(v) => {
//                 if self.total_wood_collected >= MAX_WOOD_PER_TREE {
//                     self.total_wood_collected = 0;
//                     msg!("Tree successfully chopped. New Tree coming up.");
//                 } else {
//                     self.total_wood_collected = v;
//                     msg!("Total wood chopped: {}", v);
//                 }
//             }
//             None => {
//                 msg!("The ever tree is completly chopped!");
//             }
//         };

//         Ok(())
//     }
// }
