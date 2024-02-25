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
    // const findProps = (playerId: number, gameData: any) => {
    //   const matches = gameData.props.reduce(
    //     (acc: any, prop: any, index: number) => {
    //       if (prop.ownerId === playerId) {
    //         acc.push(index);
    //       }
    //       return acc;
    //     },
    //     []
    //   );

    //   setPlayerProps(matches);
    // };

    // findProps(player.playerId, gameData);
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
          <p>Player Id: {player?.playerId}</p>
          <p>Money: {player?.balance.toString()}</p>
          <p>Location: {boardData[player?.pos]?.name}</p>
          <p>Properties: </p>
          <SimpleGrid columns={2} spacing={4}>
            {playerProps.map((prop: any, index) => (
              <Box
                key={index}
                p="5"
                shadow="md"
                borderWidth="1px"
                backgroundColor={boardData[prop.index]?.color}
              >
                <Text color="black" fontSize="sm">
                  {boardData[prop.id]?.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
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
