import {
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletMultiButton from "@/components/WalletMultiButton";
import DisplayGameState from "@/components/DisplayGameState";
import InitPlayerButton from "@/components/InitPlayerButton";
import SessionKeyButton from "@/components/SessionKeyButton";
import ChopTreeButton from "@/components/ChopTreeButton";
import RequestAirdrop from "@/components/RequestAirdrop";
import DisplayNfts from "@/components/DisplayNfts";
import BuyButton from "@/components/BuyButton";
import SellButton from "@/components/SellButton";
import Board from "@/components/Board";
import RollDice from "@/components/RollDice";
import Image from "next/image";
import PlayerModal from "@/components/PlayerModal";
import PlayerTable from "@/components/PlayerTable";

interface Property {
  name: string;
  color: string;
}

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <Box>
      <Flex px={4} py={4}>
        <Spacer />
        <WalletMultiButton />
      </Flex>
      <VStack>
        <Image src="/logo.png" alt="Logo" width={256} height={256} />
        <Heading>Crypto-Monopoly</Heading>
        <InitPlayerButton />
        {!publicKey ? (
          <Text>Connect to devnet wallet!</Text>
        ) : (
          <>
            <PlayerTable />
            <Board />

            {/* <RequestAirdrop /> */}
            {/* <DisplayNfts /> */}
          </>
        )}
      </VStack>
    </Box>
  );
}
