import React, { useContext } from 'react'
import Card from "./../../Card";
import { filterByPile, GameStateContext } from "./../../../functions";
const { log } = console;



const Stock = () => {
    const { gameState } = useContext(GameStateContext);
    log('gameState in Stock:  ', gameState)
    const stockPile = filterByPile(gameState, 'stock');
    log('stockPile in Stock:  ', stockPile)
    log('stockPile array in Stock:  ', Object.values(stockPile))

  return (
    <div className='card-pile card-pile_stock'>
        {
            Object.values(stockPile).map((cardProps, i) => {
                // log('cardProps:  ', cardProps)
            return <Card cardProps={cardProps} key={i} />})
        }
    </div>
  )
}

export default Stock;
