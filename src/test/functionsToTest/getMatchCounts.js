import { getMatchCounts } from "../../components/GuessInput/helpers.js";
import TestUtils from "../TestUtils.js";

const testCases = [
  { idx: 1, arguments: [ '0135', '2246' ], expectedResult: [ 0, 0 ] },
  { idx: 2, arguments: [ '0135', '0246' ], expectedResult: [ 1, 1 ] },
  { idx: 3, arguments: [ '0135', '2211' ], expectedResult: [ 1, 0 ] },
  { idx: 4, arguments: [ '0135', '0156' ], expectedResult: [ 3, 2 ] },
  { idx: 5, arguments: [ '1111', '2222' ], expectedResult: [ 0, 0 ] },
  { idx: 6, arguments: [ '1000', '4441' ], expectedResult: [ 1, 0 ] },
  { idx: 7, arguments: [ '0101', '1010' ], expectedResult: [ 4, 0 ] },
  { idx: 8, arguments: [ '1234', '4321' ], expectedResult: [ 4, 0 ] },
  { idx: 9, arguments: [ '2222', '2222' ], expectedResult: [ 4, 4 ] },
  { idx: 10, arguments: [ '1122', '2222' ], expectedResult: [ 2, 2 ] },
  { idx: 11, arguments: [ '1222', '2212' ], expectedResult: [ 4, 2 ] },
  { idx: 12, arguments: [ '3333', '3432' ], expectedResult: [ 2, 2 ] },
  { idx: 13, arguments: [ '33333', '34323' ], expectedResult: [ 3, 3 ] },
  { idx: 14, arguments: [ '654321', '123456' ], expectedResult: [ 6, 0 ] },
  { idx: 15, arguments: [ '123456', '777777' ], expectedResult: [ 0, 0 ] },
  { idx: 16, arguments: [ '123456', '777776' ], expectedResult: [ 1, 1 ] },
  // this last test is supposed to fail
  { idx: 16, arguments: [ '123456', '777776' ], expectedResult: [ 1, 0 ] } 
];

export const getMatchCountsObj = TestUtils.createTestObj('getMatchCounts', 
    getMatchCounts, testCases);
