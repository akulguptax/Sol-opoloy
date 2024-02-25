use anchor_lang::prelude::*;

pub const INIT_BALANCE: u32 = 1000000; // 1MM MonMoney
pub const PASS_GO: u32 = 133333; // get 2/15 of starting each round
pub const DEFAULT_PRICE : u32 = 500000; // default MonMoney price for each property (before setting)
// pub const FIRESALE_DISCOUNT : f32 = 0.75; // discount for fireselling property
pub const DEFAULT_IR : u16 = 5; // right shift n times for interest rate
pub const LOAN_TERM : u8 = 5;

pub const END_PROPS : u8 = 40;
pub const END_PLAYERS : u8 = 4;


#[derive(AnchorDeserialize, AnchorSerialize, Clone, PartialEq, Copy)]
pub enum Colors {
    None,
    Brown,
    Orange,
    Pink,
    LightBlue,
    Red,
    Yellow,
    Green,
    Blue
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone, PartialEq, Copy)]
pub enum State {
    Empty,
    GameSetupProgress,
    GameSetupComplete,
    PreRoll,
    PostRoll,
    AfterGame
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone, PartialEq, Copy)]
pub enum MoveResult {
    Noop,
    Rent,
    BuyOption,
}