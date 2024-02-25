use crate::instructions::init_player::InitPlayer;
use crate::constants::*;
use crate::errors::*;
use anchor_lang::prelude::*;

pub fn get_loan(ctx: Context<InitPlayer>, amt : u32) -> Result<()> {
    let p = ctx.accounts.game_data.getPlayerIndex(&ctx.accounts.signer.key())?;

    // protect against already having a loan
    if ctx.accounts.game_data.players[p as usize].termLeft > 0 || ctx.accounts.game_data.players[p as usize].loanAmt > 0.0 {
        return err!(GameErrorCode::AlreadyBorrowing);
    } else if amt > ctx.accounts.game_data.players[p as usize].balance {
        return err!(GameErrorCode::OverLevered);
    } else {
        ctx.accounts.game_data.getLoan(p, amt);
        return Ok(());
    }
}
