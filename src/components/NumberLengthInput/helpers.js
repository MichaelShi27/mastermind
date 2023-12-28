import { OPTIONS } from '../../constants.js';

export const validateNumberLength = numLengthEntry => (
  !isNaN(numLengthEntry) && 
  numLengthEntry >= OPTIONS.MIN_NUM_LENGTH && 
  numLengthEntry <= OPTIONS.MAX_NUM_LENGTH
);
