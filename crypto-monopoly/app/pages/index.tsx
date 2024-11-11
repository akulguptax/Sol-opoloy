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
import InitPlayerButton from "@/components/InitPlayerButton";
import Board from "@/components/Board";
import RollDice from "@/components/RollDice";
import Image from "next/image";
import PlayerTable from "@/components/PlayerTable";
import CreateGameButton from "@/components/CreateGameButton";
import GetLoanButton from "@/components/GetLoanButton";
import { useGameState } from "@/contexts/GameStateProvider";

export default function Home() {
  const { publicKey } = useWallet();
  const { gameData } = useGameState();

  // Map gameData players to match the existing Player interface
  const mappedPlayers: Player[] = gameData?.players.map(player => ({
    id: player.playerId,
    name: `Player ${player.playerId}`,
    money: player.balance,
    location: player.pos
  })) || [];

  return (
    <Box>
      <Flex px={4} py={4}>
        <Spacer />
        <WalletMultiButton />
      </Flex>
      <VStack>
        <Image src="/logo.png" alt="Logo" width={256} height={256} />
        <br />
        <Heading>Sol-opoly</Heading>
        <br />
        <VStack>
          <HStack>
            <CreateGameButton />
            <InitPlayerButton />
            <RollDice />
          </HStack>
          <br />
          <GetLoanButton />
        </VStack>
        <br />
        {!publicKey ? (
          <Text>Connect to devnet wallet!</Text>
        ) : (
          <>
            <PlayerTable />
            <br />
            <Board players={mappedPlayers} />
            <br />
            <br />
            <br />
            <br />
          </>
        )}
      </VStack>
    </Box>
  );
}
