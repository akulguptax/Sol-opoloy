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

import { Player } from "./PlayerTable";
import { boardData } from "./Board";

interface PlayerModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal: React.FC<PlayerModalProps> = ({
  player,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{player.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Name: {player.name}</p>
          <p>Money: {player.money}</p>
          <p>Location: {boardData[player.location].name}</p>
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
