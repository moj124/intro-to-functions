/**
 * Retrieve the longest word in the array of strings 'arr'
 * 
 * @param {Array.<string>} arr 
 * 
 * @returns {string} the longest word in the array 'arr'
 */
function longestInList(arr){
    let longest = arr[0]

    for (word of arr){
        if (word.length > longest.length){
            longest = word
        }
    }
    return longest
}

console.log('longestInList(["England", "Wales", "Scotland: ", "Northern Ireland"])', longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), 'should be "Northern Ireland"')
console.log('longestInList(["the", "quick", "brown", "fox"]): ', longestInList(["the", "quick", "brown", "fox"]), 'should be "quick"')
console.log('longestInList(["hello", "hi", "greetings", "hey"]): ', longestInList(["hello", "hi", "greetings", "hey"]), 'should be "greetings"')
