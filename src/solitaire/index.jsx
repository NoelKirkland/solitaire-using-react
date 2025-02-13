import React, { useState, useEffect, createContext } from 'react'
import { getInitialGameState } from "./functions";
import { Stock, Waste, Foundation, Tableau } from "./components/piles";

const GameStateContext = createContext();

export const Solitaire = ({ Children, numCardsPerWasteDeal }) => {
  const [gameState, setGameState] = useState({});
  useEffect(() => {
    setGameState(gameState => gameState = getInitialGameState());
    setGameState(gameState => gameState.numCardsPerWasteDeal = numCardsPerWasteDeal);
  }, [])
  const stockPile = Object.groupBy(gameState, card => card.location.pile === 'stock');
  const wastePile = Object.groupBy(gameState, card => card.location.pile === 'waste');
  const foundationPile = Object.groupBy(gameState, card => card.location.pile === 'foundation');
  const tableauPile = Object.groupBy(gameState, card => card.location.pile === 'tableau');

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {Children}
    </GameStateContext.Provider>
    // <>
    //   <Card
    //       value="A"
    //       suit="♠"
    //   />

    //   <Card
    //       value="3"
    //       suit="♥"
    //   />
    // </>
  )
}
