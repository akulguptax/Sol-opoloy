import Image from "next/image";
import { useCallback, useState } from "react";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

type BuyButtonProps = {
  propertyId: number;
  cost: number; 
};

const BuyButton: React.FC<BuyButtonProps> = ({ propertyId, cost }) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData, playerDataPDA } = useGameState();
  const [isLoadingSession, setIsLoadingSession] = useState(false);

  const onBuyClick = useCallback(async () => {
    setIsLoadingSession(true);
    if (!sessionWallet || !publicKey) return;

    try {
      console.log(propertyId, cost);
      
      const buyInstructions = await program.methods
        .buyProp(GAME_DATA_SEED, propertyId, cost)
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      const transaction = new Transaction().add(buyInstructions);

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
            onClick={onBuyClick}
            width="175px"
          >
            Buy Property
          </Button>
        </HStack>
      )}
    </>
  );
};

export default BuyButton;
