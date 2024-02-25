use crate::instructions::init_player::InitPlayer;
use crate::constants::*;
use crate::errors::*;
use anchor_lang::prelude::*;

pub fn start_turn(ctx: Context<InitPlayer>) -> Result<MoveResult> {
    let player = ctx.accounts.signer.key();
    let p = ctx.accounts.game_data.getPlayerIndex(&player)?;
    if p > 3 {
        return err!(GameErrorCode::PlayerIndexNotFound);
    } else if ctx.accounts.game_data.turn != p {
        return err!(GameErrorCode::NotYourTurn);
    }
    // if ctx.accounts.game_data.state != State::PreRoll || 
    //     ctx.accounts.game_data.turn as u8 != p {
    //     return err!(GameErrorCode::NotYourTurn);
    // }
    return Ok(ctx.accounts.game_data.startTurn(p));
}
