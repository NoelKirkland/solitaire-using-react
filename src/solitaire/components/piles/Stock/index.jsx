import React, { useContext } from 'react'
import Card from "./../../Card";
import { filterByPile, GameStateContext } from "./../../../functions";
import "./styles.scss";
// const { log } = console;



const Stock = () => {
    const { gameState } = useContext(GameStateContext);
    const stockPileCards = Object.values(filterByPile(gameState, 'stock'));

  return (
    <div className='card-pile card-pile_stock'>
        {stockPileCards.length > 0 ? (
            stockPileCards.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
          ) : (
            <div className='empty-slot'></div>
          )}
    </div>
  )
}

export default Stock;
