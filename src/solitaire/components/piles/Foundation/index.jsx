import React, { useContext } from 'react';
import { GameStateContext  } from './../../../state-management/GameStateContext';
import Card from "./../../Card";
import { filterByPile, handleClicks } from "./../../../functions";
import "./styles.scss";
const { log } = console;

const Foundation = () => {
    const { gameState, setGameState } = useContext(GameStateContext);
    const foundationPileCards = Object.values(filterByPile(gameState, 'foundation'));
    const handleFoundationPileClicks = handleClicks('foundation');
    const spadesFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'S');
    const handleEmptySpadesFoundationPileClick = handleFoundationPileClicks({ location: { isEmpty: true, subPile: 'S' } });
    const clubsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'C');
    const handleEmptyClubsFoundationPileClick = handleFoundationPileClicks({ location: { isEmpty: true, subPile: 'C' } });
    const heartsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'H');
    const handleEmptyHeartsFoundationPileClick = handleFoundationPileClicks({ location: { isEmpty: true, subPile: 'H' } });
    const diamondsFoundationPile = foundationPileCards.filter(card => card.location.subPile === 'D');
    const handleEmptyDiamondsFoundationPileClick = handleFoundationPileClicks({ location: { isEmpty: true, subPile: 'D' } });
    
  return (
    <div className='game-section_foundation'>
      <div className='card-pile foundation-pile foundation-pile_spades'>
        {spadesFoundationPile.length > 0 ? (
            spadesFoundationPile.map((card, i) => <Card cardProps={card} cardClick={handleFoundationPileClicks(card)} key={i} />)
          ) : (
            <div className='empty-slot' onClick={() => handleEmptySpadesFoundationPileClick(gameState, setGameState)}>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_clubs'>
        {clubsFoundationPile.length > 0 ? (
          clubsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} cardClick={handleFoundationPileClicks(card)} key={i} />)
        ) : (
          <div className='empty-slot' onClick={() => handleEmptyClubsFoundationPileClick(gameState, setGameState)}>
            <p className='empty-slot-text'>♣</p>
          </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_hearts'>
        {heartsFoundationPile.length > 0 ? (
          heartsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} cardClick={handleFoundationPileClicks(card)} key={i} />)
        ) : (
          <div className='empty-slot' onClick={() => handleEmptyHeartsFoundationPileClick(gameState, setGameState)}>
            <p className='empty-slot-text'>♥</p>
          </div>
        )}
      </div>

      <div className='card-pile foundation-pile foundation-pile_diamonds'>
        {diamondsFoundationPile.length > 0 ? (
          diamondsFoundationPile.map((cardProps, i) => <Card cardProps={cardProps} cardClick={handleFoundationPileClicks(card)} key={i} />)
        ) : (
          <div className='empty-slot' onClick={() => handleEmptyDiamondsFoundationPileClick(gameState, setGameState)}>
            <p className='empty-slot-text'>♦</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Foundation;
