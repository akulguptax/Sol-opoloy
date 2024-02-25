import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { randomInt } from "crypto";

const RollDice = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData, playerDataPDA } = useGameState();
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  // const [isLoadingMainWallet, setIsLoadingMainWallet] = useState(false);
  // const [transactionCounter, setTransactionCounter] = useState(0);

  const onRollClick = useCallback(async () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    setIsLoadingSession(true);
    if (!sessionWallet || !publicKey) return;

    try {
      const rollInstructions = await program.methods
        .startTurn(GAME_DATA_SEED, roll1 + roll2)
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      const transaction = new Transaction().add(rollInstructions);

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
            onClick={onRollClick}
            width="175px"
          >
            Roll Dice
          </Button>
        </HStack>
      )}
    </>
  );
};

export default RollDice;
