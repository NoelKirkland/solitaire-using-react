import React, { useState, useContext } from 'react';
import { GameStateContext  } from './../../../state-management/GameStateContext';
import Card from "./../../Card";
import { filterByPile, handleClicks } from "./../../../functions";
import "./styles.scss";
const { log } = console;

const Tableau = () => {
    const { gameState, setGameState } = useContext(GameStateContext);
    const tableauPileCards = Object.values(filterByPile(gameState, 'tableau'));
    const allSubPilesArray = tableauPileCards.reduce((allSubPiles, card) => {
      const { subPile, pileIndex } = card.location;
      const subPileArrayIndex = subPile - 1;
      const subPileArray = allSubPiles[subPileArrayIndex];
      
      subPileArray[pileIndex] = card;
      // subPileArray.push(card);


      return allSubPiles;
    }, [[], [], [], [], [], [], []]);
    const test = handleCardClick(gameState, setGameState);
  return (
    <div className='game-section_tableau'>
      <div className='card-pile tableau-pile tableau-pile_1'>
        {allSubPilesArray[0].length > 0 ? (
            allSubPilesArray[0].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => {
              test(cardProps)
              setTableauState(() => ({...tableauState}))
            }} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_2'>
        {allSubPilesArray[1].length > 0 ? (
            allSubPilesArray[1].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => handleCardClick(gameState, setGameState, 'tableau', cardProps)} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_3'>
        {allSubPilesArray[2].length > 0 ? (
            allSubPilesArray[2].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => handleCardClick(gameState, setGameState, 'tableau', cardProps)} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_4'>
        {allSubPilesArray[3].length > 0 ? (
            allSubPilesArray[3].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => handleCardClick(gameState, setGameState, 'tableau', cardProps)} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_5'>
        {allSubPilesArray[4].length > 0 ? (
            allSubPilesArray[4].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => handleCardClick(gameState, setGameState, 'tableau', cardProps)} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_6'>
        {allSubPilesArray[5].length > 0 ? (
            allSubPilesArray[5].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => handleCardClick(gameState, setGameState, 'tableau', cardProps)} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>

      <div className='card-pile tableau-pile tableau-pile_7'>
        {allSubPilesArray[6].length > 0 ? (
            allSubPilesArray[6].map((cardProps, i) => <Card cardProps={cardProps} cardClick={() => {
              handleCardClick(gameState, setGameState, 'tableau', cardProps);
              setGameState(s => ({ ...s }))
            }} key={i} />)
          ) : (
            <div className='empty-slot'>
              <p className='empty-slot-text'>♠</p>
            </div>
        )}
      </div>
    </div>
  )
}

export default Tableau;

