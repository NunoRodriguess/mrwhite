import React, { useState } from 'react';

interface StartFormProps {
  onSubmit: (playerCount: number) => void;
}

const StartForm: React.FC<StartFormProps> = ({ onSubmit }) => {
  const [playerCount, setPlayerCount] = useState<number>(3);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerCount(Number(event.target.value));
  };

  const handleCleanClick = () => {
    setPlayerCount(3);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(playerCount);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 space-y-6 p-4 sm:p-6 md:p-8">
      <h1 className="font-mono text-center text-lg sm:text-xl md:text-2xl">Escolhe o número de Jogadores</h1>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  w-full">
        <input
          type="number"
          name="player-count"
          id="player-count"
          min="3"
          max="24"
          value={playerCount}
          onChange={handleInputChange}
          className="font-mono block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6 w-full">
        <button
          type="button"
          onClick={handleCleanClick}
          className="font-mono rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 outline outline-1 w-full sm:w-auto"
        >
          Limpar
        </button>
        <button
          type="submit"
          className="font-mono rounded-md bg-orange-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full sm:w-auto"
        >
          Avançar
        </button>
      </div>
    </form>
  );
};

export default StartForm;
