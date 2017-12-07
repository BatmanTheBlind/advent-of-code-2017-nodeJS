const fs = require('fs')
// load inpunt from a file
const input = fs.readFileSync('./day2/input.txt').toString('utf-8')
// build a 2 dimension array from input file (easier thant writing it manually in JS)
const matrix = input.split('\r\n')
                    .map(row => row.split('\t'))

let checksum = 0
matrix.forEach(row => {
  // reduce array to its max value
  const max = row.reduce((a, b) => {
    return Math.max(parseInt(a), parseInt(b))
  })
  // reduce array to its min value
  const min = row.reduce((a, b) => {
    return Math.min(parseInt(a), parseInt(b))
  })
  // checksum is the sum of the diff of min and max of each rox
  checksum += (max - min)
})

console.log(`Part I: checksum is ${checksum}`)

checksum = 0
matrix.forEach(row => {
  // reduce array to its max value
  let a
  let b
  for (let i = 0; i < row.length; i++) {
    a = parseInt(row[i])
    for (let j = 0; j < row.length; j++) {
      // we don't want to compare the first value with itself
      if (i === j) {
        continue
      }
      b = parseInt(row[j])
      // does i / j is a whole number ?
      if (a % b === 0) {
         // if yes, our second number is J
        break // break second loop as we hav found both number
      } else {
        // if not, reset b to undefined
        b = undefined
      }
    }
    if (b) {
      break // break first loop as we hav found both number
    }
  }
  // checksum is the sum of the diff of min and max of each rox
  checksum += (a / b)
})

console.log(`Part II: checksum is ${checksum}`)
