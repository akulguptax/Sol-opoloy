use crate::constants::*;
use anchor_lang::prelude::*;


#[account]
pub struct Prop {
    pub id: u8,
    pub price: u32,
    pub color: Colors,
    pub rent: u16,
    pub ownerId: i8,
    pub hasMono: bool,
    pub name: String
}


impl Prop {
    pub fn clear(&mut self) -> Result<()> {
        self.id = -1;
        self.price = DEFAULT_PRICE;
        self.color = Colors::None;
        self.rent = 0;
        self.ownerId = -1;
        self.hasMono = false;
        self.name = "";
        return Ok(());
    }

    pub fn bought(&mut self, pid : i8) -> Result<()>{
        self.ownerId = pid;
        // TODO - implement hasMono update
        return Ok(());
    }

    pub fn fireSold(&mut self) -> Result<()>{
        self.ownerId = -1;
        // TODO - implement hasMono update
        return Ok(());
    }
}
