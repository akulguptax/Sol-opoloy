use crate::constants::*;
use anchor_lang::prelude::*;


#[derive(AnchorDeserialize, AnchorSerialize, Clone, PartialEq, Copy)]
pub struct Prop {
    pub id: u8,
    pub price: u32,
    pub rent: u16,
    pub ownerId: u8,
    // pub hasMono: bool,
}


impl Prop {
    pub fn clear(&mut self) -> Result<()> {
        self.id = END_PROPS;
        self.price = DEFAULT_PRICE;
        self.rent = 0;
        self.ownerId = END_PLAYERS;
        // self.hasMono = false;
        return Ok(());
    }

    pub fn bought(&mut self, pid : u8) -> Result<()>{
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
