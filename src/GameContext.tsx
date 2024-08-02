// GameContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import Game from './data/game';
import { GameStatus } from './data/gamestatus';
import { dataArray } from './data/data';

interface GameContextType {
  currentGame: Game;
  setCurrentGame: React.Dispatch<React.SetStateAction<Game>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode; // Define the type of children prop
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const defaultGame = new Game(
    3,
    GameStatus.PlayerCount,
    true,
    0,
    [],
    dataArray // Initialize with dataArray
  );

  const [currentGame, setCurrentGame] = useState<Game>(defaultGame);

  return (
    <GameContext.Provider value={{ currentGame, setCurrentGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
