# What is the difference between shallow copy and deep copy?
In JavaScript, shallow copy and deep copy refer to how objects and arrays are duplicated. The key difference lies in how nested objects or arrays are handled during the copying process. Here's a detailed explanation:

## Shallow Copy
A shallow copy creates a new object or array, but it only copies the top-level properties or elements. If the original object contains nested objects or arrays, the shallow copy will reference the same nested objects or arrays as the original. This means changes to nested structures in the copy will affect the original, and vice versa.

### How to Create a Shallow Copy:
1. Using Object.assign():
   ```js
   const original = { a: 1, b: { c: 2 } };
   const shallowCopy = Object.assign({}, original);
   ```
2. Using the Spread Operator (...):
   ```js
   const original = { a: 1, b: { c: 2 } };
   const shallowCopy = { ...original };
   ```
3. For Arrays:
- Using slice():
  - ```js
    const original = [1, 2, [3, 4]];
    const shallowCopy = original.slice();
    ```
- Using the Spread Operator:
  - ```js
    const original = [1, 2, [3, 4]];
    const shallowCopy = [...original];
    ```
### Example
```js

const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

shallowCopy.a = 10; // Changes only the copy
shallowCopy.b.c = 20; // Changes both the copy and the original

console.log(original); // { a: 1, b: { c: 20 } }
console.log(shallowCopy); // { a: 10, b: { c: 20 } }
```

## Deep Copy
A deep copy creates a new object or array and recursively copies all nested objects or arrays as well. This means the copy is completely independent of the original, and changes to nested structures in the copy will not affect the original, and vice versa.

### How to Create a Deep Copy:
1. Using JSON.parse(JSON.stringify()):
- This method works for objects and arrays containing only serializable data (no functions, undefined, or special objects like Date).
```js
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
```
2. Using a Library:
- Libraries like Lodash provide a cloneDeep function for deep copying.
```js
const _ = require('lodash');
const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);
```
3. Manual Recursive Function:
- Write a custom function to recursively copy nested objects and arrays.

### Example
```js
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.a = 10; // Changes only the copy
deepCopy.b.c = 20; // Changes only the copy

console.log(original); // { a: 1, b: { c: 2 } }
console.log(deepCopy); // { a: 10, b: { c: 20 } }
```
![image](https://github.com/user-attachments/assets/11eb4443-4f66-4b66-9c47-8a6ec451f91d)

## When to Use Shallow Copy vs. Deep Copy
- Use a shallow copy when:
  - The object or array is flat (no nested structures).
  - You want to share references to nested objects or arrays.
  - Performance is a concern.

- Use a deep copy when:
  - The object or array contains nested structures.
  - You need a completely independent copy.
  - You want to avoid unintended side effects from shared references.
 
## Limitations of Deep Copy
1. JSON.parse(JSON.stringify()):
- Cannot copy functions, undefined, or special objects like Date, RegExp, etc.
- Circular references will cause errors.

2. Custom Recursive Functions:
- Must handle edge cases like circular references and special objects.

3. Libraries:

- Libraries like Lodash handle most edge cases but add external dependencies.


