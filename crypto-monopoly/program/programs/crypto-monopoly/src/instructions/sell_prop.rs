pub use crate::errors::*;
pub use crate::constants::*;
// use crate::state::player_data::Player;
use crate::state::game_data::GameData;
use crate::instructions::init_player::InitPlayer;
use anchor_lang::prelude::*;

pub fn sell_prop(ctx: Context<InitPlayer>, pos : u8) -> Result<()> {
    // enforce:
    let game_data = &ctx.accounts.game_data;
    let p = game_data.getPlayerIndex(&ctx.accounts.signer.key())?;
    if pos >= END_PROPS || game_data.props[pos as usize].ownerId != p {
        return err!(GameErrorCode::WrongLocation);
    } else if game_data.turn != p {
        // player turn
        return err!(GameErrorCode::NotYourTurn);
    } 
    

    return Ok(ctx.accounts.game_data.firesaleProp(p, pos)?);
}