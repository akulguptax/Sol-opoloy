import Image from "next/image";
import { SetStateAction, useCallback, useState } from "react";
import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSessionWallet } from "@magicblock-labs/gum-react-sdk";
import { useGameState } from "@/contexts/GameStateProvider";
import { GAME_DATA_SEED, gameDataPDA, program } from "@/utils/anchor";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

const GetLoanButton = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const sessionWallet = useSessionWallet();
  const { gameData } = useGameState();
  const [amount, setAmount] = useState("");
  const [isLoadingSession, setIsLoadingSession] = useState(false);

  // Find the player that matches the connected wallet
  const connectedPlayer = gameData?.players.find(
    player => player.acct.toString() === publicKey?.toString()
  );

  const onLoanClick = useCallback(async () => {
    setIsLoadingSession(true);
    if (!sessionWallet || !publicKey || !amount) return;

    try {
      console.log(amount);

      const getLoanInstructions = await program.methods
        .getLoan(GAME_DATA_SEED, Number(amount))
        .accounts({
          gameData: gameDataPDA,
          signer: publicKey,
          systemProgram: SystemProgram.programId,
        })
        .instruction();

      const transaction = new Transaction().add(getLoanInstructions);

      const txSig = await sendTransaction(transaction, connection, {
        skipPreflight: true,
      });

      console.log(`https://explorer.solana.com/tx/${txSig}?cluster=devnet`);
    } catch (error) {
      console.error("error", `Loan failed! ${error}`);
    } finally {
      setIsLoadingSession(false);
    }
  }, [amount, sessionWallet, publicKey, connection]);

  return (
    <>
      {publicKey && gameData && (
        <HStack>
          <Input
            placeholder="Enter loan amount"
            value={amount}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setAmount(e.target.value)
            }
            width="200px"
            marginRight="2"
          />
          <Button
            isLoading={isLoadingSession}
            onClick={onLoanClick}
            width="175px"
          >
            Get Loan
          </Button>
          {connectedPlayer && (
            <Button isLoading={isLoadingSession} width="300px">
              You Owe ${connectedPlayer.loanAmt} + {connectedPlayer.solOwed} Lamports
            </Button>
          )}
        </HStack>
      )}
    </>
  );
};

export default GetLoanButton;
