/** 
 * Linear Search Algorithm
 * Find if number in array (old school loop)
 * Version 1
 * @param {array} arr
 * @param {number} target
 * @returns {boolean}
 */

const linearV1 = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
}; 

/** 
 * Linear Search Algorithm
 * Find if number in array (while loop)
 * Version 2
 * @param {array} arr
 * @param {number} target
 * @returns {boolean}
 */

const linearV2 = (arr, target) => {
    let count = 0;
    while (count < arr.length) {
        if (arr[count] === target) {
            return true;
        }
        count++;
    }
    return false
}; 

/** 
 * Linear Search Algorithm
 * Find if number in array (for...of loop)
 * Version 3
 * @param {array} arr
 * @param {number} target
 * @returns {boolean}
 */

const linearV3 = (arr, target) => {
    for (let el of arr) {
        if (el === target) {
            return true;
        }
    }
    return false;
}; 

/** 
 * Linear Search Algorithm
 * Find if number in array (forEach)
 * Version 4
 * @param {array} arr
 * @param {number} target
 * @returns {boolean}
 */

const linearV4 = (arr, target) => {
    let result = false;
    arr.forEach(el => {
        if (el === target) { 
            result = true;
        };
    });
    return result;
}; 

/** 
 * Linear Search Algorithm
 * Find if number in array (recursive)
 * Version 5 
 * @param {array} arr
 * @param {number} target
 * @returns {boolean}
 */

const linearV5 = (arr, target, i = 0) => {
    let len = arr.length - 1;
    if (i > len) return false;
    if (arr[i] === target) return true;
    return linearV5(arr, target, i + 1);
}; 

module.exports = linearV1, linearV2, linearV3, linearV4, linearV5;