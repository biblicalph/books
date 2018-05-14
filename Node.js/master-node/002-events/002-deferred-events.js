'use strict'

const {EventEmitter} = require('events')
const fs = require('fs')

// Variable to track position of callback execution on stack
let stackPosition = 0

const messenger = new EventEmitter()

console.log(`${++stackPosition}: first console log - hello world`)

fs.stat(__filename, (err, stats) => {
  let message = `${++stackPosition}: first stat callback`

  if (err) {
    console.log(`${message}. An error occurred: `, err.message)
    return
  }

  console.log(`${++stackPosition}: first stat callback`, stats)
})

setTimeout(_ => console.log(`${++stackPosition}: 1ms setTimeout callback`))

setTimeout(_ => console.log(`${++stackPosition}: 10ms setTimeout callback`), 10)

setImmediate(_ => console.log(`${++stackPosition}: setImmediate callback`))

fs.stat(__filename, (err, stats) => {
  let message = `${++stackPosition}: second stat callback`

  if (err) {
     console.log(`${message}. An error occurred: `, err.message)
     return
  }

  console.log(message, stats)
})

process.nextTick(_ => console.log(`${++stackPosition}: process.nextTick callback`))

messenger.on('message', message => console.log(`${++stackPosition}: emitter callback`, message))

messenger.emit('message', 'Delighted to be here')

console.log(`${stackPosition}: second console log - the world is beautiful`)
