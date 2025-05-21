import { filterByPile } from "./filterByPile";
import { pullTopCard } from "./pullTopCard";
const { log } = console;

function stockPileClicks(card) {
  function stockPileCardClick(state, setState) {
    const numCardsPerWasteDeal = state.numCardsPerWasteDeal;
    const stockPileCards = Object.values(filterByPile(state, 'stock')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);;
    const wastePileCards = Object.values(filterByPile(state, 'waste')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);

    if(card.location.pileIndex < stockPileCards.length - 1){ return }
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
        });
      }
      setState(() => ({ ...state }));
        log('num cards in stock AFTER:  ', Object.values(filterByPile(state, 'stock')).length);
  }
  function stockPileEmptyClick(state, setState) {
    const wastePileCards = Object.values(filterByPile(state, 'waste')).sort((cardA, cardB) => cardA.location.pileIndex - cardB.location.pileIndex);

    wastePileCards.reverse().forEach((card, i) => {
      card.concealed = true;
      card.location.pile = 'stock';
      card.location.pileIndex = i;
      card.location.subPile = undefined;

      state[card.id] = card;
    });
    setState(() => ({ ...state }));
  }

  // return ({ 'stockPileCardClick': stockPileCardClick, 'stockPileEmptyClick': stockPileEmptyClick })
  return [stockPileCardClick, stockPileEmptyClick];
}

function wastePileClicks(card) {
  function wastePileCardClick(state, setState) {
  
  }
  function wastePileEmptyClick(state, setState) {
  
  }

  // return ({ 'wastePileCardClick': wastePileCardClick, 'wastePileEmptyClick': wastePileEmptyClick })
  return [wastePileCardClick, wastePileEmptyClick];
}

function foundationPileClicks(card) {
  function foundationPileCardClick(state, setState) {
  
  }
  function foundationPileEmptyClick(state, setState) {
  
  }

  // return ({ 'foundationPileCardClick': foundationPileCardClick, 'foundationPileEmptyClick': foundationPileEmptyClick })
  return [foundationPileCardClick, foundationPileEmptyClick];
}

function tableauPileClicks(card) {
  function tableauPileCardClick(state, setState) {
  
  }
  function tableauPileEmptyClick(state, setState) {
  
  }

  // return ({ 'tableauPileCardClick': tableauPileCardClick, 'tableauPileEmptyClick': tableauPileEmptyClick })
  return [tableauPileCardClick, tableauPileEmptyClick];
}

const clickFunctionsForAllPiles = {
  'stock':  stockPileClicks,
  'waste':  wastePileClicks,
  'foundation':  foundationPileClicks,
  'tableau': tableauPileClicks
}

export function handleClicks(pile){
    const specifiedPileClicks = clickFunctionsForAllPiles[pile];
    return (card) => {
      const [ specifiedPileCardClick, specifiedPileEmptyClick ] = specifiedPileClicks(card);
  
      if(card.value !== 'E'){
        return (state, setState) => {
          specifiedPileCardClick(state, setState);
        }
      } else {
        return (state, setState) => {
          specifiedPileEmptyClick(state, setState);
        }
      }
    }


  if(pile === 'stock'){
    return (card) => {
      return (state, setState) => {
        
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