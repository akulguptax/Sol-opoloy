use anchor_lang::error_code;

#[error_code]
pub enum GameErrorCode {
    #[msg("Game non-empty state")]
    NonEmptyGameState,
    #[msg("Player Index Not Found")]
    PlayerIndexNotFound,
    #[msg("Not your turn")]
    NotYourTurn,
    #[msg("Insufficient Funds or Wrong Amount")]
    InsufficientFunds,
    #[msg("Wrong Location")]
    WrongLocation,
    #[msg("Already have a loan")]
    AlreadyBorrowing,
    #[msg("Over-levered")]
    OverLevered,
}
