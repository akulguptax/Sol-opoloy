import { Program, IdlAccounts, BN } from "@coral-xyz/anchor"
import { CryptoMonopoly, IDL } from "../idl/crypto-monopoly"
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js"
import { WrappedConnection } from "./wrappedConnection";

export const CONNECTION = new WrappedConnection(process.env.NEXT_PUBLIC_RPC ? process.env.NEXT_PUBLIC_RPC : 'https://rpc.magicblock.app/devnet',  {
  wsEndpoint: process.env.NEXT_PUBLIC_WSS_RPC ? process.env.NEXT_PUBLIC_WSS_RPC : "wss://rpc.magicblock.app/devnet",
  commitment: 'confirmed' 
});

export const METAPLEX_READAPI = "https://devnet.helius-rpc.com/?api-key=78065db3-87fb-431c-8d43-fcd190212125";

// Here you can basically use what ever seed you want. For example one per level or city or whatever.
export const GAME_DATA_SEED = "level_2";

// CryptoMonopoly game program ID
const programId = new PublicKey("A47a7YmokBd4iHoucPgTvUCknYWRbRsvxsai1ngrRkbM")

// Create the program interface using the idl, program ID, and provider
export const program = new Program<CryptoMonopoly>(IDL, programId, {
  connection: CONNECTION,
})

export const [gameDataPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from(GAME_DATA_SEED, "utf8")],
  program.programId
)

// Player Data Account Type from Idl
// export type PlayerData = IdlAccounts<CryptoMonopoly>["playerData"]
export type GameData = IdlAccounts<CryptoMonopoly>["gameData"]

// Constants for the game
// export const TIME_TO_REFILL_ENERGY: BN = new BN(60)
// export const MAX_ENERGY = 100
// export const ENERGY_PER_TICK: BN = new BN(1)
// export const TOTAL_WOOD_AVAILABLE: BN = new BN(100000)

export const INIT_BALANCE = 1000000; 
export const PASS_GO = 200; // get 2/15 of starting each round
export const DEFAULT_PRICE = 500000; // default MonMoney price for each property (before setting)
// export const FIRESALE_DISCOUNT = 0.75; // discount for fireselling property
export const DEFAULT_IR = 5; // discount for fireselling property
export const LOAN_TERM = 5;