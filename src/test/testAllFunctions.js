import TestUtils from "./TestUtils.js";
import { countMatchesObj } from "./functionsToTest/countMatches.js";
import { validateGuessObj } from "./functionsToTest/validateGuess.js";
import { validateNumberLengthObj } from "./functionsToTest/validateNumberLength.js";
import { validateTotalGuessesObj } from "./functionsToTest/validateTotalGuesses.js";
// import { updateHighScoresObj } from "./functionsToTest/updateHighScores.js";
import { compareEqualityObj } from "./functionsToTest/compareEquality.js";
import { convertArrayToDLLObj } from "./functionsToTest/convertArrayToDLL.js";
import { getInsertLocationObj } from "./functionsToTest/getInsertLocation.js";

const testObjs = [
  countMatchesObj,
  validateGuessObj,
  validateNumberLengthObj,
  validateTotalGuessesObj,
  updateHighScoresObj,
  compareEqualityObj,
  convertArrayToDLLObj,
  getInsertLocationObj
];

for (const obj of testObjs)
  TestUtils.testAFunction(obj);
