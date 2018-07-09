TIMERS
===

**Question**

What is the difference between `process.nextTick` and `setImmediate`?

**Answer**

`process.nextTick` registers callbacks which are placed at the top of the event queue and executed after execution 
of the current script but before execution of any I/O or timer event callbacks. 
`setImmediate` on the otherhand registers callback which are executed after I/O events.
Conclusion: `process.nextTick` pushes callbacks to the top of the events queue. `process.nextTick` callbacks execute
before `setImmediate` callbacks

**Question**

Consider the following code snippet
```javascript
'use strict'

const {EventEmitter} = require('events')

function getEmitter () {
  const emitter = new EventEmitter()

  emitter.emit('start')

  return emitter
}

const emitter = getEmitter()

emitter.on('start', _ => console.log('Start event emitted...'))
```

a. What is the output of the above program?

**Answer**

The above snippet does not output anything even though the `start` event callback logs to the console

b. Explain your answer to question 2a

**Answer**

The `start` event is emitted before a listener is registered. The result is that the listener never receives the `start` event 
which means nothing ever gets printed to the console

c. How can you fix this using `process.nextTick`? 
Explain

**Answer**

Below is the snippet that fixes the `getEmitter` function
```javascript
function getEmitter() {
  const emitter = new EventEmitter()

  process.nextTick(_ => emitter.emit('start'))

  return emitter
}
```

The `start` event is delayed by pushing it to the event queue and allowing the current script to complete (register the listener).
The `start` event is then emitted and the expected output is logged to the console

**Question**

Consider the following code snippets (snippet1.js)
```javascript
'use strict'

function sayHello () { console.log('Saying hello...') }
function sayWorld () { console.log('Saying world...') }

setTimeout(sayHello, 1000)
setTimeout(sayWorld, 1005)
```

snippet2.js
```javascript
'use strict'

function sayHello () { console.log('Saying hello...') }
function sayWorld () { console.log('Saying world...') }

setTimeout(sayHello, 1000)
setTimeout(sayWorld, 1000)
```

a. What is the output of snippet1.js and snippet2.js?

**Answer**

The order of execution of `sayHello` and `sayWorld` in `snippet1.js` is not guaranteed. Thus the output is also not guaranteed
`sayHello` will always execute before `sayWorld` in `snippet2.js`. Thus `Saying hello...` will be printed before `Saying world...`

b. Explain why the order of execution is unpredictable in snippet1.js but predictable in snippet2.js

**Answer**

Node.js uses a single low level timer object for each timeout value. If multiple callbacks are bound to the same timeout value, 
the order of execution is predictable (the callbacks execute in the order in which they were bound) as the callbacks are queued.
For different timeout values, different low level timer objects, in different threads, are used and the order of execution 
of the timers is subject to the CPU.

**Question**

Consider the following snippet
```javascript
'use strict'

function sayHello(name) { 
  return () => console.log(`Hello! ${name}`) 
}

setTimeout(sayHello('Iron Man'), -1)
setTimeout(sayHello('Thanos'), 0)
setTimeout(sayHello('Hulk'), 'kofi')
```

a. What is the output of the above script?

**Answer**

- Hello! Iron Man
- Hello! Thanos
- Hello! Hulk

b. Why is the output of the above script predictable even though different timeout values are used?

**Answer**

A timeout of 1ms is used for each of the setTimeout calls hence the predictable callback execution.
The minimum allowed timeout for `setTimeout` is 1ms. If an invalid value (string, etc) or a value less than that is used, 
the minimum default value (1ms).

c. If a timeout value of 2000ms (2s) is used in a setTimeout call, will the callback be executed after exactly 2s? Explain

**Answer**

No. The timeout value of a setTimeout call specifies the minimum amount of time to wait before the callback is executed. This means 
the callback will not execute before 2s have elapsed. The exact time it executes, however, remains unpredictable as the low level 
timer object is subject to the CPU.
