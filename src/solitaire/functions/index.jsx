import { newDeck, shuffleDeck, pullTopCard, setStartingLocation, tableauSetup } from "./";

export default function getInitialGameState() {
    const deck = newDeck();
    const shuffledDeck = shuffleDeck(deck);

    const allCardsInStockPile = setStartingLocation(shuffledDeck);
    const allCardsAfterTableauSetup = tableauSetup(allCardsInStockPile);
    
    return allCardsAfterTableauSetup;
}



/* 
const stockPile = Object.groupBy(gameState, card => card.location.pile === 'stock');

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

    // if I've done my math right, this while loop should also work, tapping out after 28 itterations
    while(currentRow < 7){
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

    return (
        <div>initialGameState</div>
      )
*/