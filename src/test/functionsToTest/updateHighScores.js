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
    arguments: [ emptyScoresList, 1, 4, 0 ],
    expectedResult: [ { guessesUsed: 1, numLength: 4 } ]
  }, {
    idx: 2,
    arguments: [ scoresListWithOne, 4, 6, 0 ],
    expectedResult: [ 
      { guessesUsed: 4, numLength: 6 },
      { guessesUsed: 5, numLength: 6 }
    ]
  }, {
    idx: 3,
    arguments: [ scoresListWithOne, 6, 6, 1 ],
    expectedResult: [ 
      { guessesUsed: 5, numLength: 6 },
      { guessesUsed: 6, numLength: 6 }
    ]
  }, {
    idx: 4,
    arguments: [ incompleteScoresList, 1, 8, 0 ], // new score goes first
    expectedResult: [ 
      { guessesUsed: 1, numLength: 8 },
      ...incompleteScoresList
    ]
  }, {
    idx: 5,
    arguments: [ incompleteScoresList, 15, 4, 9 ], // new score goes last
    expectedResult: [ 
      ...incompleteScoresList,
      { guessesUsed: 15, numLength: 4 }
    ]
  }, {
    idx: 6,
    arguments: [ incompleteScoresList, 10, 4, 9 ], // new score goes last as tie
    expectedResult: [ 
      ...incompleteScoresList,
      { guessesUsed: 10, numLength: 4 }
    ]
  }
];

const testUpdateHighScores = (highScores, guessesUsed, numLength, newScoreIdx) => {
  const highScoresObj = new HighScores(highScores, guessesUsed, numLength);
  return highScoresObj.updateHighScores(newScoreIdx);
};

export const updateHighScoresObj = TestUtils.createTestObj('updateHighScores', 
    testUpdateHighScores, testCases);
