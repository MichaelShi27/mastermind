import { validateGuess } from "../../components/GuessInput/helpers.js";
import TestUtils from "../TestUtils.js";

const testCases = [ 
  { idx: 1, arguments: [ '1234', 4 ], expectedResult: true },
  { idx: 2, arguments: [ '1234', 5 ], expectedResult: false },
  { idx: 3, arguments: [ '12345', 5 ], expectedResult: true },
  { idx: 4, arguments: [ '12a4', 4 ], expectedResult: false },
  { idx: 5, arguments: [ 'a2a4', 4 ], expectedResult: false,  },
  { idx: 6, arguments: [ 'b234', 4 ], expectedResult: false },
  { idx: 7, arguments: [ '123i', 4 ], expectedResult: false },
  { idx: 8, arguments: [ '123!', 4 ], expectedResult: false ,},
  { idx: 9, arguments: [ 'oooo', 4 ], expectedResult: false },
  { idx: 10, arguments: [ '00000', 5 ], expectedResult: true },
  { idx: 11, arguments: [ '00#0', 4 ], expectedResult: false ,},
  { idx: 12, arguments: [ '1', 4 ], expectedResult: false },
  { idx: 13, arguments: [ '?', 1 ], expectedResult: false },
  { idx: 14, arguments: [ '111', 4 ], expectedResult: false },
  { idx: 15, arguments: [ '1111', 4 ], expectedResult: true },
  { idx: 16, arguments: [ '11111', 4 ], expectedResult: false }
];

export const validateGuessObj = TestUtils.createTestObj('validateGuess', 
    validateGuess, testCases);
