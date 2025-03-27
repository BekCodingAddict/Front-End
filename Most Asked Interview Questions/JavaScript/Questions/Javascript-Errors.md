## What are diffrent type of errors in javascript?
JavaScript errors can be categorized into different types based on their nature and when they occur. Here are the main types of errors in JavaScript:

### 1. Syntax Errors
- Also known as parsing errors, these occur when JavaScript code is not written correctly.
Example:
```jsx
console.log("Hello World" // Missing closing parenthesis
```
- Fix: Ensure correct syntax (e.g., closing brackets, proper function calls).

### 2. Reference Errors
- Occur when trying to use a variable that has not been declared or is out of scope.
Example:
```jsx
console.log(myVar); // myVar is not defined
```
- Fix: Declare variables before use (let, const, or var).

### 3. Type Errors
- Happen when trying to perform an operation on a value of an inappropriate type.
Example:
```jsx
let num = 10;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function
```
- Fix: Ensure operations are valid for the given data type.

### 4. Range Errors
- Occur when a value is not in the expected range.
Example:
```js
let arr = new Array(-5); // RangeError: Invalid array length
```
Fix: Use values within valid ranges.

### 5. Eval Errors (Rare)
- Related to improper use of the eval() function.
Example:
```jsx
eval("alert('Hello)"); // Missing closing quote
```
- Fix: Avoid using eval() (it’s unsafe and bad practice).

### 6. URI Errors
- Occur when passing invalid parameters to URI-handling functions like decodeURI() or encodeURI().

Example:
```js
decodeURI("%"); // URIError: URI malformed

```
- Fix: Ensure the input string is properly encoded.

### 7. Logical Errors
- These are not actual JavaScript errors but occur due to incorrect logic in code.
Example:
```js
let isAdult = age > 18; // If age is undefined, it results in NaN
```
- Fix: Debug the logic carefully using console.log() or a debugger.
  
  
  
