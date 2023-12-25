import { getMatchCounts } from './src/gameLogic.js';
import { validateGuess } from './src/helpers.js';

const testGetMatchCounts = () => {
  const testCases = [
    [ '0135', '2246', 0, 0 ],
    [ '0135', '0246', 1, 1 ],
    [ '0135', '2211', 1, 0 ],
    [ '0135', '0156', 3, 2 ],
    [ '1111', '2222', 0, 0 ],
    [ '1000', '4441', 1, 0 ],
    [ '0101', '1010', 4, 0 ],
    [ '1234', '4321', 4, 0 ],
    [ '2222', '2222', 4, 4 ],
    [ '1122', '2222', 2, 2 ],
    [ '1222', '2212', 4, 2 ],
    [ '3333', '3432', 2, 2 ]
  ];

  for (const [ guess, num, expectedDigitCount, expectedLocationCount ] of testCases) {
    const [ digitCount, locationCount ] = getMatchCounts(guess, num);
    // console.log(`guess: ${guess}; num: ${num}`);
    // console.log(`correct digits: ${digitCount}; correct locations: ${locationCount}`);
    console.log(`${digitCount === expectedDigitCount}; ${locationCount === expectedLocationCount}`);
  }
};
// testGetMatchCounts();


const testValidateGuess = () => {
  const cases = [ 
    [ '1234', true ],
    [ '12a4', false ],
    [ 'a2a4', false ],
    [ 'b234', false ],
    [ '123i', false ],
    [ '123!', false ],
    [ 'oooo', false ],
    [ '0000', true ],
    [ '00#0', false ],
    [ '1', false ],
    [ '?', false ],
    [ '111', false ],
    [ '1111', true ],
    [ '11111', false ]
  ];

  for (const [ str, expected ] of cases)
    console.log(validateGuess(str) === expected, str);
};
testValidateGuess();
