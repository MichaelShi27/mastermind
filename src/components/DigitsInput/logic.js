import { validateDigits } from './helpers.js';

const getDigitsInputFunctions = startNewGame => {
  const handleDigitsSubmit = e => {
    e.preventDefault();

    const digitsEntry = e.target.digits.value;
    if (validateDigits(Number(digitsEntry)) === false)
      return;

    startNewGame(digitsEntry);
    e.target.digits.value = '';
    e.target.digits.placeholder = digitsEntry;
  };

  return { handleDigitsSubmit };
};

export default getDigitsInputFunctions;
