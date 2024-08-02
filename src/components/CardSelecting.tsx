import React, { useEffect, useState } from 'react';
import { useGame } from '../GameContext';
import Card from './Card';  // Import the Card component
import _ from 'lodash';


interface CardSelectingProps {}

const CardSelecting: React.FC<CardSelectingProps> = () => { 
  const { currentGame } = useGame();
  const [cards, setCards] = useState<{ card: string; id: number }[]>([]);

  useEffect(() => {
    if (currentGame) {
      console.log('Component rendered');
      currentGame.generateRound();
      setCards(currentGame.cards.map((card, index) => ({ card, id: index })));
    } else {
      console.error('currentGame is undefined');
    }
  }, [currentGame]);

  useEffect(() => {
    if (currentGame) {
      setCards(currentGame.cards.map((card, index) => ({ card, id: index })));
    }
  }, [currentGame?.cards]);

  const handleSomething = () => {
    currentGame.generateRound();
    setCards(currentGame.cards.map((card, index) => ({ card, id: index })));
  };

    const chooseACard = (index: number) => {
        if (currentGame.order[index] !== -1) {
            return;
      }
      currentGame.chooseCard(index);
      let mensagem;
      const tipo = currentGame.cards[index];
      if (tipo === 'White') {
         mensagem = "És o Mr.White !"
      } else
      if (tipo === 'Normal') {
           mensagem = " A palavra é: " + currentGame.word.word;
          }
      else if (tipo === 'Undercover') {
          mensagem = " A palavra é: " + currentGame.word.undercover;
          }
    alert(mensagem);
    setCards(currentGame.cards.map((card, idx) => ({ card, id: idx })));
    };
    const renderText= () => {
        if (currentGame.choosing === currentGame.playerCount) {
           const arrayWithIndices: number[] = Array.from({ length: currentGame.playerCount }, (_, i) => i);
          const shuffledArray: number[] = _.shuffle(arrayWithIndices);
          let new_arr = shuffledArray.map(a => a+1);
      return <h1 className="font-mono text-center text-lg sm:text-xl md:text-2xl">
        Ordem Sugerida: {new_arr}
      </h1>
    } else {
      return <h1 className="font-mono text-center text-lg sm:text-xl md:text-2xl">
        Jogador {currentGame.choosing + 1} escolhe uma carta
      </h1>
    }
    };
    

  return (
    <div className='flex flex-col max-w-full max-h-full justify-items-center space-y-7'>
            {renderText()}
      <ul className='flex flex-wrap gap-4 justify-center w-full'>
        {cards.length > 0 ? (
          cards.map(({ card, id }) => (
            <Card
              key={id}
              card={card}
              id={id}
              onClick={() => chooseACard(id)} // Pass index and click handler
            />
          ))
        ) : (
          <li className='text-gray-500'>No items available</li>
        )}
      </ul>
      <div className='flex justify-center space-x-4'>
        <button
          onClick={handleSomething}
          className="font-mono rounded-md bg-orange-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full sm:w-auto"
        >
         Gerar Ronda
              </button>
      </div>
    </div>
  );
}

export default CardSelecting;
