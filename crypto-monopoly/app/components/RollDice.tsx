import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";

const RollDice = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData, playerDataPDA } = useGameState();
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isLoadingMainWallet, setIsLoadingMainWallet] = useState(false);
  const [transactionCounter, setTransactionCounter] = useState(0);

  const onRollClick = useCallback(async () => {
    setIsLoadingSession(true);
    if (!playerDataPDA || !sessionWallet) return;
    setTransactionCounter(transactionCounter + 1);

    try {
      // const transaction = await program.methods
      //   .(GAME_DATA_SEED, transactionCounter)
      //   .accounts({
      //     player: playerDataPDA,
      //     gameData: gameDataPDA,
      //     signer: sessionWallet.publicKey!,
      //     sessionToken: sessionWallet.sessionToken,
      //   })
      //   .transaction();
      // const txids = await sessionWallet.signAndSendTransaction!(transaction);
      // if (txids && txids.length > 0) {
      //   console.log("Transaction sent:", txids);
      // } else {
      //   console.error("Failed to send transaction");
      // }
    } catch (error: any) {
      console.log("error", `Chopping failed! ${error?.message}`);
    } finally {
      setIsLoadingSession(false);
    }
  }, [sessionWallet]);

  return (
    <>
      {publicKey && gameData && (
        <HStack>
          {sessionWallet && sessionWallet.sessionToken != null && (
            <Button
              isLoading={isLoadingSession}
              onClick={onRollClick}
              width="175px"
            >
              Roll Dice
            </Button>
          )}
        </HStack>
      )}
    </>
  );
};

export default RollDice;
