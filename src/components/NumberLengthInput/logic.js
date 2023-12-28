import { validateNumberLength } from './helpers.js';

const getNumberLengthInputFunctions = (startNewGame, totalGuesses) => {
  const handleNumberLengthSubmit = e => {
    e.preventDefault();

    const numLengthEntry = Number(e.target.numLength.value);
    if (validateNumberLength(numLengthEntry) === false)
      return;

    startNewGame(numLengthEntry, totalGuesses);
    e.target.numLength.value = '';
    e.target.numLength.placeholder = numLengthEntry;
  };

  return { handleNumberLengthSubmit };
};

export default getNumberLengthInputFunctions;
