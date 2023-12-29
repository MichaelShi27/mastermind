class TestUtils {
  // returns an object to be used in testing
  static createTestObj = (funcName, func, testCases) => ({ funcName, func, testCases });

  // takes in a testObj & uses its testCases to test a specific function
  static testAFunction = ({ funcName, func, testCases }) => {
    console.log(`Testing ${funcName}`);
    let failCount = 0;
  
    for (const { idx, expectedResult, arguments: args } of testCases) {
      const result = func.apply(null, args);
      if (JSON.stringify(result) !== JSON.stringify(expectedResult)) { // stringify in case we're comparing arrays
        console.log("\x1b[31m", `   Test ${idx} failed: expected ${expectedResult} but got ${result}`);
        console.log(`\tArguments: ${args.join(', ')}\n`);
        failCount++;
      }
    }
    console.log("\x1b[0m", `Done testing ${funcName}: ${failCount} failed, ${testCases.length - failCount} succeeded\n`);
  };
}

export default TestUtils;