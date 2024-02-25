use anchor_lang::prelude::*;

use crate::constants::*;
use crate::errors::*;
use crate::state::player_data::Player;
use crate::state::prop::Prop;

#[account]
#[derive(Copy)]
pub struct GameData {
    pub buyin: u32,
    pub turn: u8,
    // pub state: State,
    pub props: [Prop; END_PROPS as usize],
    pub players: [Player; END_PLAYERS as usize],
    pub n: u8,
    pub last_roll: u8,
}

impl GameData {
    pub fn onInitGame(&mut self, buyin_: u32) -> Result<()> {
        self.buyin = buyin_;
        self.n = 0;
        self.turn = 0;
        for i in 0..self.props.len() {
            self.props[i].clear();
            self.props[i].id = (i as u8);
        }
        for player in self.players.iter_mut() {
            player.clear();
        }
        // self.state = State::PreRoll;
        return Ok(());
    }

    pub fn onInitPlayer(&mut self, player: Pubkey) -> Result<()> {
        // TODO - accept SOL and make sure it matches correct

        self.players[self.n as usize].init(self.n, player)?;
        self.n += 1;
        // let i = self.getPlayerIndex(&player)?;
        return Ok(());
    }

    fn startGame(&mut self) {
        // self.state = State::PreRoll;
        self.turn = 0;
    }

    pub fn whoseTurn(&self) -> Pubkey {
        return self.players[self.turn as usize].acct;
    }

    pub fn lastRoll(&self) -> u8 {
        return self.last_roll.try_into().unwrap();
    }

    pub fn startTurn(&mut self, p: u8, roll: u8) -> MoveResult {
        // roll dice
        self.last_roll = roll;

        // use dice to update move
        let new_pos = self.players[p as usize].makeMove(self.last_roll as u8);

        // act on new position
        let mut retval = MoveResult::Noop;
        if self.props[new_pos as usize].ownerId == p {
            // your own property, do nothing
            retval = MoveResult::Noop;
        } else if self.props[new_pos as usize].ownerId < END_PLAYERS {
            // someone else owns this, pay rent!!
            let paid: u32 = self.props[new_pos as usize].rent.try_into().unwrap();
            self.players[p as usize].balance -= paid;
            self.players[self.props[new_pos as usize].ownerId as usize].balance += paid;
            retval = MoveResult::Rent;
        } else {
            // no one owns it, you have the option to buy it
            // self.state = State::PostRoll;
            retval = MoveResult::BuyOption;
        }
        
        self.turn = (self.turn + 1) % self.n;
        self.eventLoop();

        return retval;
    }

    pub fn getPlayer(&self, p: &Pubkey) -> Result<Player> {
        return Ok(self.players[self.getPlayerIndex(p)? as usize]);
    }

    pub fn getProp(&self, ind: u8) -> Result<Prop> {
        return Ok(self.props[ind as usize]);
    }

    pub fn buyProp(&mut self, p : u8, pos : u8, payment : u32) -> Result<()> {
        // change
        //      player balance
        self.players[p as usize].balance -= payment as u32;
        self.props[pos as usize].price = payment;
        self.props[pos as usize].rent = (payment>>3) as u16;

        //      property owner
        self.props[pos as usize].bought(p);

        return Ok(());
    }

    pub fn firesaleProp(&mut self, p : u8, pos : u8) -> Result<()> {
        // release prop
        self.props[pos as usize].fireSold();
        // then transfer funds
        self.players[p as usize].balance += (self.props[pos as usize].price >> 1);
        return Ok(());
    }

    pub fn getLoan(&mut self, p : u8, amt : u32) -> Result<()> {
        // TODO - figure out how to accept Sol here
        self.players[p as usize].balance += amt;
        self.players[p as usize].loanAmt += amt;
        self.players[p as usize].termLeft = LOAN_TERM;
        return Ok(());
    }

    pub fn payLoan(&mut self, p : u8, amt : u32) -> Result<()> {
        if self.players[p as usize].loanAmt < amt {
            // trying to repay too much, let's trim it
            self.players[p as usize].loanAmt = 0;
            self.players[p as usize].balance -= amt;
        } else {            
            self.players[p as usize].balance -= amt;
            self.players[p as usize].loanAmt -= amt;
        }
        return Ok(());
    }

    // TODO - remove this once verifying this works
    pub fn getPlayerIndex(&self, p: &Pubkey) -> Result<u8> {
        for i in 0..self.players.len() {
            if self.players[i].acct == *p {
                return Ok(i as u8);
            }
        }
        return err!(GameErrorCode::PlayerIndexNotFound);
    }

    fn eventLoop(&mut self) {
        // for each player
        for player in self.players.iter_mut() {
            if player.playerId >= END_PLAYERS {
                break;
            }
            player.loanStep();
        }
        // increase interest due for everyone
        // decrement termLeft
        // liquidate if expired loan
    }
}
