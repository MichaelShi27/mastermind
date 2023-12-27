import { validateGuess, createFeedbackMessage, getMatchCounts } from './helpers.js';
import { MESSAGES } from '../../constants.js';
import { createInvalidGuessMessage } from '../App/helpers.js';

const getGuessInputFunctions = ({ 
  number, remainingGuesses, setMessage, setGameOver, setRemainingGuesses, numberLength, setGuess
}) => {
  const handleGuessSubmit = e => {
    e.preventDefault();
    const guess = e.target.guess.value;

    if (validateGuess(guess, numberLength) === false) {
      setMessage(createInvalidGuessMessage(numberLength));
      return;
    }

    if (guess === number) { // player wins
      setMessage(MESSAGES.CORRECT_GUESS);
      setGameOver(true);
    } else {
      setRemainingGuesses(remainingGuesses - 1);
      const [ digitCount, locationCount ] = getMatchCounts(guess, number);
      setMessage(createFeedbackMessage(digitCount, locationCount));
      setGuess(guess);
    }
  };
  return { handleGuessSubmit };
};

export default getGuessInputFunctions;
