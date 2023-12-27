import { validateGuess, createFeedbackMessage, getMatchCounts } from './helpers.js';
import { MESSAGES } from '../../constants.js';

const getGuessInputFunctions = ({ 
  guess, number, remainingGuesses, setGuess, setMessage, setGameOver, setRemainingGuesses 
}) => {
  const handleGuessSubmit = e => {
    e.preventDefault();

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

  const handleGuessChange = e => setGuess(e.target.value);

  return { handleGuessSubmit, handleGuessChange };
};

export default getGuessInputFunctions;
