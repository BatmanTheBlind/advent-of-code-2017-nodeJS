/**
 * I'm not sure if building the spiral is the fastest solution to this puzzle but it found that doing it was a good exercice
 */
let input = 325489

const spiralMovement = ['right', 'up', 'left', 'down']
// calculate the side lenght of the square containing the spiral
const sideLength = Math.ceil(Math.sqrt(input))
// calculate the center of this square
const center = Math.floor(sideLength / 2)

// build the empty square
let spiral = []
for (let i = 0; i < sideLength; i++) {
  spiral[i] = []
  for (let j = 0; j < sideLength; j++) {
    spiral[i][j] = undefined
  }
}

// init the value of the "1" at the center of the square / spiral
let x = center
let y = center
let currentValue = 1
let indexMove = 0
let previousMoveIndex = -1
let nextMove = spiralMovement[indexMove]
spiral[y][x] = currentValue

// build the spiral by iterating the move list
while (currentValue < input) {
  switch (nextMove) {
    case 'up':
      y -= 1
      break
    case 'left':
      x -= 1
      break
    case 'down':
      y += 1
      break
    case 'right':
      x += 1
      break
  }

  // if the cell is free
  if (spiral[y][x] === undefined) {
    // set the value inside the cell
    spiral[y][x] = ++currentValue
    // store the previous index of the move for the next iteration
    previousMoveIndex = indexMove
    // get the next move
    indexMove = (indexMove + 1) % 4
    nextMove = spiralMovement[indexMove]
  } else {
    // if the cell wasn't free, cancel the move
    switch (nextMove) {
      case 'up':
        y += 1
        break
      case 'left':
        x += 1
        break
      case 'down':
        y -= 1
        break
      case 'right':
        x -= 1
        break
    }
    // and restore the previous move to try to another cell
    indexMove = previousMoveIndex
    nextMove = spiralMovement[indexMove]
  }
}

// now the spiral is build until the input value
// so we seek the number of step to go back from input value to "1" at the center of the square
let numberOfStep = 0
while (spiral[y][x] !== 1) {
  let minValue = input
  let newX
  let newY
  let xOfMin
  let yOfMin
  // we need to test the value at up, dow, left and right
  const testMove = [-1, 0, 1]
  testMove.forEach(testY => {
    testMove.forEach(testX => {
      // test only if on the the value is 0, it means we doesn't test diagonal value
      if (testX === 0 || testY === 0) {
        newX = x - testX
        newY = y - testY
        // is newX and newY a valid position in the square and is the value at the position is the nearest value to 1
        if (newX < sideLength && newY < sideLength &&
            newX > -1 && newY > -1 &&
            spiral[newY][newX] < minValue) {
          // if true, store the new min value and the corresponding position
          minValue = spiral[newY][newX]
          xOfMin = newX
          yOfMin = newY
        }
      }
    })
  })
  // count the number of step
  numberOfStep++
  // consider the position of the min value as the new starting point for the next loop
  x = xOfMin
  y = yOfMin
}
console.log(`Number of step: ${numberOfStep}`)
