pub use crate::errors::GameErrorCode;
pub use anchor_lang::prelude::*;
pub use session_keys::{session_auth_or, Session, SessionError};
pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;
pub use crate::state::player_data::Player;
use instructions::*;
use crate::constants::*;

declare_id!("A47a7YmokBd4iHoucPgTvUCknYWRbRsvxsai1ngrRkbM");

#[program]
pub mod crypto_monopoly {

    use super::*;

    pub fn init_game(ctx: Context<InitGame>, _level_seed: String, amt : u32) -> Result<()> {
        init_game::init_game(ctx, amt);
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

    pub fn start_turn(ctx: Context<InitPlayer>, _level_seed: String, r: u8) -> Result<MoveResult> {
        return Ok(start_turn::start_turn(ctx, r)?);
    }

    pub fn get_player(ctx: Context<WhoseTurn>, _level_seed: String) -> Result<Player> {
        return Ok(get_player::get_player(ctx)?);
    }

    pub fn buy_prop(ctx: Context<InitPlayer>, _level_seed: String, pos : u8, payment : u32) -> Result<()> {
        return Ok(buy_prop::buy_prop(ctx, pos, payment)?);
    }

    pub fn get_loan(ctx: Context<InitPlayer>, _level_seed: String, amt : u32) -> Result<()> {
        return Ok(get_loan::get_loan(ctx, amt)?);
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
