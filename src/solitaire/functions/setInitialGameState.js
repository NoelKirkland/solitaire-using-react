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

function nnewCard(value, suit){
  const cardInfo = {
    value: value,
    suit: suit,
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
    return 'undefined';
  }

  cardInfo.numValue = getNumValue(value);
  cardInfo.suitAbbrev = getSuitAbbrev(suit);
  cardInfo.color = getColor(suit);

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
  const stockPile = Object.entries(pile).filter(([id, card]) => card.location.pile === 'stock')
  const stockPileSorted = stockPile.sort(([, cardA], [, cardB]) => cardA.location.pileIndex - cardB.location.pileIndex);
  const topCard = stockPileSorted.at(-1)[1];
  console.log('top Card:  ', topCard);

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
  let tableauColumns = 7;
  let currentColumn = 1;
  let currentRow = 1;

  for(let cardsToTableau = 0; cardsToTableau < 28; cardsToTableau++){
      let card = pullTopCard(allCards);

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
  console.log('new deck:  ', deck);
  shuffleDeck(deck);
  console.log('shuffled deck:  ', deck);
  
  const allCardsInStockPile = initialStockPileSetup(deck);
  console.log('allCardsInStockPile:  ', allCardsInStockPile);
  const allCardsAfterTableauSetup = initialTableauPileSetup(allCardsInStockPile);
  console.log('allCardsAfterTableauSetup:  ', allCardsAfterTableauSetup);
  console.log('tableau pile:  ', Object.groupBy(Object.values(allCardsAfterTableauSetup), card => card.location.pile === 'tableau'));
  
  return allCardsAfterTableauSetup;
}