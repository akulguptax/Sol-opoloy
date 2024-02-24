use crate::constants::*;
use anchor_lang::prelude::*;


#[account]
pub struct Prop {
    pub id: usize,
    pub price: u64,
    pub color: Colors,
    pub rent: u16,
    pub ownerId: usize,
    pub hasMono: bool,
    pub name: String
}


impl Prop {
    pub fn clear(&mut self) -> Result<()> {
        self.id = END_PROPS;
        self.price = DEFAULT_PRICE;
        self.color = Colors::None;
        self.rent = 0;
        self.ownerId = END_PLAYERS;
        self.hasMono = false;
        self.name = String::default();
        return Ok(());
    }

    pub fn bought(&mut self, pid : usize) -> Result<()>{
        self.ownerId = pid;
        // TODO - implement hasMono update
        return Ok(());
    }

    pub fn fireSold(&mut self) -> Result<()>{
        self.ownerId = END_PLAYERS;
        // TODO - implement hasMono update
        return Ok(());
    }
}
