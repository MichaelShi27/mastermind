import { 
  validateGuess, createFeedbackMessage, getMatchCounts, createInvalidGuessMessage 
} from './helpers.js';
import { MESSAGES } from '../../constants.js';

const getGuessInputFunctions = ({ 
  number, remainingGuesses, setMessage, setGameOver, setRemainingGuesses, numberLength, setHistory
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
      const [ digitCount, locationCount ] = getMatchCounts(guess, number);
      const feedback = createFeedbackMessage(digitCount, locationCount);
      setHistory(oldHistory => [ { guess, feedback }, ...oldHistory ]);
      setRemainingGuesses(remainingGuesses - 1);
      setMessage('');
      e.target.guess.value = '';
    }
  };
  return { handleGuessSubmit };
};

export default getGuessInputFunctions;
