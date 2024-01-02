export const MESSAGES = {
  CORRECT_GUESS: 'Correct! Great job! 🥳',
  NEW_HIGH_SCORE: 'Correct! And you got a new high score! 🔥🔥',
  LOSS: 'Game over. Better luck next time!',
  ALL_INCORRECT: 'All incorrect!',
  BAD_RESPONSE: 'Bad response from the server :('
};

// min/max values of the possible digits in the number to guess
// note: I decided to increase the range from 0-7 to 0-9
export const DIGITS = {
  MIN_VAL: 0,
  MAX_VAL: 9
};

// min/max values for the length of the number to guess
// & the total guesses that the user is allowed
export const OPTIONS = {
  MIN_NUM_LENGTH: 4,
  MAX_NUM_LENGTH: 8,
  MIN_TOTAL_GUESSES: 5,
  MAX_TOTAL_GUESSES: 15
};

// max number of recorded high scores
export const MAX_HIGH_SCORES_COUNT = 10;

// default state values for the length of the number to guess
// & the total guesses that the user is allowed
export const DEFAULTS = {
  NUMBER_LENGTH: 4,
  TOTAL_GUESSES: 10
};
