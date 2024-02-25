import { useCallback, useState } from "react";
import { Button } from "@chakra-ui/react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { GameStateProvider, useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";

const InitPlayerButton = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const { gameData, playerDataPDA } = useGameState();
  // Specify the amount to join the game (e.g., 1 SOL)
  const joinGameAmount = 0.001 * 1_000_000_000; // .001 SOL in lamports
  const handleClick = useCallback(async () => {
    console.log(gameData);
    if (!publicKey) return;
    setIsLoading(true);
    try {
      console.log("Joined Game, using PDA and conn:");
      console.log(gameDataPDA);
      console.log(connection);


      const initPlayerInstruction = await program.methods
        .initPlayer(GAME_DATA_SEED)
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      const transaction = new Transaction().add(initPlayerInstruction);

      const txSig = await sendTransaction(transaction, connection, {
        skipPreflight: true,
      });

      console.log(publicKey, gameDataPDA);

      console.log(`https://explorer.solana.com/tx/${txSig}?cluster=devnet`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // set loading state back to false
    }
    console.log("Clicked join game: ");
    console.log(gameData)
  }, [publicKey, playerDataPDA, connection, joinGameAmount]);


  return (
    <>
      { publicKey && (
        <Button onClick={handleClick} isLoading={isLoading}>
          Join Game
        </Button>
      )}
    </>
  );
};
export default InitPlayerButton;