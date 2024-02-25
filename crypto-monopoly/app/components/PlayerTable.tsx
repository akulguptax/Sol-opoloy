import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  useDisclosure,
  Tooltip,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import PlayerModal from "./PlayerModal"; // Ensure this component is correctly implemented
import { boardData } from "./Board";
import { GameStateProvider, useGameState } from "@/contexts/GameStateProvider";

export interface Player {
  id: number;
  name: string;
  money: number;
  location: number;
}

const players = [
  {
    id: 1,
    name: "Player One",
    team: "Team A",
    money: 100,
    location: 2,
  },
  {
    id: 2,
    name: "Player Two",
    team: "Team B",
    money: 200,
    location: 5,
  },
];

const PlayerTable: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { gameData, playerDataPDA, currentPlayer } = useGameState();

  const handlePlayerClick = (player: any) => {
    setSelectedPlayer(player);
    onOpen();
  };

  return (
    <Box overflowX="auto">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Player ID</Th>
            <Th isNumeric>Money</Th>
            <Th>Location</Th>
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {gameData?.players
            .filter((player) => player.playerId !== 4)
            .map((player, index) => (
              <Tr key={index}>
                <Td>
                  <Text
                    fontSize="sm"
                    style={{
                      fontWeight:
                        currentPlayer === player.playerId ? "bold" : "normal",
                      color:
                        currentPlayer === player.playerId
                          ? "purple"
                          : "initial",
                    }}
                  >
                    {player?.playerId}
                  </Text>
                </Td>
                <Td isNumeric>
                  <Text fontSize="sm">${player?.balance.toString()}</Text>
                </Td>
                <Td>
                  <Text fontSize="sm">{boardData[player?.pos]?.name}</Text>
                </Td>
                <Td textAlign="center">
                  <Tooltip label="View Details">
                    <Button
                      size="xs"
                      onClick={() => handlePlayerClick(player)}
                      variant="ghost"
                    >
                      🔍 View Details
                    </Button>
                  </Tooltip>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
};

export default PlayerTable;
