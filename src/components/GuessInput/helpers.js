import { MESSAGES } from '../../constants.js';

export const validateGuess = (guess, numLength) => guess.length === numLength && !isNaN(Number(guess));

export const createFeedbackMessage = (digitCount, locationCount) => {
  if (digitCount === 0) return MESSAGES.ALL_INCORRECT;
  const digitPlural = digitCount > 1 ? 's' : '';
  const locationPlural = locationCount !== 1 ? 's' : '';
  return `${digitCount} correct number${digitPlural} and ${locationCount} correct location${locationPlural}`;
};

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
