const performance = require('perf_hooks').performance;
const array = require('./constants/arrays.js');

// Linear Search Algos
const linearV1 = require('./linear');
const linearV2 = require('./linear');
const linearV3 = require('./linear');
const linearV4 = require('./linear');
const linearV5 = require('./linear');

/**
 * Performance Test
 * @param {function} func 
 * @param {array} arr 
 * @param {number} target
 * @returns {number} 
 */
const performanceTest = (func, arr, target) => {
    let t0 = performance.now();
    func(arr, target);
    let t1 = performance.now()
    console.log('Execution took: ' + (t1 - t0) + ' milliseconds');
    return (t1 - t0);
}

/**-----------------------------------------UNCOMMENT THE FUNCTION BLOCK YOU WANT TEST------------------------------------ */
/**----------------------------------------------------------------------------------------------------------------------- */

// Test 1
// A comparison of each linear search function with a target of 3
performanceTest(linearV1, array, 3)
performanceTest(linearV2, array, 3)
performanceTest(linearV3, array, 3)
performanceTest(linearV4, array, 3)
performanceTest(linearV5, array, 3)

/** 
 * RESULT
 * 1) Each function generally completes the search in well under 0.1 ms 
 * 2) The old school For Loop (linearV1) is the worst performer, unable to get below 0.1 ms in multiple attempts
 * 3) The other functions generally all performed in under 0.01 ms 
*/

/**----------------------------------------------------------------------------------------------------------------------- */

// Test2
// A comparison of each linear search function with a target of 300
// performanceTest(linearV1, array, 300)
// performanceTest(linearV2, array, 300)
// performanceTest(linearV3, array, 300)
// performanceTest(linearV4, array, 300)
// performanceTest(linearV5, array, 300)

/** 
 * RESULT
 * 1) Each function completes the search in well under 0.1 ms 
 * 2) The old school For Loop (linearV1) is the worst performer, unable to get below 0.04 ms in multiple attempts
 * 3) The other functions present roughly comparable performance
*/

/**----------------------------------------------------------------------------------------------------------------------- */

// Test3
// A comparison of each linear search function with a target of 3000
// performanceTest(linearV1, array, 3000)
// performanceTest(linearV2, array, 3000)
// performanceTest(linearV3, array, 3000)
// performanceTest(linearV4, array, 3000)
// performanceTest(linearV5, array, 3000)

/** 
 * RESULT
 * 1) The ForEach Loop(linearV4) is the worst performer, often taking well over 0.5 ms to complete (in some cases over 1.0 ms)
 * 2) The other functions present roughly comparable performance
*/

/**----------------------------------------------------------------------------------------------------------------------- */

// Test4
// A comparison of each linear search function with a target of 20000
// performanceTest(linearV1, array, 20000)
// performanceTest(linearV2, array, 20000)
// performanceTest(linearV3, array, 20000)
// performanceTest(linearV4, array, 20000)
// performanceTest(linearV5, array, 20000)

/** 
 * RESULT
 * 1) The old school For Loop & the While Loop are the least performant, usually taking over 1.0 ms to complete
 * 2) The best performers are the ForEach Loop (linearV4) & the Recursive function (linearV5) which consistently execute in under 0.1 ms
*/

/**----------------------------------------------------------------------------------------------------------------------- */

// Test5
// A comparison of each linear search function with a target of 30000
// performanceTest(linearV1, array, 30000)
// performanceTest(linearV2, array, 30000)
// performanceTest(linearV3, array, 30000)
// performanceTest(linearV4, array, 30000)
// performanceTest(linearV5, array, 30000)

/** 
 * RESULT
 * 1) The old school For Loop & the While Loop are the least performant, usually taking over 1.0 ms to complete
 * 2) The best performers are the ForEach Loop (linearV4) & the Recursive function (linearV5) which consistently execute in under 0.1 ms
*/

/**----------------------------------------------------------------------------------------------------------------------- */