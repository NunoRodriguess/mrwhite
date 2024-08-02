import React from 'react';
import { GameProvider, useGame } from './GameContext';
import StartForm from './components/StartForm';
import RulesForm from './components/RulesForm';
import { GameStatus } from './data/gamestatus';
import Game from './data/game';
import './index.css';
import CardSelecting from './components/CardSelecting';

const AppContent: React.FC = () => {
  const { currentGame, setCurrentGame } = useGame();

  // Helper function to create a new Game instance with updated properties
  const createUpdatedGame = (updates: Partial<Game>): Game => {
    return new Game(
      updates.playerCount ?? currentGame.playerCount,
      updates.gameStatus ?? currentGame.gameStatus,
      updates.mrWhite ?? currentGame.mrWhite,
      updates.undercover ?? currentGame.undercover,
      updates.usedWords ?? currentGame.usedWords,
      updates.wordPool ?? currentGame.wordPool,
      updates.order ?? currentGame.order,
      updates.cards ?? currentGame.cards
    );
  };

  const handleFormSubmit = (count: number) => {
    const updatedGame = createUpdatedGame({
      playerCount: count,
      gameStatus: GameStatus.Rules
    });
    setCurrentGame(updatedGame);
    console.log(currentGame);
  };

  const setGameRules = (undercoverCount: number, mrWhite: boolean) => {
    const updatedGame = createUpdatedGame({
      undercover: undercoverCount,
      mrWhite: mrWhite,
      gameStatus: GameStatus.Selecting
    });
    setCurrentGame(updatedGame);
    console.log(currentGame);
  };

  const renderContent = () => {
    switch (currentGame.gameStatus) {
      case GameStatus.PlayerCount:
        return <StartForm onSubmit={handleFormSubmit} />;
      case GameStatus.Rules:
        return <RulesForm setGameRules={setGameRules} playerCount={currentGame.playerCount} />;
      case GameStatus.OnGoing:
        return <div>Game is ongoing!</div>;
      case GameStatus.Selecting:
        return <CardSelecting></CardSelecting>;
      default:
        return <div>Unknown game status</div>;
    }
  };

  return (
    <div className="h-full min-h-screen flex items-center justify-center">
      {renderContent()}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;
