const gameState = {
  _1ofS: {
    value: 'A',
    numValue: 1,
    suit: '♠',
    suitAbbrev: 'S',
    color: 'black',
    concealed: true,
    selected: false,
    location: {
      pile: 'stock',
      pileIndex: 0,
      subPile: undefined
    }
  },
  _7ofH: {
    value: '7',
    numValue: 7,
    suit: '♥',
    suitAbbrev: 'H',
    color: 'red',
    concealed: true,
    selected: false,
    location: {
      pile: 'tableau',
      pileIndex: 4,
      subPile: 3
    }
  }
}