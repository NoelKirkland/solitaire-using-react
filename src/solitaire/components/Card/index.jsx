import React, { useState, useEffect, useContext } from "react";
import { GameStateContext  } from './../../state-management/GameStateContext';
import PropTypes from "prop-types";
import "./styles.scss";

const { log } = console;

const Card = ({ cardProps, cardClick }) => {
  const { gameState, setGameState } = useContext(GameStateContext);
  const { value, suit, color, concealed, selected } = cardProps;
  // log(`cardClick func: ${cardClick}`)
  // log(`The ${value} of ${suit}'s`);
  // const [cardState, setCardState] = useState(cardProps);
  // const { value, numValue, suit, suitAbbrev, color, concealed, selected, location, id } = cardState;
  //   const [isConcealed, setIsConcealed] = useState(concealed);
  //   const [isSelected, setIsSelected] = useState(selected);
  //   const [pileLocation, setPileLocation] = useState(location);

  //   function updateCard(){
  //     return setCardState(() => ({ ...cardProps}))
  //   }
  //   useEffect(() => {
  //     updateCard()
  //   },[cardProps])

  //   function handleCardClick(){
  //     cardClick();
  //     updateCard();
  //   }

    return (
        <div
          className={`card ${concealed ? 'card-concealed' : 'card-revealed'} ${selected ? 'card-selected' : ''}`}
          onClick={() => cardClick(gameState, setGameState)}
        >
            {concealed ? (
                <div className="card__back"></div>
            ) : (
                <div className="card__front">
                    <span className={`card__front_info card__front_info-top card__front_info-color-${color}`}>
                        <p className="card__front_info-text">{value}</p><p className="card__front_info-text">{suit}</p>
                    </span>
                    <span className={`card__front_info card__front_info-bottom card__front_info-color-${color}`}>
                        <p className="card__front_info-text">{value}</p><p className="card__front_info-text">{suit}</p>
                    </span>
                </div>
            )
            }
        </div>
    );
}

export default Card;

Card.propTypes = {
  value: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired
}
