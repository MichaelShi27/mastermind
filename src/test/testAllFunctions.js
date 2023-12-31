import TestUtils from "./TestUtils.js";
import { countMatchesObj } from "./functionsToTest/countMatches.js";
import { validateGuessObj } from "./functionsToTest/validateGuess.js";
import { validateNumberLengthObj } from "./functionsToTest/validateNumberLength.js";
import { validateTotalGuessesObj } from "./functionsToTest/validateTotalGuesses.js";
import { compareEqualityObj } from "./functionsToTest/compareEquality.js";
import { convertArrayToLLObj } from "./functionsToTest/convertArrayToLL.js";
import { getInsertLocationObj } from "./functionsToTest/getInsertLocation.js";

const testObjs = [
  validateGuessObj,
  countMatchesObj,
  validateNumberLengthObj,
  validateTotalGuessesObj,
  compareEqualityObj,
  convertArrayToLLObj,
  getInsertLocationObj
];

for (const obj of testObjs)
  TestUtils.testAFunction(obj);
