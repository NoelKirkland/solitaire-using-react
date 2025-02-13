import React, { useContext, useState, createContext, Children } from 'react'

const GameStateContext = createContext();
const GameStateUpdateContext = createContext();

export function useGameState() {
    return useContext(GameStateContext)
}

export function useGameStateUpdate() {
    return useContext(GameStateUpdateContext)
}

const GameStateProvider = ({ Children }) => {
    const [gameState, setGameState] = useState()
}