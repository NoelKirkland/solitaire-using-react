import React, { useContext } from 'react'
import { GameStateContext } from './../../index';
import { Card } from "./../Card";
import { filterByPile } from "./../functions";

export const Waste = () => {
    const { gameState } = useContext(GameStateContext);
    const wastePile = filterByPile(gameState, 'waste');

  return (
    <div className='card-pile card-pile_waste'>
        {
            Object.entries(wastePile).map(({ value, suit }) => {
                <Card
                    value={value}
                    suit={suit}
                />
            })
        }
    </div>
  )
}
