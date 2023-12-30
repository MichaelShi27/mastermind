import TestUtils from "./TestUtils.js";
import { countMatchesObj } from "./functionsToTest/countMatches.js";
import { validateGuessObj } from "./functionsToTest/validateGuess.js";
import { validateNumberLengthObj } from "./functionsToTest/validateNumberLength.js";
import { validateTotalGuessesObj } from "./functionsToTest/validateTotalGuesses.js";

const testObjs = [
  countMatchesObj,
  validateGuessObj,
  validateNumberLengthObj,
  validateTotalGuessesObj
];

for (const obj of testObjs)
  TestUtils.testAFunction(obj);
