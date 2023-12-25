import axios from 'axios';

export const fetchNumber = () => (
  axios('/api/number')
    .then(({ data }) => data)
    .catch(console.log)
);

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
