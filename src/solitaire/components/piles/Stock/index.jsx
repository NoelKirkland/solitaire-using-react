import React, { useContext } from 'react'
import { GameStateContext  } from './../../../../App';
import Card from "./../../Card";
import { filterByPile, /* GameStateContext, pullTopCard, handleCardClick, */ handleClicks } from "./../../../functions";
import "./styles.scss";
const { log } = console;

const Stock = () => {
    const { gameState, setGameState } = useContext(GameStateContext);
    const stockPileCards = Object.values(filterByPile(gameState, 'stock'));
    const handleStockPileClicks = handleClicks('stock');
    const handleEmptyStockPileClicks = handleStockPileClicks({ location: { isEmpty: true } });

  return (
    <div className='card-pile card-pile_stock'>
        {stockPileCards.length > 0 ? (
            stockPileCards.map((cardProps, i) => <Card cardProps={cardProps} cardClick={handleStockPileClicks(cardProps)} key={i} />)
          ) : (
            <div className='empty-slot' onClick={() => handleEmptyStockPileClicks(gameState, setGameState)}></div>
          )}
    </div>
  )
}

export default Stock;
