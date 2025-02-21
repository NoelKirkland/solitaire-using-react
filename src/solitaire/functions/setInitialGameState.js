import { filterByPile } from "./filterByPile";

const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function newCard(value, suit){
  const cardInfo = {
    value: value,
    numValue: getNumValue(value),
    suit: suit,
    suitAbbrev: getSuitAbbrev(suit),
    color: getColor(suit),
    concealed: true,
    selected: false,
    location: {
      pile: undefined,
      pileIndex: null,
      subPile: undefined
    }
  };

  function getNumValue(value){
    if('2345678910'.includes(value)){
      return value * 1;
    }
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
        return undefined;
    }
  }

  function getSuitAbbrev(suit){
    switch(suit){
      case '♠':
        return 'S';
      case '♣':
        return 'C';
      case '♥':
        return 'H';
      case '♦':
        return 'D';
      default:
        return undefined;
    }
  }

  function getColor(suit){
    if(suit === "♣" || suit === "♠"){
      return 'black';
    }
    if(suit === "♥" || suit === "♦"){
      return 'red';
    }
    return undefined;
  }

  return cardInfo;
}

function newDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return newCard(value, suit)
    })
  })
}

function shuffleDeck(cards) {
  for (let i = 51; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1))
    const oldValue = cards[newIndex];
    cards[newIndex] = cards[i];
    cards[newIndex].location.pileIndex = newIndex;
    oldValue.location.pileIndex = i;
    cards[i] = oldValue
  }
}

function pullTopCard(pile){
  const sortedPileArr = Object.entries(pile).sort(([, cardA], [, cardB]) => cardA.location.pileIndex - cardB.location.pileIndex);
  const topCard = sortedPileArr.at(-1)[1];

  return topCard;
}

function initialStockPileSetup(deck){
  const allCards = [...deck];
  const cardsObj = allCards.reduce((cards, card, i) => {
    const cardId = `_${card.numValue}of${card.suitAbbrev}`;

    card.location.pile = 'stock';
    card.location.pileIndex = i;

    return {...cards, [cardId]: card};
  }, {});
  return cardsObj;
}

function initialTableauPileSetup(allCards) {
  const stockPile = filterByPile(allCards, 'stock')
  let tableauColumns = 7;
  let currentColumn = 1;
  let currentRow = 1;

  for(let cardsToTableau = 0; cardsToTableau < 28; cardsToTableau++){
      let card = pullTopCard(stockPile);

      card.location.pile = 'tableau';
      card.location.pileIndex = currentRow - 1;
      card.location.subPile = currentColumn;

      if(currentColumn < tableauColumns){
          currentColumn++
      } else {
          tableauColumns--;
          currentColumn = 1;
          currentRow++;
      }
  }

  return allCards;
}

export function setInitialGameState() {
  const deck = newDeck();
  shuffleDeck(deck);
  
  const allCardsInStockPile = initialStockPileSetup(deck);
  const allCardsAfterTableauSetup = initialTableauPileSetup(allCardsInStockPile);
  
  return allCardsAfterTableauSetup;
}