
/**
 * returns the censored version of the 'string' based on the array 'arr'
 * 
 * @param {string} string the input sentence to censor
 * @param {Array.<string>} arr the list of banned words for the 'string'
 * @returns the string of added censoring of banned words in 'string' 
 */
function censorMessage(string,arr){
    let rawWords = string.split(' ')
    let scrubbedWords = []

    for (word of rawWords){
        // console.log(scrubbedWords)
        let lowercaseWord = word.toLowerCase()
        
        if (arr.includes(lowercaseWord)){
            console.log(lowercaseWord,arr)
            scrubbedWords.push('*****')
        }
        else{
            scrubbedWords.push(lowercaseWord)
        }

    }
    let scrubbedMessage = scrubbedWords.join(' ')
    // console.log(rawWords)
    return scrubbedMessage
}

console.log(censorMessage("don't mess with cats", ["mess"]), `should be "don't ***** with cats`)
console.log(censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), `should be "I CANNOT ***** *****`)
console.log(censorMessage("Are you sure that this is safe", ["are", "is"]), `should be "***** you sure that this ***** safe`)
censorMessage("Are you sure that this is safe", ["are", "is"])// should be "***** you sure that this ***** safe"
censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])// should be "I CANNOT ***** *****"