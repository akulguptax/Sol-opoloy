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
  HStack,
} from "@chakra-ui/react";
import BuyButton from "./BuyButton";
import SellButton from "./SellButton";
interface BoardSquareProps {
  name: string;
  color: string;
  price: number;
  details: string;
  position: number;
  type: string;
  abbreviation: string;
  playersHere: Player[];
}
const BoardSquare: React.FC<BoardSquareProps> = ({
  name,
  color,
  price,
  details,
  position,
  type,
  abbreviation,
  playersHere
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Determine if markers should be on top or bottom based on position
  const isTopRow = position < 11;
  const isBottomRow = position >= 20 && position < 31;
  
  return (
    <>
      <Box position="relative" width="4vw" height="4vw">
        <Box
          bg={color}
          borderColor="black"
          borderWidth="3px"
          borderRadius="lg"
          boxShadow="md"
          color="white"
          onClick={onOpen}
          cursor="pointer"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="100%"
          padding="0.3vw"
        >
          {/* Player markers */}
          {playersHere.length > 0 && (
            <HStack
              spacing={1}
              mb={isTopRow ? 0 : "auto"}
              mt={isBottomRow ? 0 : "auto"}
              minHeight="0.8vw"
            >
              {playersHere.map((player, idx) => (
                <Box
                  key={idx}
                  bg={player.color || "gray.500"}
                  color="white"
                  borderRadius="full"
                  minWidth="0.8vw"
                  height="0.8vw"
                  fontSize="0.6vw"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {player.id}
                </Box>
              ))}
            </HStack>
          )}
          
          {/* Square abbreviation */}
          <Text
            fontSize="0.8vw"
            fontWeight="bold"
            color={color === "#faf9f6" || color === "yellow" ? "black" : "white"}
            textAlign="center"
            noOfLines={1}
            width="100%"
          >
            {abbreviation}
          </Text>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="lg" backgroundColor="gray.50">
          {color == "#faf9f6" ? (
            <ModalHeader
              backgroundColor={color}
              color="black"
              borderTopRadius="lg"
            >
              {name}
              <ModalCloseButton color="white" _focus={{ boxShadow: "none" }} />
            </ModalHeader>
          ) : (
            <ModalHeader
              backgroundColor={color}
              color="white"
              borderTopRadius="lg"
            >
              {name}
              <ModalCloseButton color="white" _focus={{ boxShadow: "none" }} />
            </ModalHeader>
          )}
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
            {(type === "property" ||
              type === "utility" ||
              type === "railroad") && (
              <HStack>
                <BuyButton cost={price} propertyId={position} />
                <SellButton propertyId={position} />
              </HStack>
            )}

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