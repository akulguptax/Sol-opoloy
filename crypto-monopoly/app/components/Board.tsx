import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import BoardSquare from "./BoardSquare";
import { Player } from "./PlayerTable";

export const boardData = [
  {
    name: "SolStarter",
    type: "corner",
    color: "lightGreen",
    price: 0,
    details: "Launchpad for Solana projects, collecting funds as you pass.",
  },
  {
    name: "Raydium",
    type: "property",
    color: "brown",
    price: 60,
    details:
      "An automated market maker on Solana offering liquidity and yield.",
  },
  {
    name: "Serum Chest",
    type: "chest",
    color: "lightbrown",
    price: 0,
    details: "Decentralized exchange framework for Solana, fortunes vary.",
  },
  {
    name: "SolFarm",
    type: "property",
    color: "brown",
    price: 60,
    details:
      "Yield aggregation platform with compounding strategies on Solana.",
  },
  {
    name: "SolTax",
    type: "tax",
    color: "none",
    price: 200,
    details: "Contribute to the network fee or stake a percentage of your SOL.",
  },
  {
    name: "Orca Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details:
      "DEX that enables efficient Solana swaps with a strategic position.",
  },
  {
    name: "Saber Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details:
      "Liquidity pool platform for stablecoin and wrapped assets trading.",
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "none",
    price: 0,
    details: "Opportunities within the Solana ecosystem, outcomes will vary.",
  },
  {
    name: "Mango Markets Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details: "Decentralized, cross-margin trading platform on Solana.",
  },
  {
    name: "Step Finance Avenue",
    type: "property",
    color: "lightblue",
    price: 120,
    details: "Portfolio management dashboard across Solana projects.",
  },
  {
    name: "Solana Jail",
    type: "corner",
    color: "none",
    price: 0,
    details:
      "Network congestion or validator downtime, temporarily out of action.",
  },
  {
    name: "Phantom Place",
    type: "property",
    color: "purple",
    price: 140,
    details: "Popular Solana wallet for managing digital assets and NFTs.",
  },
  {
    name: "Solana Power Company",
    type: "utility",
    color: "none",
    price: 150,
    details: "Staking SOL to secure the network and earn rewards.",
  },
  {
    name: "Aldrin Avenue",
    type: "property",
    color: "purple",
    price: 140,
    details: "An innovative DEX on Solana for trading and liquidity pools.",
  },
  {
    name: "Mercurial Finance Avenue",
    type: "property",
    color: "purple",
    price: 160,
    details:
      "DeFi platform offering dynamic vaults and liquidity pools on Solana.",
  },
  {
    name: "Star Atlas Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Blockchain-based space-themed gaming metaverse using Solana.",
  },
  {
    name: "Metaplex Place",
    type: "property",
    color: "orange",
    price: 180,
    details:
      "Protocol for creating and auctioning NFTs on the Solana blockchain.",
  },
  {
    name: "Serum Community Chest",
    type: "chest",
    color: "none",
    price: 0,
    details: "Gains from decentralized finance on Solana, outcome varies.",
  },
  {
    name: "Bonfida Avenue",
    type: "property",
    color: "orange",
    price: 180,
    details:
      "Full-stack DeFi platform on Solana offering a wide range of services.",
  },
  {
    name: "Akash Network Avenue",
    type: "property",
    color: "orange",
    price: 200,
    details:
      "Decentralized cloud computing marketplace integrated with Solana.",
  },
  {
    name: "Free Parking",
    type: "corner",
    color: "none",
    price: 0,
    details: "A break from transaction fees, no benefits or penalties.",
  },
  {
    name: "Solend Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "Decentralized borrowing and lending protocol on Solana.",
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "none",
    price: 0,
    details: "A twist of fate in the Solana ecosystem, fortunes can change.",
  },
  {
    name: "Pyth Network Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "High-fidelity data oracle on Solana for DeFi applications.",
  },
  {
    name: "Maple Finance Avenue",
    type: "property",
    color: "red",
    price: 240,
    details: "Corporate credit market on Solana for undercollateralized loans.",
  },
  {
    name: "Solanium Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Platform for Solana project launches, staking, and governance.",
  },
  {
    name: "Audius Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "Decentralized music streaming platform integrated with Solana.",
  },
  {
    name: "Media Network Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "Decentralized content delivery network leveraging Solana.",
  },
  {
    name: "Helium Water (Net)Works",
    type: "utility",
    color: "none",
    price: 150,
    details: "Helium - decentralized internet connectivity and freedom.",
  },
  {
    name: "Civic Avenue",
    type: "property",
    color: "yellow",
    price: 280,
    details: "Identity verification platform on Solana ensuring user privacy.",
  },
  {
    name: "Go To Solana Jail",
    type: "corner",
    color: "none",
    price: 0,
    details: "Smart contract failure or security breach, immediate downtime.",
  },
  {
    name: "GenesysGo Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "Infrastructure and node provider for the Solana blockchain.",
  },
  {
    name: "Wormhole Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "Cross-chain bridge connecting Solana with other blockchains.",
  },
  {
    name: "Serum Community Chest",
    type: "chest",
    color: "none",
    price: 0,
    details: "Unexpected DeFi opportunities or challenges on Solana.",
  },
  {
    name: "Solrise Finance Avenue",
    type: "property",
    color: "green",
    price: 320,
    details: "Decentralized fund management and investment platform on Solana.",
  },
  {
    name: "Solana Short Line",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Fast and efficient transaction processing on the Solana network.",
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "none",
    price: 0,
    details:
      "One last opportunity for a pivotal moment in the Solana ecosystem.",
  },
  {
    name: "Magic Eden Place",
    type: "property",
    color: "darkblue",
    price: 350,
    details: "Leading NFT marketplace on Solana for digital collectibles.",
  },
  {
    name: "Luxury Sol Tax",
    type: "tax",
    color: "none",
    price: 100,
    details:
      "High transaction volumes or NFT trades can incur additional fees.",
  },
  {
    name: "Anchor Protocol Avenue",
    type: "property",
    color: "darkblue",
    price: 400,
    details: "Savings platform offering low-volatile yields on Solana.",
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
                position={index}
                type={square.type}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Board;