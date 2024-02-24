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
        id = -1;
        price = DEFAULT_PRICE;
        color = Colors::None;
        rent = 0;
        ownerId = -1;
        hasMono = false;
        name = "";
        return Ok(());
    }

    pub fn bought(&mut self, pid : i8) -> Result<()>{
        ownerId = pid;
        // TODO - implement hasMono update
        return Ok(());
    }

    pub fn fireSold(&mut self) -> Result<()>{
        ownerId = -1;
        // TODO - implement hasMono update
        return Ok(());
    }
}
