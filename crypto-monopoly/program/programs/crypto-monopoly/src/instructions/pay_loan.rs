use crate::instructions::init_player::InitPlayer;
use crate::constants::*;
use crate::errors::*;
use anchor_lang::prelude::*;

pub fn pay_loan(ctx: Context<InitPlayer>, amt : u32) -> Result<()> {
    let p = ctx.accounts.game_data.getPlayerIndex(&ctx.accounts.signer.key())?;

    // protect against already having a loan
    if ctx.accounts.game_data.players[p as usize].balance < amt {
        return err!(GameErrorCode::InsufficientFunds);
    }
    ctx.accounts.game_data.payLoan(p, amt)?;
    return Ok(());
}
