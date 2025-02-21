import React, { useContext } from 'react'
import Card from "./../../Card";
import { filterByPile, GameStateContext } from "./../../../functions";
import "./styles.scss";
// const { log } = console;



const Stock = () => {
    const { gameState } = useContext(GameStateContext);
    const stockPile = filterByPile(gameState, 'stock');

  return (
    <div className='card-pile card-pile_stock'>
        {
            Object.values(stockPile).map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
        }
    </div>
  )
}

export default Stock;
