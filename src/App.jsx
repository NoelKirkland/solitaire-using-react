import React from 'react'
import { Solitaire } from './solitaire' 
// import { Stock, Waste, Foundation, Tableau } from "./solitaire/components/piles";
import Stock from "./solitaire/components/piles/Stock";

import './App.css'

function App() {
  return (
    <Solitaire numCardsPerWasteDeal={3} >
      <Stock />
      {/* <Waste />
      <Foundation />
      <Tableau /> */}
    </Solitaire>
  )
}

export default App
