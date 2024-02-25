import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

const CreateGameButton = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData, playerDataPDA } = useGameState();
  const [isLoadingSession, setIsLoadingSession] = useState(false);

  const joinGameAmount = 0.001 * 1_000_000_000;

  const onCreateGameClick = useCallback(async () => {
    setIsLoadingSession(true);
    if (!sessionWallet || !publicKey) return;

    try {
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

      const transaction = new Transaction().add(
        initGameInstruction,
        transferInstruction
      );

      const txSig = await sendTransaction(transaction, connection, {
        skipPreflight: true,
      });

      console.log(`https://explorer.solana.com/tx/${txSig}?cluster=devnet`);
    } catch (error: any) {
      console.log("error", `Rolling failed! ${error?.message}`);
    } finally {
      setIsLoadingSession(false);
    }
  }, [sessionWallet]);

  return (
    <>
      {publicKey && gameData && (
        <HStack>
          <Button
            isLoading={isLoadingSession}
            onClick={onCreateGameClick}
            width="175px"
          >
            Create Game
          </Button>
        </HStack>
      )}
    </>
  );
};

export default CreateGameButton;
