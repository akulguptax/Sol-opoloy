import { createContext, useContext, useEffect, useState } from "react"
import { PublicKey } from "@solana/web3.js"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import {
  program,
  GameData,
  GAME_DATA_SEED,
} from "@/utils/anchor"
import { BN } from "@coral-xyz/anchor"

const GameStateContext = createContext<{
  playerDataPDA: PublicKey | null;
  gameData: GameData | null;
  currentPlayer: number | null;
  // properties: Prop[] | null
}>({
  playerDataPDA: null,
  gameData: null,
  currentPlayer: 0,
});
export const useGameState = () => useContext(GameStateContext);
export const GameStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [playerDataPDA, setPlayerData] = useState<PublicKey | null>(null);
  // const [playerState, setPlayerState] = useState<PlayerData | null>(null)
  // const [timePassed, setTimePassed] = useState<any>([])
  // const [nextEnergyIn, setEnergyNextIn] = useState<number>(0)
  const [gameDataPDA, setGameDataPDA] = useState<PublicKey | null>(null);
  const [gameData, setGameData] = useState<GameData | null>(null);
  // const [totalWoodAvailable, setTotalWoodAvailable] = useState<number | null>(0)
  const [currentPlayer, setCurrentPlayer] = useState<number | null>(0);
  useEffect(() => {
    // setPlayerState(null)
    if (!publicKey) {
      return;
    }
    // const [pda] = PublicKey.findProgramAddressSync(
    //   [Buffer.from("player", "utf8"), publicKey.toBuffer()],
    //   program.programId
    // );
    // setPlayerData(pda);
    //   program.account.gameData
    //     .fetch(pda)
    //     .then((data) => {
    //       setPlayerState(data)
    //     })
    //     .catch((error) => {
    //       window.alert("No player data found, please init!")
    //     })
    // connection.onAccountChange(pda, (account) => {
    //   setPlayerState(program.coder.accounts.decode("playerData", account.data))
    // })
  }, [publicKey]);
  useEffect(() => {
    setGameData(null);
    if (!publicKey) {
      return;
    }
    const [pda] = PublicKey.findProgramAddressSync(
      [Buffer.from(GAME_DATA_SEED, "utf8")],
      program.programId
    );
    setGameDataPDA(pda);
    program.account.gameData
      .fetch(pda)
      .then((data) => {
        console.log(data); 
        setGameData(data);
        setCurrentPlayer(data.turn);
      })
      .catch((error) => {
        // window.alert("No game data found, please init!");
        console.log(error)
      });
    connection.onAccountChange(pda, (account) => {
      const newGameData = program.coder.accounts.decode(
        "gameData",
        account.data
      );
      console.log("just got new game data:");
      console.log(newGameData);
      setGameData(newGameData);
      setCurrentPlayer(newGameData.turn);
    });
  }, [publicKey]);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     if (
  //       playerState == null ||
  //       playerState.lastLogin == undefined ||
  //       playerState.energy.toNumber() >= MAX_ENERGY
  //     ) {
  //       return;
  //     }
  //     const lastLoginTime = playerState.lastLogin.toNumber() * 1000;
  //     const currentTime = Date.now();
  //     let timePassed = (currentTime - lastLoginTime) / 1000;
  //     while (timePassed >= TIME_TO_REFILL_ENERGY.toNumber() && playerState.energy.toNumber() < MAX_ENERGY) {
  //       playerState.energy = playerState.energy.add(new BN(1));
  //       playerState.lastLogin = playerState.lastLogin.add(TIME_TO_REFILL_ENERGY);
  //       timePassed -= TIME_TO_REFILL_ENERGY.toNumber();
  //     }
  //     setTimePassed(timePassed);
  //     const nextEnergyIn = Math.floor(TIME_TO_REFILL_ENERGY.toNumber() - timePassed);
  //     setEnergyNextIn(nextEnergyIn > 0 ? nextEnergyIn : 0);
  //   }, 1000);
  //   return () => clearInterval(interval)
  // }, [playerState, timePassed, nextEnergyIn])
  
  return (
    <GameStateContext.Provider
      value={{
        playerDataPDA,
        gameData: gameData,
        currentPlayer,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};