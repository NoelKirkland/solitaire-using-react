import React, { useContext } from 'react';
import { GameStateContext  } from './../../../state-management/GameStateContext';
import Card from "./../../Card";
import { filterByPile, handleClicks } from "./../../../functions";
import "./styles.scss";
const { log } = console;

const Waste = () => {
    const { gameState } = useContext(GameStateContext);
    const wastePileCards = Object.values(filterByPile(gameState, 'waste')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);
		const handleWastePileClicks = handleClicks('waste');
		

	return (
		<div className='card-pile card-pile_waste'>
				{wastePileCards.length > 0 ? (
						wastePileCards.map((card, i) => <Card cardProps={card} cardClick={handleWastePileClicks(card)} key={i} />)
						) : (
						<div className='empty-slot'></div>
				)}
		</div>
	)
}

export default Waste;