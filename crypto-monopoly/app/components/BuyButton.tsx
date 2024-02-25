import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";
type BuyButtonProps = {
  playerId: number;
  propertyId: number;
};
const BuyButton: React.FC<BuyButtonProps> = ({ playerId, propertyId }) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData, playerDataPDA } = useGameState();
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [isLoadingMainWallet, setIsLoadingMainWallet] = useState(false);
  const [transactionCounter, setTransactionCounter] = useState(0);
  const onBuyClick = useCallback(async () => {
    console.log(playerId, propertyId);
    setIsLoadingSession(true);
    if (!playerDataPDA || !sessionWallet) return;
    try {
      // Check if player can buy, if so subtract money from player
      // set prop in gameData to who owns bought
      // playerData add the prop
      //
      // const transaction = await program.methods
      //   .buy(GAME_DATA_SEED, transactionCounter)
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
              onClick={onBuyClick}
              width="175px"
            >
              Buy Property
            </Button>
          )}
        </HStack>
      )}
    </>
  );
};
export default BuyButton;