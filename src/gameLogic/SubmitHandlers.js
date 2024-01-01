import InputValidators from './helpers/InputValidators.js';
import MessageHelpers from './helpers/MessageHelpers.js';

/* 
  this class handles the submit functionality of the app's 3 input fields
*/
class SubmitHandlers {
  static #NUMBER_LENGTH = 'numberLength';
  static #TOTAL_GUESSES = 'totalGuesses';

  /*
    this function handles a text guess (i.e. not voice input)
      - e is the DOM event, i.e. the form submit event
      - appObj is the object returned from the useApp custom hook
  */
  static handleTextGuessSubmit = (e, appObj) => {
    e.preventDefault();
    this.handleGuessSubmit(e.target.guess, appObj, e.target.guess.value);
  };

  static handleGuessSubmit = (inputField, { remainingGuesses, setMessage, setGuess,
      setRemainingGuesses, numberLength }, guess) => {
    if (InputValidators.validateGuess(guess, numberLength) === false)
      return setMessage(MessageHelpers.createInvalidGuessMessage(numberLength));
    setRemainingGuesses(remainingGuesses - 1);
    setGuess(guess);
    inputField.value = '';
  };

  static handleTotalGuessesSubmit = (e, startNewGame, options) => this.#handleOptionsSubmit(
    e, startNewGame, options, this.#TOTAL_GUESSES, InputValidators.validateTotalGuesses);

  static handleNumberLengthSubmit = (e, startNewGame, options) => this.#handleOptionsSubmit(
      e, startNewGame, options, this.#NUMBER_LENGTH, InputValidators.validateNumberLength);

  /*
    this is a generic function for handling input submits
      - e is the DOM Event, i.e. the form's submit event
      - optionToChange is whichever option the user is trying to change with their input, 
  */
  static #handleOptionsSubmit = (e, startNewGame, options, optionToChange, validationFunc) => {
    e.preventDefault();

    const userInput = Number(e.target[optionToChange].value);
    if (validationFunc(userInput) === false) return;

    options[optionToChange] = userInput;
    startNewGame(options.numberLength, options.totalGuesses);
  
    e.target[optionToChange].value = '';
    e.target[optionToChange].placeholder = userInput;
  }
}

export default SubmitHandlers;
