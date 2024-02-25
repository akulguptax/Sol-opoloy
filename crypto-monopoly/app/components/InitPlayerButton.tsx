import { useCallback, useState } from "react";
import { Button } from "@chakra-ui/react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useGameState } from "@/contexts/GameStateProvider";
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
      console.log("Joined Gamed");

      const initGameInstruction = await program.methods
        .initGame(GAME_DATA_SEED, 1)
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      // Create a transfer transaction to take X SOL from the user
      const transferInstruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey("88jYUb1TymHUT5Mv8AB9cqmVt53KqsqGZqGga2uYRJjn"), // game's treasury account public key
        lamports: joinGameAmount, // gameData?.buyin * 1_000_000_000,
      });

      const initPlayerInstruction = await program.methods
        .initPlayer(GAME_DATA_SEED)
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      // Combine the transfer and initPlayer instructions into a single transaction
      const transaction = new Transaction().add(
        initGameInstruction,
        transferInstruction,
        initPlayerInstruction
      );
      const txSig = await sendTransaction(transaction, connection, {
        skipPreflight: true,
      });

      console.log(gameData);
      console.log(`https://explorer.solana.com/tx/${txSig}?cluster=devnet`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // set loading state back to false
    }
  }, [publicKey, playerDataPDA, connection, joinGameAmount]);
  return (
    <>
      {!gameData && publicKey && (
        <Button onClick={handleClick} isLoading={isLoading}>
          Join Game
        </Button>
      )}
    </>
  );
};
export default InitPlayerButton;