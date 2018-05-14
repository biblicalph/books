'use strict'

let loopIndex = 0
let stop = false

setTimeout(_ => {
  console.log('Setting stop=false...')
  stop = false
}, 1000)

while (!stop) {
  console.log(`While loop executing. Iteration count: ${++loopIndex}`)
}
