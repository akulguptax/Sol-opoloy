pub use crate::errors::*;
use crate::state::game_data::GameData;
use anchor_lang::prelude::*;

pub fn whose_turn(ctx: Context<WhoseTurn>) -> Result<Pubkey> {
    return Ok(ctx.accounts.game_data.whoseTurn());
}

#[derive(Accounts)]
#[instruction(level_seed: String)]
pub struct WhoseTurn<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 10000, // 8 + 8 for anchor account discriminator and the u32. Using 1000 to have space to expand easily.
        seeds = [level_seed.as_ref()],
        bump,
    )]
    pub game_data: Box<Account<'info, GameData>>,
    
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
