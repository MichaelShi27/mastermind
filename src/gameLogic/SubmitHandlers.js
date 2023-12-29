import InputValidationHelpers from './helpers/InputValidationHelpers.js';
import { MESSAGES } from '../constants.js';
import MessageHelpers from './helpers/MessageHelpers.js';
import GuessLogic from './GuessLogic.js';

const { 
  validateTotalGuesses, validateNumberLength, validateGuess
} = new InputValidationHelpers();
const { createFeedbackMessage, createInvalidGuessMessage } = new MessageHelpers();
const { getMatchCounts } = new GuessLogic();

/* 
  this class handles the submit functionality of the various input fields of the app, 
  e.g. for changing the # of digits or guesses
*/
class SubmitHandlers {
  #NUM_LENGTH = 'numLength';
  #TOTAL_GUESSES = 'totalGuesses';

  /*
    generic function for handling input submits
    - e is the DOM Event, i.e. the form's submit event
    - optionToChange is whichever option the user is trying to change with their input, 
      while otherOption is whichever option is staying the same 
  */
  #handleOptionsSubmit = (e, startNewGame, otherOption, optionToChange, validationFunc) => {
    e.preventDefault();

    const userInput = Number(e.target[optionToChange].value);
    if (validationFunc(userInput) === false)
      return;

    const numLength = optionToChange === 'numLength' ? userInput : otherOption;
    const totalGuesses = optionToChange === 'totalGuesses' ? userInput : otherOption;

    startNewGame(numLength, totalGuesses);
    e.target[optionToChange].value = '';
    e.target[optionToChange].placeholder = userInput;
  }

  handleTotalGuessesSubmit = (e, startNewGame, numLength) => this.#handleOptionsSubmit(
      e, startNewGame, numLength, this.#TOTAL_GUESSES, validateTotalGuesses);

  handleNumberLengthSubmit = (e, startNewGame, totalGuesses) => this.#handleOptionsSubmit(
      e, startNewGame, totalGuesses, this.#NUM_LENGTH, validateNumberLength);

  handleGuessSubmit = (e, { remainingGuesses, setMessage, setGameOver, setRemainingGuesses,
      number, numberLength, setHistory }) => {
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
}

export default SubmitHandlers;
