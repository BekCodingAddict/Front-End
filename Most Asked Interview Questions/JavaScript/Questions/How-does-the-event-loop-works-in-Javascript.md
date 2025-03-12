## How does the event loop work in JavaScript?
The event loop is a fundamental concept in JavaScript that enables asynchronous programming. It allows JavaScript to perform non-blocking operations, despite being single-threaded. Here's a breakdown of how the event loop works:

### 1. Single-Threaded Nature
JavaScript runs on a single thread, meaning it can only execute one task at a time. However, it can handle asynchronous operations (like I/O, timers, or network requests) efficiently using the event loop.

### 2. Components of the Event Loop
The event loop consists of the following key components:
- Call Stack: A stack data structure that tracks the execution of functions. When a function is called, it's added to the stack. When it returns, it's removed.
- Web APIs (Browser APIs): Provided by the browser (or Node.js runtime), these APIs handle asynchronous tasks like setTimeout, fetch, or DOM events.
- Callback Queue (Task Queue): Holds callbacks of completed asynchronous operations, waiting to be executed.
- Microtask Queue: Holds higher-priority callbacks, such as those from Promises (then, catch, finally) and MutationObserver.
- Event Loop: Continuously checks the call stack and queues, moving tasks from the queues to the call stack when it's empty.

### How the Event Loop Works
Here’s the step-by-step process:
1. Synchronous Code Execution:
- The JavaScript engine executes synchronous code line by line, adding functions to the call stack as they are called.

2. Asynchronous Operations:
- When an asynchronous operation (e.g., setTimeout, fetch, or Promise) is encountered, it is offloaded to the Web APIs. The main thread continues executing the remaining code.

3. Completion of Asynchronous Operations:
- Once the asynchronous operation completes, its callback is placed in the Callback Queue (for macrotasks like setTimeout) or the Microtask Queue (for microtasks like Promises).

4. Event Loop Monitoring:
- The event loop constantly checks if the call stack is empty. If it is, it prioritizes tasks in the following order:

5. Microtasks: All microtasks in the Microtask Queue are executed first.
- Macrotasks: One task from the Callback Queue is executed.

6. Repeat:
- The event loop continues this process, ensuring that the call stack is always cleared before processing the next task.


### Exapmple
```
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
### output
```txt
Start
End
Promise
Timeout
```
### Explanation:
1. Synchronous code (console.log("Start") and console.log("End")) is executed first.

2. The Promise callback is a microtask and is executed before the setTimeout callback (a macrotask).

### 5. Key Points
- Microtasks have higher priority than macrotasks.
- Examples of microtasks: Promises, queueMicrotask, MutationObserver.
- Examples of macrotasks: setTimeout, setInterval, setImmediate (Node.js), I/O operations, UI rendering.
- The event loop ensures that JavaScript remains responsive and efficient, even with asynchronous operations.


