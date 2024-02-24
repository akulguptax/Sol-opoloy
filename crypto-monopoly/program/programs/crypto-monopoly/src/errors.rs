use anchor_lang::error_code;

#[error_code]
pub enum GameErrorCode {
    #[msg("Not enough energy")]
    NotEnoughEnergy,
    #[msg("Wrong Authority")]
    WrongAuthority,
    #[msg("Game non-empty state")]
    NonEmptyGameState,
    #[msg("Player Index Not Found")]
    PlayerIndexNotFound,
}
