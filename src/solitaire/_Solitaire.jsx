import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { setInitialGameState, GameStateContext } from "./functions";

const { log } = console;

const Solitaire = ({ numCardsPerWasteDeal, children }) => {
  const [gameState, setGameState] = useState({});
  function newGame() {
    setGameState(() => ({...setInitialGameState(), cardsSelected: [], 'numCardsPerWasteDeal': numCardsPerWasteDeal}));
  };

  useEffect(() => {
    newGame();
  }, []);
  log('gameState:  ', gameState);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  )
}

export default Solitaire;

Solitaire.propTypes = {
  numCardsPerWasteDeal: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
}