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

export interface Player {
  id: number;
  name: string;
  money: number;
}

const players = [
  {
    id: 1,
    name: "Player One",
    team: "Team A",
    money: 100,
  },
  {
    id: 2,
    name: "Player Two",
    team: "Team B",
    money: 200,
  },
];

const PlayerTable: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    onOpen();
  };

  return (
    <Box overflowX="auto">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Money</Th>
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {players.map((player) => (
            <Tr key={player.id}>
              <Td>
                <Text fontSize="sm">{player.name}</Text>
              </Td>
              <Td isNumeric>
                <Text fontSize="sm">${player.money}</Text>
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
