const fs = require('fs')
const input = fs.readFileSync('./day2/input.txt').toString('utf-8')
// build a 2 dimension array from input file
const matrix = input.split('\r\n')
                    .map(row => row.split('\t'))

let checksum = 0
matrix.forEach(row => {

  const max = row.reduce((a, b) => {
    return Math.max(parseInt(a), parseInt(b))
  })
  const min = row.reduce((a, b) => {
    return Math.min(parseInt(a), parseInt(b))
  })
  checksum += (max - min)
})

console.log(`Checksum is ${checksum}`)
