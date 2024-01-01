import { LinkedList } from '../gameLogic/LinkedList.js';

class TestUtils {
  // returns an object to be used in testing
  static createTestObj = (funcName, func, testCases) => ({ funcName, func, testCases });

  // takes in a testObj & uses its testCases to test a specific function
  static testAFunction = ({ funcName, func, testCases }) => {
    console.log(`Testing ${funcName}`);
    let failCount = 0;
  
    for (const { idx, expectedResult, arguments: args } of testCases) {
      const result = func.apply(null, args);
      if (this.compareEquality(result, expectedResult) === false) {
        console.log("\x1b[31m", `   Test ${idx} failed: 
            expected ${JSON.stringify(expectedResult)} but got ${JSON.stringify(result)}`);
        console.log(`\tArguments: ${args.map(arg => JSON.stringify(arg)).join(', ')}\n`);
        failCount++;
      }
    }
    console.log("\x1b[0m", `  Done testing ${funcName}:
        ${failCount} failed, ${testCases.length - failCount} succeeded\n`);
  };

  static compareObjectEquality = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const key in obj1)
      if (obj2.hasOwnProperty(key) === false
          || this.compareEquality(obj1[key], obj2[key]) === false)
        return false;
    return true;
  };

  static compareEquality = (a, b) => {
    if (typeof a !== typeof b) return false;
    if (typeof a === 'function' || typeof b === 'function')
      console.log("Warning: this function doesn't handle function args");
    if (a === null || b === null) // otherwise they'll trigger the object type check
      return a === b;
    if (Array.isArray(a)) {
      for (const [ idx, el ] of a.entries()) 
        if (this.compareEquality(el, b[idx]) === false)
          return false;
      return true;
    }
    if (typeof a === 'object')
      return this.compareObjectEquality(a, b);
    return a === b;
  };

  static convertArrayToDLL = arr => {
    const list = new LinkedList();
    for (const el of arr)
      list.insertAtEnd(el);
    return list;
  };
}

export default TestUtils;
