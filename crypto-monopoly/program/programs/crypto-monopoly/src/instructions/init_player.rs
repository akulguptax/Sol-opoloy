pub use crate::errors::*;
use crate::constants::*;
use crate::state::game_data::GameData;
use anchor_lang::prelude::*;

// TODO - make this accept SOL
pub fn init_player(ctx: Context<InitPlayer>) -> Result<()> {
    if ctx.accounts.game_data.state!=State::GameSetupProgress{
        return err!(GameErrorCode::NonEmptyGameState);
    }
    ctx.accounts.game_data.onInitPlayer(ctx.accounts.signer.key());
    Ok(())
}

#[derive(Accounts)]
#[instruction(level_seed: String)]
pub struct InitPlayer<'info> {
    #[account(
        init_if_needed,
        payer = signer,
        space = 10000, // 8 + 8 for anchor account discriminator and the u64. Using 1000 to have space to expand easily.
        seeds = [level_seed.as_ref()],
        bump,
    )]
    pub game_data: Box<Account<'info, GameData>>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
