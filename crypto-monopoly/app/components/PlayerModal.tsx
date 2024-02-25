import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  SimpleGrid,
  Box,
  Text,
} from "@chakra-ui/react";

import { boardData } from "./Board";
import { useWallet } from "@solana/wallet-adapter-react";
import { useGameState } from "@/contexts/GameStateProvider";

interface PlayerModalProps {
  player: any;
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal: React.FC<PlayerModalProps> = ({
  player,
  isOpen,
  onClose,
}) => {
  const { gameData, playerDataPDA } = useGameState();
  const [playerProps, setPlayerProps] = useState([]);

  useEffect(() => {
    const findProps = (playerId: number, gameData: any) => {
      const matches = gameData.props.reduce(
        (acc: any, prop: any, index: number) => {
          if (prop.ownerId === playerId) {
            acc.push(index);
          }
          return acc;
        },
        []
      );

      setPlayerProps(matches);
    };

    findProps(player.playerId, gameData);
  }, [player.playerId, gameData]);

  console.log(playerProps);
  console.log(gameData?.props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{player.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#333" }}>Player Information</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <strong>Player Id:</strong> {player?.playerId ?? "N/A"}
              </li>
              <li>
                <strong>Money:</strong> ${player?.balance?.toString() ?? "N/A"}
              </li>
              <li>
                <strong>Location:</strong>{" "}
                {boardData[player?.pos]?.name ?? "N/A"}
              </li>
              <li>
                <strong>Properties:</strong>
                <br />
              </li>
            </ul>

            <SimpleGrid columns={2} spacing={4}>
              {playerProps.map((prop: any, index) => (
                <Box
                  key={index}
                  p="3"
                  shadow="md"
                  borderWidth="1px"
                  backgroundColor={boardData[prop]?.color}
                >
                  <Text color="black" fontSize="sm">
                    {boardData[prop]?.name}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PlayerModal;
