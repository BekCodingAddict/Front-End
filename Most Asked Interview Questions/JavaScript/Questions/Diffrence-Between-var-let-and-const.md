### What is the difference between var, let, and const?

>[!TIP]
>The var, let, and const keywords in JavaScript are used for variable declaration, but they differ in scope, hoisting, and reassignability:

### 1.var
- Scope:
  - Function-scoped: Variables declared with var are confined to the function in which they are declared, not the block.
  - If declared outside a function, they are attached to the global object (window in browsers).

- Hoisting:
   - var declarations are hoisted to the top of their scope, meaning they are accessible before their definition, but their value will be undefined.
     
```javascript
console.log(x); // undefined
var x = 10;
```
- Reassignability:
  - var variables can be reassigned and redeclared in the same scope without error.
 
### 2.let
Scope:
- Block-scoped: Variables declared with let are confined to the block (e.g., inside {}) in which they are defined.
  
Hoisting:
- let is hoisted but not initialized, meaning you cannot access it before its declaration (throws a ReferenceError).
```javascript
console.log(y); // ReferenceError
let y = 20;
```
Reassignability:
- let variables can be reassigned but cannot be redeclared in the same scope.

### 3.const
Scope:
- Like let, const is block-scoped.
  
Hoisting:
- Like let, const is hoisted but not initialized, meaning it cannot be accessed before its declaration.
  
Reassignability:
- const variables cannot be reassigned, but this applies only to the variable itself, not the contents of objects or arrays it references.
