import React, { useContext } from 'react'
import { Card } from "./../Card";
import { filterByPile } from "./../functions";

export const Stock = ({ pileState }) => {
    const { gameState, setGameState } = useContext(GameStateContext);

  return (
    <div className='card-pile card-pile_stock'>
        {
            Object.entries(pileState).map(({ value, suit }) => {
                <Card
                    value={value}
                    suit={suit}
                />
            })
        }
    </div>
  )
}
