import { validateGuess, createFeedbackMessage, getMatchCounts } from './helpers.js';
import { INVALID_GUESS_MESSAGE, CORRECT_GUESS_MESSAGE} from '../../constants.js';

const inputLogic = ({ 
  guess, number, remainingGuesses, setGuess, setMessage, setGameOver, setRemainingGuesses 
}) => {
  const handleGuessSubmit = e => {
    e.preventDefault();

    if (validateGuess(guess) === false) {
      setMessage(INVALID_GUESS_MESSAGE);
      return;
    }

    if (guess === number) { // player wins
      setMessage(CORRECT_GUESS_MESSAGE);
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

export default inputLogic;
