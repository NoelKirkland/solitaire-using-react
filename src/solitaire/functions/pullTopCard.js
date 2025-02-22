export function pullTopCard(pile){
  const sortedPileArr = Object.values(pile).sort((cardA, cardB) => {
    const cardAIndex = cardA.location.pileIndex;
    const cardBIndex = cardB.location.pileIndex;

    return cardAIndex === cardBIndex ? 0 : cardAIndex < cardBIndex ? -1 : 1;
  });
  const topCard = sortedPileArr[sortedPileArr.length - 1];

  return { ...topCard };
}