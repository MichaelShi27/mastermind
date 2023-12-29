import { OPTIONS } from '../../constants.js';
import InputValidators from "../../gameLogic/helpers/InputValidators.js";
import TestUtils from "../TestUtils.js";

const testCases = [
  { idx: 1, arguments: [ 'a' ], expectedResult: false },
  { idx: 2, arguments: [ OPTIONS.MIN_TOTAL_GUESSES ], expectedResult: true },
  { idx: 3, arguments: [ OPTIONS.MAX_TOTAL_GUESSES ], expectedResult: true },
  { idx: 4, arguments: [ OPTIONS.MAX_TOTAL_GUESSES - 1 ], expectedResult: true },
  { idx: 5, arguments: [ OPTIONS.MIN_TOTAL_GUESSES - 1 ], expectedResult: false },
  { idx: 6, arguments: [ OPTIONS.MAX_TOTAL_GUESSES + 1 ], expectedResult: false }
];

export const validateTotalGuessesObj = TestUtils.createTestObj('validateTotalGuesses', 
    InputValidators.validateTotalGuesses, testCases);
