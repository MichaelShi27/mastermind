import { OPTIONS } from '../../constants.js';

export const validateTotalGuesses = totalGuessesEntry => (
  !isNaN(totalGuessesEntry) && 
  totalGuessesEntry >= OPTIONS.MIN_TOTAL_GUESSES && 
  totalGuessesEntry <= OPTIONS.MAX_TOTAL_GUESSES
);
