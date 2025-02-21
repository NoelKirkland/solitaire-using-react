import React, { useContext } from 'react'
import Card from "./../../Card";
import { filterByPile, GameStateContext } from "./../../../functions";
import "./styles.scss";
// const { log } = console;



const Foundation = () => {
    const { gameState } = useContext(GameStateContext);
    const foundationPileCards = Object.values(filterByPile(gameState, 'foundation'));
    const spadesFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'S');
    const clubsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'C');
    const heartsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'H');
    const diamondsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'D');

  return (
    <div className='game-section_foundation'>
      <div className='card-pile foundation-pile foundation-pile_spades'>
        {spadesFoundationPile.length > 0 ? (
            spadesFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_clubs'>
        {clubsFoundationPile.length > 0 ? (
          clubsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
        ) : (
          <div className='empty-slot'>
            <p className='empty-slot-text'>♣</p>
          </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_hearts'>
        {heartsFoundationPile.length > 0 ? (
          heartsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
        ) : (
          <div className='empty-slot'>
            <p className='empty-slot-text'>♥</p>
          </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_diamonds'>
        {diamondsFoundationPile.length > 0 ? (
          diamondsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
        ) : (
          <div className='empty-slot'>
            <p className='empty-slot-text'>♦</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Foundation;
