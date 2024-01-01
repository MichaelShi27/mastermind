import InputValidators from './helpers/InputValidators.js';
import MessageHelpers from './helpers/MessageHelpers.js';

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
      e, startNewGame, numLength, this.#TOTAL_GUESSES, InputValidators.validateTotalGuesses);

  handleNumberLengthSubmit = (e, startNewGame, totalGuesses) => this.#handleOptionsSubmit(
      e, startNewGame, totalGuesses, this.#NUM_LENGTH, InputValidators.validateNumberLength);

  handleTextGuessSubmit = (e, appObj) => {
    e.preventDefault();
    this.handleGuessSubmit(e.target.guess, appObj, e.target.guess.value);
  };

  handleGuessSubmit = (inputField, { remainingGuesses, setMessage, setGuess,
      setRemainingGuesses, numberLength }, guess) => {
    if (InputValidators.validateGuess(guess, numberLength) === false) {
      setMessage(MessageHelpers.createInvalidGuessMessage(numberLength));
      return;
    }
    setRemainingGuesses(remainingGuesses - 1);
    setGuess(guess);
    inputField.value = '';
  };
}

export default SubmitHandlers;
