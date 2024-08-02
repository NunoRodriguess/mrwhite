import React from 'react';
import { useGame } from '../GameContext';

interface CardProps {
    card: string;
    id: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, onClick }) => {
    
    const { currentGame } = useGame();

    const backgroundColor = currentGame.order[id] === -1 ? 'bg-red-900 text-white' : 'bg-white';

    const renderCardContent = () => {
    if (currentGame.order[id] === -1) {
      return <span>Livre</span>;
    } else {
      return <span>{id}</span>;
    }
  };

    
    return (
      
    <div
      onClick={onClick}
      className={`border border-gray-300 rounded-lg p-10 m-2 text-center shadow-md cursor-pointe hover:bg-gray-100 ${backgroundColor}`}
    >
      {renderCardContent()}
    </div>
  );
}

export default Card;
