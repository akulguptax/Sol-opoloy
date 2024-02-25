pub use crate::errors::*;
pub use crate::constants::*;
// use crate::state::player_data::Player;
use crate::state::game_data::GameData;
use crate::instructions::init_player::InitPlayer;
use anchor_lang::prelude::*;

pub fn buy_prop(ctx: Context<InitPlayer>, pos : u8, payment : u32) -> Result<()> {
    // enforce:
    let game_data = &ctx.accounts.game_data;
    let p = game_data.getPlayerIndex(&ctx.accounts.signer.key())?;
    if (payment as u32) > game_data.players[p as usize].balance {
        // enough funds
        return err!(GameErrorCode::InsufficientFunds);
    } else if game_data.turn != p {
        // player turn
        return err!(GameErrorCode::NotYourTurn);
    } else if pos != game_data.players[p as usize].pos {
        // pos is where the player is currently sitting
        return err!(GameErrorCode::WrongLocation);
    } 

    return Ok(ctx.accounts.game_data.buyProp(p, pos, payment)?);
}