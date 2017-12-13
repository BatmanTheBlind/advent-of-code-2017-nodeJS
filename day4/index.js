const fs = require('fs')
// load inpunt from a file
const input = fs.readFileSync('./day4/input.txt').toString('utf-8')

let numberOfValidPass = 0
const passPhrases = input.split('\r\n')
passPhrases.forEach((passPhrase, i) => {
  const words = passPhrase.split(' ')
  let isValid = true
  words.forEach((word1, index1) => {
    words.forEach((word2, index2) => {
      if (word1 === word2 && index1 !== index2) {
        isValid = false
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

console.log(`${numberOfValidPass} passphrases valid`)
