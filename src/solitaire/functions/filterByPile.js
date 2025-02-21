export function filterByPile(allCards, pileName){
    const targetPileArr = Object.entries(allCards).filter(([, card]) => card.location.pile === pileName);
    const targetPileObj = Object.fromEntries(targetPileArr);

    return targetPileObj;
}
