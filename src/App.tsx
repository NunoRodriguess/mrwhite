import React, { useState } from 'react';
import StartForm from './components/StartForm';
import Game from './data/game';
import {GameStatus} from './data/gamestatus';
import './index.css';

const App: React.FC = () => {
  const defaultGame = new Game(
    3, // Initial player count
    GameStatus.PlayerCount, // Initial game status
    true, // Initial mrWhite status
    0, // Initial number of undercover agents
    [], // Initial used words
    [] // Initial word pool
  );

  const [currentGame, setCurrentGame] = useState<Game>(defaultGame);

  const handleFormSubmit = (count: number) => {
    setCurrentGame((prevGame) => ({
      ...prevGame,
      playerCount: count,
      gameStatus: GameStatus.Rules
    }));
    console.log('Submitted player count:', count);
  };

  const renderContent = () => {
    switch (currentGame.gameStatus) {
      case GameStatus.PlayerCount:
        return <StartForm onSubmit={handleFormSubmit} />;
      case GameStatus.Rules:
        return <div>Game is Rules</div>; // Replace with your actual component or content
      case GameStatus.OnGoing:
        return <div>Game is ongoing!</div>; // Replace with your actual component or content
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

export default App;
