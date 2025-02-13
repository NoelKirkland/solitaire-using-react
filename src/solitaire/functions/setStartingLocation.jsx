export function setStartingLocation(deck){
    const deckArr = Object.entries(deck);

    deckArr = deckArr.map((card, i) => card.location = {
        pile: 'stock',
        pileIndex: i,
        pileColum: undefined
    });

    return Object.fromEntries(deckArr);
}