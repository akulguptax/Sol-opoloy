use crate::constants::*;
use anchor_lang::prelude::*;

// #[account]
#[derive(AnchorDeserialize, AnchorSerialize, Clone, PartialEq, Copy)]
pub struct Player {
    pub playerId: u8,
    pub acct: Pubkey,
    pub balance: u32,
    pub loanAmt: u32,
    pub termLeft: u8,
    pub pos: u8,
    pub solOwed: i32
}


impl Player {
    pub fn clear(&mut self) -> Result<()> {
        self.playerId = END_PLAYERS;
        self.acct = Pubkey::default();
        self.balance = 0;
        self.loanAmt = 0;
        self.termLeft = 0;
        self.pos = END_PLAYERS;
        self.solOwed = 0;
        
        return Ok(());
    }

    pub fn init(&mut self, pid : u8, acc : Pubkey) -> Result<()>{
        self.playerId = pid;
        self.acct = acc;
        self.balance = INIT_BALANCE;
        self.pos = 0;
        return Ok(());
    }

    pub fn makeMove(&mut self, delta : u8) -> u8 {
        self.pos = (self.pos+delta)%40;
        if self.pos < delta {
            self.balance += PASS_GO;
        }
        return self.pos;
    }

    pub fn loanStep(&mut self) {
        self.solOwed += (self.loanAmt >> DEFAULT_IR) as i32;
        if self.termLeft == 1 {
            self.balance -= self.loanAmt as u32; 
            self.loanAmt = 0;
        }
        if self.termLeft > 0 {
            self.termLeft -= 1;
        }
    }
}
