import React, { useState, useEffect, createContext } from 'react'
// import Solitaire from './solitaire/Solitaire' 
import { GameStateContext } from './solitaire/state-management/GameStateContext' 
// import { Stock, Waste, Foundation, Tableau } from "./solitaire/components/piles";
import Stock from "./solitaire/components/piles/Stock/index";
import Waste from "./solitaire/components/piles/Waste/index";
import Foundation from "./solitaire/components/piles/Foundation/index";
// import Tableau from "./solitaire/components/piles/Tableau/index";
import { setInitialGameState } from "./solitaire/functions"
const { log } = console;
import './App.scss'

function App() {
  const [gameState, setGameState] = useState({});
    function newGame() {
      return setGameState(() => ({...setInitialGameState(), cardsSelected: [], 'numCardsPerWasteDeal': 3}));
    };
  
    useEffect(() => {
      newGame();
    }, []);
    log('gameState:  ', gameState);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      <div className='card-game-area'>
        <div className='top-row'>
          <div className='game-section_store'>
            <Stock />
            <Waste />
          </div>
          <Foundation />
        </div>
        {/* <div className='bottom-row'>
          <Tableau />
        </div>
        {/* <button onClick={handleSetNewGame}>Restart</button> */}
      </div>
        </GameStateContext.Provider>
  )
}

export default App
