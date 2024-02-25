pub use crate::errors::*;
use crate::instructions::whose_turn::WhoseTurn;
use crate::state::player_data::Player;
use anchor_lang::prelude::*;

pub fn get_player(ctx: Context<WhoseTurn>) -> Result<Player> {
    return Ok(ctx.accounts.game_data.getPlayer(&ctx.accounts.signer.key())?);
}