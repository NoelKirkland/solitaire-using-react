import React, { useContext } from 'react'
import Card from "./../../Card";
import { filterByPile, GameStateContext } from "./../../../functions";
import "./styles.scss";
// const { log } = console;

const Waste = () => {
    const { gameState } = useContext(GameStateContext);
    const wastePileCards = Object.values(filterByPile(gameState, 'waste'));

	return (
		<div className='card-pile card-pile_waste'>
				{wastePileCards.length > 0 ? (
						wastePileCards.map((cardProps, i) => <Card cardProps={cardProps} key={i} />)
						) : (
						<div className='empty-slot'></div>
				)}
		</div>
	)
}

export default Waste;