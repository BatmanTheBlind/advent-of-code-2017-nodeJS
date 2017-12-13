const fs = require('fs')
// load inpunt from a file
const input = fs.readFileSync('./day4/input.txt').toString('utf-8')

let numberOfValidPass = 0
const passPhrases = input.split('\r\n')

// iterate on each passphrase
passPhrases.forEach((passPhrase, i) => {
  const words = passPhrase.split(' ')
  let isValid = true
  words.forEach((word1, index1) => {
    words.forEach((word2, index2) => {
      // if the same word is found at different index
      if (word1 === word2 && index1 !== index2) {
        isValid = false // the passe phrase is invalid
      }
    })
  })
  if (isValid) {
    console.log(`${i + 1}) VALID : ${passPhrase}`)
    numberOfValidPass++ // count the bumber of valid passphrase
  } else {
    console.log(`${i + 1}) INVALID : ${passPhrase}`)
  }
})

console.log(`Part I: ${numberOfValidPass} passphrases valid`)

/**
 * Check if two words are anagram and return the result
 * @param {String} a the first word
 * @param {String} b the second word
 * @return {Boolean} true if the two words are anagram
 */
const areAnagram = (a, b) => {
  let isAnagram = true
  if (a.length === b.length) {
    a.split('').forEach(letter1 => {
      if (b.split('').indexOf(letter1) === -1) {
        isAnagram = false
      }
    })
  } else {
    isAnagram = false
  }
  return isAnagram
}
// reset counter of valid passphrase
numberOfValidPass = 0
passPhrases.forEach((passPhrase, i) => {
  const words = passPhrase.split(' ')
  let isValid = true
  words.forEach((word1, index1) => {
    words.forEach((word2, index2) => {
      // if two anagram are found at the same index
      if (index1 !== index2 && areAnagram(word1, word2)) {
        isValid = false // the passphrase is invalid
      }
    })
  })
  if (isValid) {
    console.log(`${i + 1}) VALID : ${passPhrase}`)
    numberOfValidPass++
  } else {
    console.log(`${i + 1}) INVALID : ${passPhrase}`)
  }
})

console.log(`Part II: ${numberOfValidPass} passphrases valid`)
