import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Solitaire } from './solitaire' 
import { Stock, Waste, Foundation, Tableau } from "./solitaire/components/piles";

import './App.css'

function App() {
  return (
    <Solitaire >
      <Stock pileState={stockPile} />
      <Waste pileState={wastePile} />
      <Foundation pileState={foundationPile} />
      <Tableau pileState={tableauPile} />
    </Solitaire>
  )
}

export default App
