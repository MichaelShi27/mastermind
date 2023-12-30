import TestUtils from "../TestUtils.js";

const testCases = [ 
  { idx: 1, arguments: [ '1234', 1234 ], expectedResult: false },
  { idx: 2, arguments: [ '1234', '1234' ], expectedResult: true },
  { idx: 3, arguments: [ '12345', '12344' ], expectedResult: false },
  { idx: 4, arguments: [ 4, 4 ], expectedResult: true },
  { idx: 5, arguments: [ 3, 4 ], expectedResult: false,  },
  { idx: 6, arguments: [ [], [] ], expectedResult: true },
  { idx: 7, arguments: [ [ 1, 2, 3 ], [ 1, 2, 3 ] ], expectedResult: true },
  { idx: 8, arguments: [ [ 1, 2, 3 ], [ 1, 2 ] ], expectedResult: false ,},
  { idx: 9, arguments: [ null, null ], expectedResult: true },
  { idx: 10, arguments: [ 'null', null ], expectedResult: false },
  { idx: 11, arguments: [ undefined, null ], expectedResult: false ,},
  { idx: 12, arguments: [ undefined, undefined ], expectedResult: true },
  { idx: 13, arguments: [ {}, {} ], expectedResult: true },
  { idx: 14, arguments: [ { a: 1, b: 2 }, { b: 2, a: 1 } ], expectedResult: true },
  { idx: 15, arguments: [ { a: 1, b: 2 }, { a: 1, b: 2, c: 3 } ], expectedResult: false },
  { idx: 16, arguments: [ { a: 1, b: 2, c: 3 }, { a: 1, b: 2 } ], expectedResult: false },
  { 
    idx: 17, 
    arguments: [ 
      [ 
        {},
        [],
        { a: [ 1, 2, { a: 1 } ], b: 'hi' },
        [ 1, 2, { a: 1, b: [ 1, 2 ] } ]
      ], [
        {},
        [],
        { a: [ 1, 2, { a: 1 } ], b: 'hi' },
        [ 1, 2, { a: 1, b: [ 1, 2 ] } ]
      ]
    ], 
    expectedResult: true 
  }, {
    idx: 18, 
    arguments: [ 
      [ 
        {},
        [],
        { a: [ 1, 2, { a: 1 } ], b: 'hi' },
        [ 1, 2, { a: 1, b: [ 1, 2 ] } ]
      ], [
        {},
        [],
        { a: [ 1, 2, { a: 1, b: 2 } ], b: 'hi' },
        [ 1, 2, { a: 1, b: [ 1, 2 ] } ]
      ]
    ], 
    expectedResult: false 
  }
];

export const compareEqualityObj = TestUtils.createTestObj('compareEquality', 
    TestUtils.compareEquality, testCases);
