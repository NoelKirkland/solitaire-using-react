import React, { useState } from "react";
import "./styles.scss";

const getColorFromSuit = suit => {
    if(suit === "♣" || suit === "♠"){
        return 'black';
    }
    if(suit === "♥" || suit === "♦"){
        return 'red';
    }
    return null;
};

const getNumValue = (value) => {
    switch(value){
      case 'A':
        return 1;
      case 'J':
        return 11;
      case 'Q':
        return 12;
      case 'K':
        return 13;
      default:
        return value * 1;
    }
  }

export const Card = ({value, suit}) => {
    const [isConcealed, setIsConcealed] = useState(true);
    const [selected, setSelected] = useState(false);
    const [pileLocation, setPileLocation] = useState(null);
    const color = getColorFromSuit(suit);
    const numValue = getNumValue(value);

    function toggleConcealed(){
      setIsConcealed(currentState => !currentState)
    }

    return (
        <div
          className={`card ${isConcealed ? 'card-concealed' : 'card-revealed'} ${selected ? 'card-selected' : ''}`}
          onClick={toggleConcealed}
        >
            {isConcealed ? (
                <div className="card__back"></div>
            ) : (
                <div className="card__front">
                    <span className={`card__front_info card__front_info-top card__front_info-color-${color}`}>
                        <p className="card__front_info-text">{value}</p><p className="card__front_info-text">{suit}</p>
                    </span>
                    <span className={`card__front_info card__front_info-bottom card__front_info-color-${color}`}>
                        <p className="card__front_info-text">{value}</p><p className="card__front_info-text">{suit}</p>
                    </span>
                  {/* <div className="card__front_info">
                  </div> */}
                </div>
            )
            }
        </div>
    );
}

