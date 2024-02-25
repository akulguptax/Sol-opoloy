import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
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

  const findProps = (playerId: number, gameData: any) => {
    const matches = [];
    for (const prop of gameData.props) {
      if (prop.ownerId === playerId) {
        matches.push(prop);
      }
    }
    return matches;
  };

  findProps(player?.playerId, gameData);

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
