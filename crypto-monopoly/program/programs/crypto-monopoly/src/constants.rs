pub const TIME_TO_REFILL_ENERGY: i64 = 60;
pub const MAX_ENERGY: u64 = 100;
pub const MAX_WOOD_PER_TREE: u64 = 100000;


pub const INIT_BALANCE: u64 = 1000000; // 1MM MonMoney
pub const PASS_GO: u64 = 133333; // get 2/15 of starting each round
pub const DEFAULT_PRICE : u64 = 500000; // default MonMoney price for each property (before setting)
pub const FIRESALE_DISCOUNT : f32 = 0.75; // discount for fireselling property
pub const DEFAULT_IR : f64 = 0.0001; // discount for fireselling property
pub const LOAN_TERM : u8 = 5;

pub const enum Colors {
    None,
    Brown,
    Orange,
    Pink,
    Light_blue,
    Red,
    Yellow,
    Green,
    Blue
}

pub const enum State {
    Empty,
    GameSetupProgress,
    GameSetupComplete,
    PreRoll,
    PostRoll,
    AfterGame
}

pub const enum MoveResult {
    Noop,
    Rent,
    BuyOption,
    Error
}