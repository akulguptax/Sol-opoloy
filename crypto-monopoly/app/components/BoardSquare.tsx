// BoardSquare.tsx
import React from "react";
import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import BuyButton from "./BuyButton";
import SellButton from "./SellButton";
interface BoardSquareProps {
  name: string;
  color: string;
  price: number;
  details: string;
}
const BoardSquare: React.FC<BoardSquareProps> = ({
  name,
  color,
  price,
  details,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={color}
        p="4"
        borderRadius="lg"
        boxShadow="md"
        color="white"
        onClick={onOpen}
        cursor="pointer"
      ></Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="lg" backgroundColor="gray.50">
          <ModalHeader
            backgroundColor={color}
            color="white"
            borderTopRadius="lg"
          >
            {name}
            <ModalCloseButton color="white" _focus={{ boxShadow: "none" }} />
          </ModalHeader>
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text fontSize="lg" fontWeight="bold">
                Price:{" "}
                <Text as="span" fontWeight="normal">
                  {price}
                </Text>
              </Text>
              <Text fontSize="md">
                Details:{" "}
                <Text as="span" fontWeight="normal">
                  {details}
                </Text>
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter backgroundColor="gray.100" borderBottomRadius="lg">
            <BuyButton playerId={5} propertyId={5}/>
            <SellButton playerId={5} propertyId={5}  />
            <Button colorScheme={color} color="black" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default BoardSquare;