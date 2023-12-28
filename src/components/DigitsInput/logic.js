import { validateDigits } from './helpers.js';

const getDigitsInputFunctions = startNewGame => {
  const handleDigitsSubmit = e => {
    e.preventDefault();

    const digitsEntry = Number(e.target.digits.value);
    if (validateDigits(digitsEntry) === false)
      return;

    startNewGame(digitsEntry);
    e.target.digits.value = '';
    e.target.digits.placeholder = digitsEntry;
  };

  return { handleDigitsSubmit };
};

export default getDigitsInputFunctions;
