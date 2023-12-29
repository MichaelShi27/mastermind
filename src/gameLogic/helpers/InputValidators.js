import { OPTIONS } from '../../constants.js';

class InputValidators {
  static validateGuess = (guess, numLength) => guess.length === numLength 
      && !isNaN(Number(guess));
  
  static validateTotalGuesses = totalGuessesEntry => (
    !isNaN(totalGuessesEntry) && 
    totalGuessesEntry >= OPTIONS.MIN_TOTAL_GUESSES && 
    totalGuessesEntry <= OPTIONS.MAX_TOTAL_GUESSES
  );

  static validateNumberLength = numLengthEntry => (
    !isNaN(numLengthEntry) && 
    numLengthEntry >= OPTIONS.MIN_NUM_LENGTH && 
    numLengthEntry <= OPTIONS.MAX_NUM_LENGTH
  );
}

export default InputValidators;
