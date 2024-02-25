import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import BoardSquare from "./BoardSquare";
import { Player } from "./PlayerTable";

export const boardData = [
  {
    name: "Go",
    type: "corner",
    color: "Red",
    price: 0,
    details: "Collect $200 as you pass.",
  },
  {
    name: "Mediterranean Avenue",
    type: "property",
    color: "brown",
    price: 60,
    details: "The cheapest property on the board.",
  },
  {
    name: "Community Chest",
    type: "chest",
    color: "none",
    price: 0,
    details: "Draw a card, fortunes vary.",
  },
  {
    name: "Baltic Avenue",
    type: "property",
    color: "brown",
    price: 60,
    details: "Slightly more expensive than Mediterranean Avenue.",
  },
  {
    name: "Income Tax",
    type: "tax",
    color: "none",
    price: 200,
    details: "Pay $200 or 10% of your total worth.",
  },
  {
    name: "Reading Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "One of four railroads, a strategic investment.",
  },
  {
    name: "Oriental Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details: "The first property in the lightblue color group.",
  },
  {
    name: "Chance",
    type: "chance",
    color: "none",
    price: 0,
    details: "A game of chance, outcomes will vary.",
  },
  {
    name: "Vermont Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details: "Named after the Green Mountain State.",
  },
  {
    name: "Connecticut Avenue",
    type: "property",
    color: "lightblue",
    price: 120,
    details: "The most expensive property in its color group.",
  },
  {
    name: "Jail",
    type: "corner",
    color: "none",
    price: 0,
    details: "Just visiting or stuck for three turns.",
  },
  {
    name: "St. Charles Place",
    type: "property",
    color: "purple",
    price: 140,
    details: "The gateway to the purple color group.",
  },
  {
    name: "Electric Company",
    type: "utility",
    color: "none",
    price: 150,
    details: "Power your properties, charge opponents.",
  },
  {
    name: "States Avenue",
    type: "property",
    color: "purple",
    price: 140,
    details: "A modest investment with potential returns.",
  },
  {
    name: "Virginia Avenue",
    type: "property",
    color: "purple",
    price: 160,
    details: "A popular spot with a higher rent.",
  },
  {
    name: "Pennsylvania Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "A key transport hub with steady income.",
  },
  {
    name: "St. James Place",
    type: "property",
    color: "orange",
    price: 180,
    details: "A favorite among strategic players.",
  },
  {
    name: "Community Chest",
    type: "chest",
    color: "none",
    price: 0,
    details: "Luck of the draw could change your game.",
  },
  {
    name: "Tennessee Avenue",
    type: "property",
    color: "orange",
    price: 180,
    details: "Famous for its vibrant music scene.",
  },
  {
    name: "New York Avenue",
    type: "property",
    color: "orange",
    price: 200,
    details: "A bustling spot with high rent potential.",
  },
  {
    name: "Free Parking",
    type: "corner",
    color: "none",
    price: 0,
    details: "A free resting place, no benefits or penalties.",
  },
  {
    name: "Kentucky Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "Known for its fast horses and fine bourbon.",
  },
  {
    name: "Chance",
    type: "chance",
    color: "none",
    price: 0,
    details: "Another chance for fortune or fate to intervene.",
  },
  {
    name: "Indiana Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "A prime piece of real estate in the red group.",
  },
  {
    name: "Illinois Avenue",
    type: "property",
    color: "red",
    price: 240,
    details: "Highly trafficked and highly valuable.",
  },
  {
    name: "B&O Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Transportation is key in real estate.",
  },
  {
    name: "Atlantic Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "A sunny spot with great investment potential.",
  },
  {
    name: "Ventnor Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "Beachfront property always commands attention.",
  },
  {
    name: "Water Works",
    type: "utility",
    color: "none",
    price: 150,
    details: "Control the water, control the game.",
  },
  {
    name: "Marvin Gardens",
    type: "property",
    color: "yellow",
    price: 280,
    details: "The outermost property of the yellow color group.",
  },
  {
    name: "Go To Jail",
    type: "corner",
    color: "none",
    price: 0,
    details: "Do not pass Go, do not collect $200.",
  },
  {
    name: "Pacific Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "A lush location with hefty rent.",
  },
  {
    name: "North Carolina Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "A coveted spot for high-stakes players.",
  },
  {
    name: "Community Chest",
    type: "chest",
    color: "none",
    price: 0,
    details: "The community chest brings surprises.",
  },
  {
    name: "Pennsylvania Avenue",
    type: "property",
    color: "green",
    price: 320,
    details: "The pinnacle of the green properties.",
  },
  {
    name: "Short Line",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "The final railroad, completing the set.",
  },
  {
    name: "Chance",
    type: "chance",
    color: "none",
    price: 0,
    details: "Your last chance for a game-changing card.",
  },
  {
    name: "Park Place",
    type: "property",
    color: "darkblue",
    price: 350,
    details: "Luxurious and expensive, a high-class investment.",
  },
  {
    name: "Luxury Tax",
    type: "tax",
    color: "none",
    price: 100,
    details: "The cost of living in luxury.",
  },
  {
    name: "Boardwalk",
    type: "property",
    color: "darkblue",
    price: 400,
    details: "The most prestigious property on the board.",
  },
];
type BoardProps = {
  // players: Player[];
};
const Board: React.FC<BoardProps> = ({}) => {
  const squareSize = "4vw";
  return (
    <Box width="fit-content" margin="auto" overflow="hidden">
      <Grid
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(11, 1fr)"
        gap="2px"
        autoFlow="row dense"
      >
        {boardData.map((square, index) => {
          // Calculate position; simplified for demonstration
          let positionProps = {};
          if (index < 11) {
            // Top row

            positionProps = { colStart: index + 1, rowStart: 1 };
          } else if (index < 21) {
            // Right side
            positionProps = { colStart: 11, rowStart: index - 9 };
          } else if (index < 31) {
            // Bottom row
            positionProps = { colStart: 31 - index, rowStart: 11 };
          } else {
            // Left side
            positionProps = { colStart: 1, rowStart: 41 - index };
          }
          return (
            <GridItem
              key={index}
              {...positionProps}
              width={squareSize}
              height={squareSize}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <BoardSquare
                name={square.name}
                color={square.color}
                price={square.price}
                details={square.details}
                // add someway to highlight square if player index matches
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Board;