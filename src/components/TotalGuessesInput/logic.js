import { validateTotalGuesses } from './helpers.js';

const getTotalGuessesInputFunctions = (startNewGame, numLength) => {
  const handleTotalGuessesSubmit = e => {
    e.preventDefault();

    const totalGuessesEntry = Number(e.target.totalGuesses.value);
    if (validateTotalGuesses(totalGuessesEntry) === false)
      return;

    startNewGame(numLength, totalGuessesEntry);
    e.target.totalGuesses.value = '';
    e.target.totalGuesses.placeholder = totalGuessesEntry;
  };

  return { handleTotalGuessesSubmit };
};

export default getTotalGuessesInputFunctions;
