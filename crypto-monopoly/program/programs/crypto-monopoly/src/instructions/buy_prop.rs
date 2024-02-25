pub use crate::errors::*;
pub use crate::constants::*;
use crate::state::player_data::Player;
use crate::state::game_data::GameData;
use anchor_lang::prelude::*;

pub fn buy_prop(ctx: Context<BuyPropContext>) -> Result<()> {
    // enforce:
    let game_data = &ctx.accounts.game_data;
    let p = game_data.getPlayerIndex(&ctx.accounts.signer.key())?;
    let payment = ctx.accounts.myinfo.pay;
    let pos = ctx.accounts.myinfo.pos;
    if (payment as u64) < game_data.players[p as usize].balance {
        // enough funds
        return err!(GameErrorCode::InsufficientFunds);
    } else if game_data.turn != p {
        // player turn
        return err!(GameErrorCode::NotYourTurn);
    } else if game_data.state != State::PostRoll {
        // player in correct state
        return err!(GameErrorCode::NotYourTurn);
    } else if pos != game_data.players[p as usize].pos {
        // pos is where the player is currently sitting
        return err!(GameErrorCode::WrongLocation);
    } else if game_data.props[pos as usize].price != (payment as u64) {
        // payment is right amount
        return err!(GameErrorCode::InsufficientFunds);
    }

    return Ok(ctx.accounts.game_data.buyProp(p, pos, payment)?);
}

#[account]
pub struct PurchaseInfo {
    pub pos: u8,
    pub pay: u32,
}

#[derive(Accounts)]
#[instruction(level_seed: String)]
pub struct BuyPropContext<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 10000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [level_seed.as_ref()],
        bump,
    )]
    pub game_data: Box<Account<'info, GameData>>,

    #[account(mut)]
    pub myinfo : Account<'info, PurchaseInfo>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
