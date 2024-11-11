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
    abbreviation: "START"
  },
  {
    name: "Raydium",
    type: "property",
    color: "brown",
    price: 60,
    details: "An automated market maker on Solana offering liquidity and yield.",
    abbreviation: "RAY"
  },
  {
    name: "Serum Chest",
    type: "chest",
    color: "#faf9f6",
    price: 0,
    details: "Decentralized exchange framework for Solana, fortunes vary.",
    abbreviation: "CHEST"
  },
  {
    name: "SolFarm",
    type: "property",
    color: "brown",
    price: 60,
    details: "Yield aggregation platform with compounding strategies on Solana.",
    abbreviation: "FARM"
  },
  {
    name: "SolTax",
    type: "tax",
    color: "#faf9f6",
    price: 200,
    details: "Contribute to the network fee or stake a percentage of your SOL.",
    abbreviation: "TAX"
  },
  {
    name: "Orca Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "DEX that enables efficient Solana swaps with a strategic position.",
    abbreviation: "ORCA"
  },
  {
    name: "Saber Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details: "Liquidity pool platform for stablecoin and wrapped assets trading.",
    abbreviation: "SABER"
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "#faf9f6",
    price: 0,
    details: "Opportunities within the Solana ecosystem, outcomes will vary.",
    abbreviation: "CHANCE"
  },
  {
    name: "Mango Markets Avenue",
    type: "property",
    color: "lightblue",
    price: 100,
    details: "Decentralized, cross-margin trading platform on Solana.",
    abbreviation: "MANGO"
  },
  {
    name: "Step Finance Avenue",
    type: "property",
    color: "lightblue",
    price: 120,
    details: "Portfolio management dashboard across Solana projects.",
    abbreviation: "STEP"
  },
  {
    name: "Solana Jail",
    type: "corner",
    color: "#faf9f6",
    price: 0,
    details: "Network congestion or validator downtime, temporarily out of action.",
    abbreviation: "JAIL"
  },
  {
    name: "Phantom Place",
    type: "property",
    color: "purple",
    price: 140,
    details: "Popular Solana wallet for managing digital assets and NFTs.",
    abbreviation: "PHNTM"
  },
  {
    name: "Solana Power Company",
    type: "utility",
    color: "#faf9f6",
    price: 150,
    details: "Staking SOL to secure the network and earn rewards.",
    abbreviation: "POWER"
  },
  {
    name: "Aldrin Avenue",
    type: "property",
    color: "purple",
    price: 140,
    details: "An innovative DEX on Solana for trading and liquidity pools.",
    abbreviation: "ALDRN"
  },
  {
    name: "Mercurial Finance Avenue",
    type: "property",
    color: "purple",
    price: 160,
    details: "DeFi platform offering dynamic vaults and liquidity pools on Solana.",
    abbreviation: "MERC"
  },
  {
    name: "Star Atlas Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Blockchain-based space-themed gaming metaverse using Solana.",
    abbreviation: "ATLAS"
  },
  {
    name: "Metaplex Place",
    type: "property",
    color: "orange",
    price: 180,
    details: "Protocol for creating and auctioning NFTs on the Solana blockchain.",
    abbreviation: "META"
  },
  {
    name: "Serum Community Chest",
    type: "chest",
    color: "#faf9f6",
    price: 0,
    details: "Gains from decentralized finance on Solana, outcome varies.",
    abbreviation: "CHEST"
  },
  {
    name: "Bonfida Avenue",
    type: "property",
    color: "orange",
    price: 180,
    details: "Full-stack DeFi platform on Solana offering a wide range of services.",
    abbreviation: "FIDA"
  },
  {
    name: "Akash Network Avenue",
    type: "property",
    color: "orange",
    price: 200,
    details: "Decentralized cloud computing marketplace integrated with Solana.",
    abbreviation: "AKT"
  },
  {
    name: "Free Parking",
    type: "corner",
    color: "#faf9f6",
    price: 0,
    details: "A break from transaction fees, no benefits or penalties.",
    abbreviation: "PARK"
  },
  {
    name: "Solend Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "Decentralized borrowing and lending protocol on Solana.",
    abbreviation: "SLND"
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "#faf9f6",
    price: 0,
    details: "A twist of fate in the Solana ecosystem, fortunes can change.",
    abbreviation: "CHANCE"
  },
  {
    name: "Pyth Network Avenue",
    type: "property",
    color: "red",
    price: 220,
    details: "High-fidelity data oracle on Solana for DeFi applications.",
    abbreviation: "PYTH"
  },
  {
    name: "Maple Finance Avenue",
    type: "property",
    color: "red",
    price: 240,
    details: "Corporate credit market on Solana for undercollateralized loans.",
    abbreviation: "MAPLE"
  },
  {
    name: "Solanium Railroad",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Platform for Solana project launches, staking, and governance.",
    abbreviation: "SLIM"
  },
  {
    name: "Audius Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "Decentralized music streaming platform integrated with Solana.",
    abbreviation: "AUDIO"
  },
  {
    name: "Media Network Avenue",
    type: "property",
    color: "yellow",
    price: 260,
    details: "Decentralized content delivery network leveraging Solana.",
    abbreviation: "MEDIA"
  },
  {
    name: "Helium Water (Net)Works",
    type: "utility",
    color: "#faf9f6",
    price: 150,
    details: "Helium - decentralized internet connectivity and freedom.",
    abbreviation: "HNT"
  },
  {
    name: "Civic Avenue",
    type: "property",
    color: "yellow",
    price: 280,
    details: "Identity verification platform on Solana ensuring user privacy.",
    abbreviation: "CVC"
  },
  {
    name: "Go To Solana Jail",
    type: "corner",
    color: "#faf9f6",
    price: 0,
    details: "Smart contract failure or security breach, immediate downtime.",
    abbreviation: "GOTO"
  },
  {
    name: "GenesysGo Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "Infrastructure and node provider for the Solana blockchain.",
    abbreviation: "SHDW"
  },
  {
    name: "Wormhole Avenue",
    type: "property",
    color: "green",
    price: 300,
    details: "Cross-chain bridge connecting Solana with other blockchains.",
    abbreviation: "WORM"
  },
  {
    name: "Serum Community Chest",
    type: "chest",
    color: "#faf9f6",
    price: 0,
    details: "Unexpected DeFi opportunities or challenges on Solana.",
    abbreviation: "CHEST"
  },
  {
    name: "Solrise Finance Avenue",
    type: "property",
    color: "green",
    price: 320,
    details: "Decentralized fund management and investment platform on Solana.",
    abbreviation: "SLRS"
  },
  {
    name: "Solana Short Line",
    type: "railroad",
    color: "gray",
    price: 200,
    details: "Fast and efficient transaction processing on the Solana network.",
    abbreviation: "SSL"
  },
  {
    name: "Solana Chance",
    type: "chance",
    color: "#faf9f6",
    price: 0,
    details: "One last opportunity for a pivotal moment in the Solana ecosystem.",
    abbreviation: "CHANCE"
  },
  {
    name: "Magic Eden Place",
    type: "property",
    color: "darkblue",
    price: 350,
    details: "Leading NFT marketplace on Solana for digital collectibles.",
    abbreviation: "MAGIC"
  },
  {
    name: "Luxury Sol Tax",
    type: "tax",
    color: "#faf9f6",
    price: 100,
    details: "High transaction volumes or NFT trades can incur additional fees.",
    abbreviation: "TAX"
  },
  {
    name: "Anchor Protocol Avenue",
    type: "property",
    color: "darkblue",
    price: 400,
    details: "Savings platform offering low-volatile yields on Solana.",
    abbreviation: "ANC"
  }
];


type BoardProps = {
  players: Player[];
};
const Board: React.FC<BoardProps> = ({ players }) => {
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
          // Get players on this square
          const playersHere = players.filter(p => p.location === index);
          
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
              position="relative"
            >
              <BoardSquare
                name={square.name}
                color={square.color}
                price={square.price}
                details={square.details}
                position={index}
                type={square.type}
                abbreviation={square.abbreviation}
                playersHere={playersHere}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Board;