# What are Promises, and how do they differ from callbacks?
Promises and callbacks are both used to handle asynchronous operations in JavaScript, but they differ significantly in terms of readability, functionality, and error handling. Here's a detailed comparison:

## Promises
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a cleaner and more structured way to handle asynchronous code compared to callbacks.

### Key Features of Promises:
1. States:
- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.

2. Methods:
- then(): Attaches callbacks for fulfillment and rejection.
- catch(): Handles errors (rejections).
- finally(): Executes code regardless of the outcome.

3. Chaining:
- Promises can be chained using .then(), allowing sequential execution of asynchronous operations.

4. Error Handling:
- Errors can be propagated through the chain and caught using .catch().


### Example:
```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data fetched!");
    } else {
      reject("Error fetching data.");
    }
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result); // "Data fetched!"
  })
  .catch((error) => {
    console.error(error); // "Error fetching data."
  })
  .finally(() => {
    console.log("Operation complete.");
  });
```

## Callbacks
A callback is a function passed as an argument to another function, which is then executed after the completion of an asynchronous operation. Callbacks were the primary way to handle asynchronous code before Promises were introduced.

### Key Features of Callbacks:
1. Basic Structure:
- A function accepts another function as an argument and calls it once the operation is complete.

2. Error Handling:
- Errors are typically handled using the "error-first" pattern, where the first argument of the callback is reserved for an error object.

3. Callback Hell:
- Nesting multiple callbacks can lead to deeply nested and hard-to-read code, often referred to as "callback hell" or the "pyramid of doom."

### Example 
```js
function fetchData(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      callback(null, "Data fetched!");
    } else {
      callback("Error fetching data.", null);
    }
  }, 1000);
}

fetchData((error, result) => {
  if (error) {
    console.error(error); // "Error fetching data."
  } else {
    console.log(result); // "Data fetched!"
  }
});
```

![image](https://github.com/user-attachments/assets/dbcba995-2fe8-436f-890d-4018f9d1bae0)

## Advantages of Promises Over Callbacks
1. Improved Readability:
- Promises avoid deeply nested code, making it easier to read and maintain.

2. Better Error Handling:
- Errors can be caught at any point in the chain using .catch().

3. Chaining:
- Sequential asynchronous operations are easier to implement with .then().

4. Composition:
- Promises can be combined using Promise.all, Promise.race, etc.

## Example: Converting Callbacks to Promises
You can wrap a callback-based function in a Promise to modernize it:
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched!");
      } else {
        reject("Error fetching data.");
      }
    }, 1000);
  });
}

fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
### When to Use Promises vs. Callbacks
- Use Promises for modern, clean, and maintainable asynchronous code.
- Use callbacks for simple cases or when working with older APIs that don't support Promises.
