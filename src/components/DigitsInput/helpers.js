import { OPTIONS } from '../../constants.js';

export const validateDigits = numLengthEntry => (
  !isNaN(numLengthEntry) && 
  numLengthEntry >= OPTIONS.MIN_NUM_LENGTH && 
  numLengthEntry <= OPTIONS.MAX_NUM_LENGTH
);
