import React from 'react';
import { useGame } from '../GameContext';
import { useEffect } from 'react';


interface CardSelectingProps {

}

const CardSelecting: React.FC<CardSelectingProps> = ({ }) => { 

    const { currentGame } = useGame();
    
     useEffect(() => {
    console.log('Component rendered');
    currentGame.generateRound();
  }, []);


    const handleSomething = () => {
        currentGame.generateRound();
    };
    
    const handleSomething2 = () => {
        currentGame.chooseCard(5)
  };

    return (

        <div>
            <button onClick={handleSomething}>Do Something</button>
            <button onClick={handleSomething2}>Do Something</button>
    </div>

    );
}

export default CardSelecting;


