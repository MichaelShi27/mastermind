import TestUtils from "../TestUtils.js";
import HighScores from '../../gameLogic/HighScores.js';

const emptyScoresList = [];
const scoresListWithOne = [ { guessesUsed: 5, numLength: 6 } ];
const incompleteScoresList = [
  { guessesUsed: 2, numLength: 8 },
  { guessesUsed: 3, numLength: 8 },
  { guessesUsed: 5, numLength: 8 },
  { guessesUsed: 6, numLength: 6 },
  { guessesUsed: 6, numLength: 6 },
  { guessesUsed: 9, numLength: 6 },
  { guessesUsed: 5, numLength: 4 },
  { guessesUsed: 10, numLength: 4 },
  { guessesUsed: 10, numLength: 4 }
];
const completeScoresList = [
  { guessesUsed: 2, numLength: 8 },
  { guessesUsed: 3, numLength: 8 },
  { guessesUsed: 5, numLength: 8 },
  { guessesUsed: 6, numLength: 6 },
  { guessesUsed: 6, numLength: 6 },
  { guessesUsed: 9, numLength: 6 },
  { guessesUsed: 5, numLength: 4 },
  { guessesUsed: 7, numLength: 4 },
  { guessesUsed: 8, numLength: 4 },
  { guessesUsed: 9, numLength: 4 }
];

const testCases = [
  { 
    idx: 1,
    arguments: [ emptyScoresList, 1, 4 ],
    expectedResult: null,
  }, {
    idx: 2,
    arguments: [ scoresListWithOne, 4, 6 ], // insert before sole node
    expectedResult: null
  }, {
    idx: 3,
    arguments: [ scoresListWithOne, 6, 6 ], // insert after sole node
    expectedResult: { guessesUsed: 5, numLength: 6 }
  }, {
    idx: 4,
    arguments: [ incompleteScoresList, 1, 8 ], // insert as first
    expectedResult: null,
  }, {
    idx: 5,
    arguments: [ incompleteScoresList, 15, 4 ], // insert as last
    expectedResult: { guessesUsed: 10, numLength: 4 }
  }, {
    idx: 6,
    arguments: [ incompleteScoresList, 10, 4 ], // insert as last as tie
    expectedResult: { guessesUsed: 10, numLength: 4 }
  }, {
    idx: 7,
    arguments: [ completeScoresList, 8, 6 ], // insert in middle
    expectedResult: { guessesUsed: 6, numLength: 6 }
  }, {
    idx: 8,
    arguments: [ completeScoresList, 10, 4 ], // insert as last
    expectedResult: { guessesUsed: 9, numLength: 4 }
  }, {
    idx: 9,
    arguments: [ completeScoresList, 9, 4 ], // insert as last as tie
    expectedResult: { guessesUsed: 9, numLength: 4 }
  }
];

const testGetInsertLocation = (highScores, guessesUsed, numLength) => {
  const highScoresObj = new HighScores(TestUtils.convertArrayToDLL(highScores), 
      guessesUsed, numLength);
  const resultNode = highScoresObj.getInsertLocation();
  return resultNode === null ? resultNode : resultNode.data;
};

export const getInsertLocationObj = TestUtils.createTestObj('getInsertLocation', 
    testGetInsertLocation, testCases);
