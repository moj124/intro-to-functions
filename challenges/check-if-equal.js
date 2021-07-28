`use strict`;

/**
 * Return true if the two numbers 'a' and 'b' are logically equal
 * 
 * @param {number} a - the number used for comparison
 * @param {number} b - the number used for comparison
 * @returns {boolean} determines in boolean if 'a' is equal to 'b'
 */
function isEqual(a,b){
    if (a === b){
        return true
    }
    return false
}

console.log('isEqual(4,4):',isEqual(4, 4), 'should be True')
console.log('isEqual(0,0):',isEqual(0, 0), 'should be True')
console.log('isEqual(-4,-4):',isEqual(-4, -4), 'should be True')
console.log('isEqual(4,-4):',isEqual(4, -4), 'should be False')
console.log('isEqual(0,1):',isEqual(0, 1), 'should be False')

