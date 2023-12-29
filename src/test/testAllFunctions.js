import TestUtils from "./TestUtils.js";
import { getMatchCountsObj } from "./functionsToTest/getMatchCounts.js";
import { validateGuessObj } from "./functionsToTest/validateGuess.js";
import { validateNumberLengthObj } from "./functionsToTest/validateNumberLength.js";

const testObjs = [
  getMatchCountsObj,
  validateGuessObj,
  validateNumberLengthObj
];

for (const obj of testObjs)
  TestUtils.testAFunction(obj);
