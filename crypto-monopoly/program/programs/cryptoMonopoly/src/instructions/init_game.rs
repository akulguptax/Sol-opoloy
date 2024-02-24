use crate::state::game_data::GameData;
// use crate::{constants::MAX_ENERGY, GameData};
use anchor_lang::prelude::*;

pub fn init_game(ctx: Context<InitGame>) -> Result<()> {
    ctx.accounts.game_data.initGame(ctx.accounts.buyin);
    // ctx.accounts.player.energy = MAX_ENERGY;
    // ctx.accounts.player.last_login = Clock::get()?.unix_timestamp;
    // ctx.accounts.player.authority = ctx.accounts.signer.key();
    Ok(())
}

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct Myu8 {
    data : u8,
}

#[derive(Accounts)]
#[instruction(level_seed: String)]
pub struct InitGame<'info> {

    #[account(
        init_if_needed,
        payer = signer,
        space = 1000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [level_seed.as_ref()],
        bump,
    )]
    pub game_data: Account<'info, GameData>,

    #[account(mut)]
    pub buyin : Account<'info, Myu8>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
