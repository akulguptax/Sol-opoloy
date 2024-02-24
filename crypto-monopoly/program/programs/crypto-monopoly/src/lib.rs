pub use crate::errors::GameErrorCode;
pub use anchor_lang::prelude::*;
pub use session_keys::{session_auth_or, Session, SessionError};
pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;
use crate::constants::*;

declare_id!("DkwsWMCG5BJ51i3PGkmt3KdxWohw9Yn2RZEHkD2QqNGQ");

#[program]
pub mod crypto_monopoly {

    use super::*;

    pub fn init_game(ctx: Context<InitGame>, _level_seed: String) -> Result<()> {
        init_game::init_game(ctx);
        return Ok(());
    }

    pub fn init_player(ctx: Context<InitPlayer>, _level_seed: String) -> Result<()> {
        init_player::init_player(ctx);
        return Ok(());
    }

    pub fn whose_turn(ctx: Context<WhoseTurn>, _level_seed: String) -> Result<Pubkey> {
        return Ok(whose_turn::whose_turn(ctx)?);
    }

    pub fn get_last_roll(ctx: Context<WhoseTurn>, _level_seed: String) -> Result<u8> {
        return Ok(get_last_roll::get_last_roll(ctx)?);
    }

    pub fn start_turn(ctx: Context<InitPlayer>, _level_seed: String) -> Result<MoveResult> {
        return Ok(start_turn::start_turn(ctx)?);
    }

    // This function lets the player chop a tree and get 1 wood. The session_auth_or macro
    // lets the player either use their session token or their main wallet. (The counter is only
    // there so that the player can do multiple transactions in the same block. Without it multiple transactions
    // in the same block would result in the same signature and therefore fail.)
    // #[session_auth_or(
    //     ctx.accounts.player.authority.key() == ctx.accounts.signer.key(),
    //     GameErrorCode::WrongAuthority
    // )]
    // pub fn chop_tree(ctx: Context<ChopTree>, _level_seed: String, counter: u16) -> Result<()> {
    //     chop_tree::chop_tree(ctx, counter, 1)
    // }
}
