import { filterByPile } from "./filterByPile";
import { pullTopCard } from "./pullTopCard";
const { log } = console;

export function handleClicks(pile){
  if(pile === 'stock'){
    return (card) => {
      return (state, setState) => {
        const numCardsPerWasteDeal = state.numCardsPerWasteDeal;
        const stockPileCards = Object.values(filterByPile(state, 'stock')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);;
        const wastePileCards = Object.values(filterByPile(state, 'waste')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);;
  
        if(card.location.pileIndex < stockPileCards.length - 1){ return }
        if(card.location.isEmpty){
          wastePileCards.reverse().map((card, i) => {
            card.concealed = true;
            card.location.pile = 'stock';
            card.location.pileIndex = i;
            card.location.subPile = undefined;
    
            state[card.id] = card;
            setState(() => ({ ...state }));
          })
        } else {
          log('num cards in stock BEFORE:  ', stockPileCards.length);
          for(let cardToWaste = 0; cardToWaste < numCardsPerWasteDeal; cardToWaste++){
            if(stockPileCards.length < 1){ break } 
            const card = pullTopCard(stockPileCards);
            
            card.concealed = false;
            card.location.pile = 'waste';
            card.location.subPile = undefined;
            log(`Waste card# ${cardToWaste + 1}
Card id: ${card.id}`);
            wastePileCards.push(card)
            wastePileCards.forEach((card, i) => {
              card.location.pileIndex = i;
              state[card.id] = card;
              setState(() => ({ ...state }));
            })
          }
            log('num cards in stock AFTER:  ', Object.values(filterByPile(state, 'stock')).length);
        }
      }
    }
  }
  if(pile === 'waste'){
    return (card) => {
      return (state, setState) => {
        const wastePileCards = Object.values(filterByPile(state, 'waste'));

        if(card.location.pileIndex < wastePileCards.length - 1){ return }
      }
    }
  }
  if(pile === 'foundation'){

    return (state, setState) => {

    }
  }
  if(pile === 'tableau'){

    return (state, setState) => {

    }
  }
}