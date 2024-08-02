import React, { useState } from 'react';

interface RulesFormProps {
  setGameRules: (undercoverCount: number, mrWhite: boolean) => void;
  playerCount: number; 
}

const RulesForm: React.FC<RulesFormProps> = ({ setGameRules, playerCount }) => {
  const initialUndercoverCount = Math.floor(Math.log2(playerCount));
  const [undercoverCount, setUndercoverCount] = useState<number>(initialUndercoverCount);
  const [hasMrWhite, setHasMrWhite] = useState<boolean>(false);

  // Handle changes in the input box
  const handleUndercoverCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueMax = Math.min(playerCount -1, Number(event.target.value));
    setUndercoverCount(valueMax);
  };

  // Handle changes in the checkbox
  const handleMrWhiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasMrWhite(event.target.checked);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setGameRules(undercoverCount, hasMrWhite);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 space-y-10 p-4 sm:p-6 md:p-8 bg-white border border-gray-200 rounded-lg shadow '>
      <div className="max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow space-y-3 flex flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-mono">Espiões</h5>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset w-full">
          <input
            type="number"
            name="undercover-count"
            id="undercover-count"
            className="font-mono block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            min="0"
            value={undercoverCount}
            onChange={handleUndercoverCountChange}
          />
        </div>
      </div>

      <div className="max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow space-y-2 flex flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-mono">Mr. White</h5>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkboxChecked"
            checked={hasMrWhite}
            onChange={handleMrWhiteChange}
            className="mr-2"
          />
          <label htmlFor="checkboxChecked" className="font-mono">
            Jogar com Mr.White
          </label>
        </div>
      </div>
      <button 
        type="submit" 
        className="font-mono rounded-md bg-orange-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full sm:w-auto"
      >
        Começar
      </button>
    </form>
  );
};

export default RulesForm;
