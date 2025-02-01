# What is hoisting in JavaScript?
Hoisting is JavaScript's default behavior of moving function and variable declarations to the top of their scope before execution. This means you can use functions and variables before they are declared in the code.

## 1. Variable Hoisting (var, let, const)
###🔹 var is hoisted but initialized as undefined
```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10

```
Explanation:
- var a; is hoisted to the top.
- Before assignment, a is undefined.

Behind the scenes, JavaScript interprets the code like this:
```js
var a;  // Hoisted to the top
console.log(a); // undefined
a = 10; // Assigned value
console.log(a); // 10

```
### 🔹 let and const are hoisted but NOT initialized
```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

```
- let and const are hoisted but stay in the "Temporal Dead Zone" (TDZ) until they are assigned a value.
- This prevents them from being accessed before declaration.

Same happens with const:
```js
console.log(c); // ❌ ReferenceError
const c = 30;
```
### ✅ Key Takeaway:
- var is hoisted and initialized as undefined.
- let and const are hoisted but NOT initialized (TDZ error if accessed before declaration).

## 2. Function Hoisting
### 🔹 Function Declarations are fully hoisted
```js
sayHello(); // ✅ Works fine

function sayHello() {
  console.log("Hello, Hoisting!");
}
```
Function declarations are fully hoisted, meaning you can call them before they appear in the code.

JavaScript internally moves it to the top:
```js
function sayHello() {
  console.log("Hello, Hoisting!");
}
sayHello(); // ✅ Works
```
### 🔹 Function Expressions are NOT hoisted
```js
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hello!");
};
```
- Only the variable (greet) is hoisted, but NOT its function assignment.
- Before assignment, greet is undefined, so calling it results in an error.

### ✅ Key Takeaway:
- Function declarations are hoisted.
- Function expressions are NOT hoisted


### 3.Summary
![image](https://github.com/user-attachments/assets/ddfd76a4-5f7e-42a5-a54b-748206bfdd0e)
