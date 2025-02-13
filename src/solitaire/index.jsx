import React, { useState, useEffect, createContext } from 'react'
import { setInitialGameState } from "./functions";

const GameStateContext = createContext();

export const Solitaire = ({ numCardsPerWasteDeal, Children }) => {
  const [gameState, setGameState] = useState({});
  useEffect(() => {
    setGameState(gameState => gameState = setInitialGameState());
    setGameState(gameState => gameState.numCardsPerWasteDeal = numCardsPerWasteDeal);
  }, [])

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {Children}
    </GameStateContext.Provider>
  )
}
