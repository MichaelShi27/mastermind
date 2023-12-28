import { testAFunction } from "./testAFunction.js";
import { getMatchCountsObj } from "./getMatchCounts.js";
import { validateGuessObj } from "./validateGuess.js";
import { validateNumberLengthObj } from "./validateNumberLength.js";

const testObjs = [
  getMatchCountsObj,
  validateGuessObj,
  validateNumberLengthObj
];

for (const obj of testObjs)
  testAFunction(obj);
