import { validateGuess, createFeedbackMessage, getMatchCounts } from './helpers.js';
import { MESSAGES } from '../../constants.js';

const getGuessInputFunctions = ({ 
  number, remainingGuesses, setMessage, setGameOver, setRemainingGuesses 
}) => {
  const handleGuessSubmit = e => {
    e.preventDefault();
    const guess = e.target.guess.value;
    
    if (validateGuess(guess) === false) {
      setMessage(MESSAGES.INVALID_GUESS);
      return;
    }

    if (guess === number) { // player wins
      setMessage(MESSAGES.CORRECT_GUESS);
      setGameOver(true);
    } else {
      setRemainingGuesses(remainingGuesses - 1);
      const [ digitCount, locationCount ] = getMatchCounts(guess, number);
      setMessage(createFeedbackMessage(digitCount, locationCount));
    }
  };
  return { handleGuessSubmit };
};

export default getGuessInputFunctions;
