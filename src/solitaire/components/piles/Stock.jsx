import React, { useContext } from 'react'
import { GameStateContext } from './../../index';
import { Card } from "./../Card";
import { filterByPile } from "./../functions";

export const Stock = () => {
    const { gameState } = useContext(GameStateContext);
    const stockPile = filterByPile(gameState, 'stock');

  return (
    <div className='card-pile card-pile_stock'>
        {
            Object.entries(stockPile).map(({ value, suit }) => {
                <Card
                    value={value}
                    suit={suit}
                />
            })
        }
    </div>
  )
}
