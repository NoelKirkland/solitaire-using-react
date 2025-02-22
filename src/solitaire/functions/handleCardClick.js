import { filterByPile } from "./filterByPile";
import { pullTopCard } from "./pullTopCard";
const { log } = console;

export function handleCardClick(currentState, setState){
  // const setNewState = newState => setState(() => ({ ...newState}))
  function setNewState(newState){
    return setState(() => ({ ...newState}))
  }
  return (card) => {
    // log('card.location.pile:  ', card.location.pile);
    if(card.location.pile === 'stock'){
      const numCardsPerWasteDeal = currentState.numCardsPerWasteDeal;
      const newState = { ...currentState };
      const stockPileCards = Object.values(filterByPile(currentState, 'stock'));
      const wastePileCards = Object.values(filterByPile(currentState, 'waste'));
      log('num cards in stock BEFORE:  ', stockPileCards.length);
      if(stockPileCards.length > 0){
        for(let cardToWaste = 0; cardToWaste < numCardsPerWasteDeal; cardToWaste++){
          log('card# ', cardToWaste+1)
          if(stockPileCards.length < 1){ break } 
          const card = pullTopCard(stockPileCards);
          
          card.concealed = false;
          card.location.pile = 'waste';
          card.location.pileIndex = wastePileCards.length;
          card.location.subPile = undefined;
          log('cardToWaste:  ', card);
      
          currentState[card.id] = card;
          // setState(() => ({ ...currentState }));
          setNewState(currentState);
        }
      } else {
        wastePileCards.reverse().map((card, i) => {
          card.concealed = true;
          card.location.pile = 'stock';
          card.location.pileIndex = i;
          card.location.subPile = undefined;
  
          newState[card.id] = card;
          // setState(() => ({ ...newState }));
          setNewState(currentState);
        })
      }
        log('num cards in stock AFTER:  ', Object.values(filterByPile(currentState, 'stock')).length);
    } else if(card.location.pile === 'tableau' && card !== null){
      const tableauSubPileCards = Object.values(filterByPile(currentState, 'tableau', card.location.subPile));
      // log('tableauSubPileCards:  ', tableauSubPileCards);
      // log('tableau click!')
      // log(card.location.pileIndex)
      // log(tableauSubPileCards.length)
      if(card.concealed && card.location.pileIndex === tableauSubPileCards.length - 1){
        card.concealed = false;
        log(card)
        currentState[card.id] = card;
        // setState(() => ({ ...currentState }));
        setNewState(currentState);
      }
    }
  }
  
}
