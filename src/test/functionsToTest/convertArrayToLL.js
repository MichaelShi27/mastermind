import TestUtils from "../TestUtils.js";

const testCases = [ 
  { 
    idx: 1, 
    arguments: [ [ 1, 2, 3 ] ], 
    expectedResult: true
  }, {
    idx: 2, 
    arguments: [ [ [], 2, 3 ] ], 
    expectedResult: true
  }, {
    idx: 3, 
    arguments: [ 
      [ [ { a: 1 } ], 2, 3 ] 
    ], 
    expectedResult: true
  }, {
    idx: 4, 
    arguments: [ [ [], 2, false ] ], 
    expectedResult: true
  }, {
    idx: 5, 
    arguments: [ 
      [ 
        [], 2, { 
          a: 1, 
          b: { 
            a: [ 1, { a: 1 } ], 
            b: {} 
          } 
        } 
      ] 
    ], 
    expectedResult: true
  }, {
    idx: 6, 
    arguments: [ [] ],
    expectedResult: true
  }, {
    idx: 7, 
    arguments: [ [ 1 ] ],
    expectedResult: true
  }
];

const testConvertArrayToLL = arr => {
  const { head, length } = TestUtils.convertArrayToLL(arr);

  let currentNode = head;
  let idx = 0;
  while (currentNode !== null) {
    if (TestUtils.compareEquality(currentNode.data, arr[idx]) === false)
      return false;
    currentNode = currentNode.next;
    idx++;
  }
  return idx === length && arr.length === length;
};

export const convertArrayToLLObj = TestUtils.createTestObj(
    'convertArrayToLL', testConvertArrayToLL, testCases);
