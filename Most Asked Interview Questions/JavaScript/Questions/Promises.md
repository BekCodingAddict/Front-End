## What are JavaScript promises, and how do you use them?

>[!TIP]
>A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a cleaner and more structured way to handle asynchronous tasks compared to callbacks.

A Promise has three states:
1.Pending: The operation has not yet completed, and the outcome is not known.
2.Fulfilled: The operation has completed successfully, and the promise is resolved with a result.
3.Rejected: The operation has failed, and the promise is rejected with an error.

### How to Use Promises
1.Creating a Promise
- A promise is created using the Promise constructor, which takes a function (called the executor) with two parameters: resolve and reject.
```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});
```
2. Using .then(), .catch(), and .finally()
- .then(): Handles the successful resolution of the promise.
- .catch(): Handles promise rejection (errors).
- .finally(): Executes code after the promise settles (fulfilled or rejected).

```javascript
myPromise
  .then((result) => {
    console.log(result); // "Operation succeeded!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed!"
  })
  .finally(() => {
    console.log("Promise settled.");
  });
```
### 3.Chaining Promises
You can chain multiple .then() calls to handle sequential asynchronous tasks. Each .then() returns a new promise.
```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((data) => {
    console.log(data); // "Data fetched"
    return "Processing data";
  })
  .then((processedData) => {
    console.log(processedData); // "Processing data"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
### 4. Using Promise.all
Use Promise.all to run multiple promises in parallel. It resolves when all promises resolve or rejects if any promise fails.
```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [10, 20, 30]
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
### 5.Using Promise.race
Promise.race resolves or rejects as soon as the first promise settles.
```javascript
const slowPromise = new Promise((resolve) => setTimeout(resolve, 2000, "Slow"));
const fastPromise = new Promise((resolve) => setTimeout(resolve, 1000, "Fast"));

Promise.race([slowPromise, fastPromise]).then((result) => {
  console.log(result); // "Fast"
});
```
### Why Use Promises?
- Avoids Callback Hell: Promises make asynchronous code easier to read and maintain compared to nested callbacks.
- Better Error Handling: With .catch(), errors are easier to manage in a promise chain
- Improves Scalability: Promises allow more complex workflows with features like Promise.all and Promise.race.

### Real-World Example
```javascript
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ id: userId, name: "Bek" });
      } else {
        reject("User ID is required.");
      }
    }, 1000);
  });
}

fetchUserData(1)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
