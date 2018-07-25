NODEJS EVENT LOOP
___

**Question**

Consider the code in [while loop example](./001-while-loop.js) for the questions below

a. Will the above code terminate? Explain your answer

**Answer**

No. The while loop occupies the event loop and prevents execution of the setTimeout callback. 
The program is thus basically an infinite loop that will only terminate when Node runs out of memory

**Question**

Consider the program in [deferred event sources](./002-deferred-events.js)

a. What is the output of the program?

**Answer**

- first console log ...
- emitter callback ...
- second console log ...
- process.nextTick callback ...
- 1ms timeout ...
- first stat ...
- second stat ...
- setImmediate callback ...
- 10ms callback ...

**Explanation**

`process.nextTick` calls execute before I/O and timer events but after all synchronous code (loops, expressions and events 
emitted within the current context). 
Thus console logs and emitter callback execute first.
After that, `process.nextTick` callback executes before any I/O or timer events.
Timer events, depending on timeout value, execute before or after I/O events.
`setImmediate` callbacks add to the bottom of the event queue. Thus they execute after I/O and timer events which have 
completed and are ready to be executed. 
