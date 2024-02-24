import React, { useEffect, useState } from "react";
// import { fetchGameState, postPlayerAction } from "./api";

const Game = () => {
  const [gameState, setGameState] = useState(null);
  const [currentPlayerId, setCurrentPlayerId] = useState(null);

  useEffect(() => {
    const updateGameState = () => {
      const response = fetchGameState();
      setGameState(response.data);
      setCurrentPlayerId(response.data.currentPlayerId);
    };

    updateGameState();
  }, []);

  const rollDice = () => {
    try {
      const response = postPlayerAction("roll_dice", currentPlayerId);
      setGameState(response.data);
    } catch (error) {
      console.error("Failed to roll dice:", error);
    }
  };

  const renderGameState = () => {
    if (!gameState) return <p>Loading...</p>;

    return <div>{/* Render game state here */}</div>;
  };

  return (
    <div>
      {renderGameState()}
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Game;
