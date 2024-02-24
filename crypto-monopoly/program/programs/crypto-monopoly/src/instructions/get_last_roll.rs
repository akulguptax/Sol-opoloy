pub use crate::errors::*;
// use crate::state::game_data::GameData;
use anchor_lang::prelude::*;
use crate::instructions::whose_turn::WhoseTurn;

pub fn get_last_roll(ctx: Context<WhoseTurn>) -> Result<u8> {
    return Ok(ctx.accounts.game_data.lastRoll());
}