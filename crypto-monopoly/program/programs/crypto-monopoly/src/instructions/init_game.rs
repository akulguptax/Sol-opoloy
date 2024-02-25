use crate::state::game_data::GameData;
use crate::constants::*;
use crate::errors::*;
// use crate::{constants::MAX_ENERGY, GameData};
use anchor_lang::prelude::*;

pub fn init_game(ctx: Context<InitGame>, data : u32) -> Result<()> {
    // if ctx.accounts.game_data.state != State::Empty {
    //     return err!(GameErrorCode::NonEmptyGameState);
    // } 
    ctx.accounts.game_data.onInitGame( data);
    return Ok(());
}

// #[account]
// pub struct BuyinInfo {
//     pub data: u32,
// }

#[derive(Accounts)]
#[instruction(level_seed: String)]
pub struct InitGame<'info> {

    #[account(
        init_if_needed,
        payer = signer,
        space = 10000, // 8 + 8 for anchor account discriminator and the u32. Using 1000 to have space to expand easily.
        seeds = [level_seed.as_ref()],
        bump,
    )]
    pub game_data: Box<Account<'info, GameData>>,

    // #[account(mut)]
    // pub buyin : Account<'info, BuyinInfo>,

    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
