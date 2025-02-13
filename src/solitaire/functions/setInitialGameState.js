function newDeck() {
  return null;
}

function shuffleDeck() {
  return null;
}

function initialStockPileSetup(deck){
  const deckArr = Object.entries(deck);

  deckArr = deckArr.map((card, i) => card.location = {
      pile: 'stock',
      pileIndex: i,
      pileColum: undefined
  });

  return Object.fromEntries(deckArr);
}

function initialTableauPileSetup(gameState) {
  let newGameState = { ...gameState };
  let stockPile = Object.groupBy(newGameState, card => card.location.pile === 'stock');
  let tableauColumns = 7;
  let currentColumn = 1;
  let currentRow = 1;

  for(cardsToTableau = 0; cardsToTableau < 28; cardsToTableau++){
      let card = pullTopCard(stockPile);
      let { pile, pileIndex, pileColum } = card.location;

      pile = 'tableau';
      pileIndex = currentRow - 1;
      pileColum = currentColumn;

      if(currentColumn < tableauColumns){
          currentColumn++
      } else {
          tableauColumns--;
          currentColumn = 1;
          currentRow++;
      }
  }

  return newGameState;
}

export function setInitialGameState() {
  const deck = newDeck();
  const shuffledDeck = shuffleDeck(deck);

  const allCardsInStockPile = initialStockPileSetup(shuffledDeck);
  const allCardsAfterTableauSetup = initialTableauPileSetup(allCardsInStockPile);
  
  return allCardsAfterTableauSetup;
}
/*
export function setInitialGameState() {
  let allCards = newDeck();

  allCards = { ...shuffleDeck(allCards) };
  allCards = { ...initialStockPileSetup(allCards) };
  allCards = { ...initialTableauPileSetup(allCards) };

  return allCards;
}
*/