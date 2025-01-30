## Explain closures and give an example.
클로저(Closure)는 함수와 그 함수가 선언될 때의 렉시컬 환경(상위 함수의 변수들)을 기억하는 함수입니다. 즉, 클로저는 함수가 실행될 때, 그 함수가 정의된 환경에서의 변수들을 "포획"하고 이를 기억하는 특성을 가집니다. 이를 통해, 함수가 종료된 후에도 그 함수 내에서 정의된 변수들을 계속 사용할 수 있습니다.

### 예시:
```js
function outer() {
  let count = 0; // outer 함수의 지역 변수

  function inner() {  // inner 함수는 count에 접근할 수 있다
    count++;
    console.log(count);
  }

  return inner;  // inner 함수(클로저)를 반환
}

const counter = outer();  // outer 함수가 실행되고 inner 함수가 반환됨
counter();  // 1
counter();  // 2
counter();  // 3
```
위 예시에서 outer 함수는 inner 함수를 반환합니다. inner 함수는 count 변수를 참조하고 있으며, outer 함수가 끝난 후에도 count에 계속 접근할 수 있습니다. 이는 inner 함수가 클로저이기 때문입니다.

즉, 클로저는 함수가 정의된 환경을 "기억"하여 그 환경에 있는 변수들을 계속 사용할 수 있게 해 줍니다.

## Usecase
You would use closures in JavaScript in several scenarios where you need to preserve the state between function calls or need access to variables from an outer function after it has finished execution. Here are some common use cases:

### 1. Data Encapsulation and Privacy
Closures allow you to create private variables that can only be accessed or modified through specific functions.

Example:
```js
function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```
In this example, count is private and can only be accessed through the increment and decrement functions.

### 2. Callbacks and Event Handlers
When passing functions as arguments, closures can capture the necessary context or state at the time of the function's definition. This is especially useful for asynchronous operations or event handling.

Examples
```js
function fetchData(url) {
  let requestData = "Requesting data from: " + url;
  return function() {
    console.log(requestData);
  };
}

const logData = fetchData("https://example.com");
setTimeout(logData, 2000);  // After 2 seconds, it logs: Requesting data from: https://example.com
```
### 3. Function Factories
- Closures can be used to create functions dynamically based on certain parameters or states, and the returned function can "remember" the parameters used to create it.

Examples
```js
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // 10
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5)); // 15

```

### 4. Memoization (Caching Results)
Closures are often used in caching functions, where the result of expensive function calls is remembered to avoid repeating the same computation.

example
```js
function memoize(fn) {
  let cache = {};
  return function(arg) {
    if (cache[arg]) {
      console.log("Fetching from cache");
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const square = memoize(function(x) {
  return x * x;
});

console.log(square(5)); // 25
console.log(square(5)); // Fetching from cache, 25

```
### 5. Private Methods in Object-Oriented Programming
Closures are commonly used to implement private methods or private variables in objects, making sure that certain data is not directly accessible.

example
```js
function Car(make, model) {
  let speed = 0;  // Private variable

  this.make = make;
  this.model = model;

  this.accelerate = function() {
    speed += 10;
    console.log("Speed:", speed);
  };

  this.decelerate = function() {
    speed -= 10;
    console.log("Speed:", speed);
  };

  this.getSpeed = function() {
    return speed;
  };
}

const myCar = new Car('Toyota', 'Corolla');
myCar.accelerate(); // Speed: 10
console.log(myCar.getSpeed()); // 10
```
### When to Use Closures?
- When you need to maintain state across multiple function calls: If you need a function to "remember" its environment, closures allow you to do this.
- For data privacy and encapsulation: To prevent external access to internal data or functions.
- When you need a function that depends on a specific context: For example, when handling asynchronous events or creating dynamic functions.
- In performance optimization: Memoization and caching are common patterns where closures help optimize repeated operations.
