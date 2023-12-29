import { OPTIONS } from '../../constants.js';

class InputValidationHelpers {
  validateGuess = (guess, numLength) => guess.length === numLength && !isNaN(Number(guess));
  
  validateTotalGuesses = totalGuessesEntry => (
    !isNaN(totalGuessesEntry) && 
    totalGuessesEntry >= OPTIONS.MIN_TOTAL_GUESSES && 
    totalGuessesEntry <= OPTIONS.MAX_TOTAL_GUESSES
  );

  validateNumberLength = numLengthEntry => (
    !isNaN(numLengthEntry) && 
    numLengthEntry >= OPTIONS.MIN_NUM_LENGTH && 
    numLengthEntry <= OPTIONS.MAX_NUM_LENGTH
  );
}

export default InputValidationHelpers;
