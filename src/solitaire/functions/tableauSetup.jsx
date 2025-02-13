export function tableauSetup(gameState) {
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
  