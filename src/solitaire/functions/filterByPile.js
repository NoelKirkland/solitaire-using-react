const { log } = console;

export function filterByPile(allCards, pileName, subPileName = null){
    const targetPileArr = Object.entries(allCards).filter(([, card]) => card?.location?.pile === pileName);
    if(subPileName !== null){
        const targetPileSubArr = targetPileArr.filter(([, card]) => card?.location?.subPile === subPileName);
        const targetPileSubObj = Object.fromEntries(targetPileSubArr);

        return targetPileSubObj;
    }
    const targetPileObj = Object.fromEntries(targetPileArr);

    return targetPileObj;
}
