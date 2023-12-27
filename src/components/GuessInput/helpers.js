import { MESSAGES } from '../../constants.js';

/*
  validateGuess verifies that the guess is exactly 4 characters long and that those 4 characters are numbers.

  at first, I thought of using .reduce instead of .some, i.e. ... !guess.split('').reduce(
    (hasNonNumbers, char) => isNaN(Number(char)) || hasNonNumbers,
    false
  )
  but I realized that .some is more efficient because it only iterates until it finds an element that fulfills
  the condition and can thus end early, whereas .reduce requires iterating through the entire array. although 
  the guess is only 4 chars long in our case, I still strive for the most efficient approach. also, the boolean 
  logic is simpler with .some
*/
export const validateGuess = guess => guess.length === 4 && !guess.split('').some(char => isNaN(Number(char)));

export const createFeedbackMessage = (digitCount, locationCount) => {
  if (digitCount === 0) return MESSAGES.ALL_INCORRECT;
  const digitPlural = digitCount > 1 ? 's' : '';
  const locationPlural = locationCount !== 1 ? 's' : '';
  return `${digitCount} correct number${digitPlural} and ${locationCount} correct location${locationPlural}`;
};

/*
*/
export const getMatchCounts = (guess, num) => {
  const digitCount = getDigitMatchCount(guess, num);
  if (digitCount === 0) return [ 0, 0 ];

  return [ digitCount, getLocationMatchCount(guess, num) ];
};

const getDigitMatchCount = (guess, num) => {
  let digitMatchCount = 0;

  const digitMap = {};
  for (const digit of num)
    digitMap[digit] = 1 + (digitMap[digit] || 0);
  
  for (const digit of guess)
    if (digitMap[digit] > 0) {
      digitMap[digit]--;
      digitMatchCount++;
    }
  
  return digitMatchCount;
};

const getLocationMatchCount = (guess, num) => {
  let locationMatchCount = 0;

  for (const [ idx, digit ] of num.split('').entries())
    if (guess[idx] === digit)
      locationMatchCount++;

  return locationMatchCount;
};
