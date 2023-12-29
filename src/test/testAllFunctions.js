import TestUtils from "./TestUtils.js";
import { getMatchCountsObj } from "./functionsToTest/getMatchCounts.js";
import { validateGuessObj } from "./functionsToTest/validateGuess.js";
import { validateNumberLengthObj } from "./functionsToTest/validateNumberLength.js";
import { validateTotalGuessesObj } from "./functionsToTest/validateTotalGuesses.js";

const testObjs = [
  getMatchCountsObj,
  validateGuessObj,
  validateNumberLengthObj,
  validateTotalGuessesObj
];

for (const obj of testObjs)
  TestUtils.testAFunction(obj);
