# Difference Between Functional Programming and Object-Oriented Programming
Functional Programming (FP) and Object-Oriented Programming (OOP) are two fundamental programming paradigms, each with its own principles, advantages, and use cases.

## 1️⃣ Functional Programming (FP)
### 🔹 Key Concepts
- Immutability: Data is not modified; instead, new data structures are created.
- Pure Functions: Functions always return the same output for the same input and have no side effects.
- First-Class & Higher-Order Functions: Functions can be assigned to variables, passed as arguments, and returned from other functions.
- Declarative Approach: Focuses on "what to do" rather than "how to do it."
- Composability: Functions are combined to build more complex logic.
🔹 Example in JavaScript
```js
// Pure function (does not modify input)
const add = (a, b) => a + b;

// Higher-order function (takes a function as an argument)
const applyOperation = (fn, a, b) => fn(a, b);

console.log(applyOperation(add, 5, 3)); // Output: 8

```
### 🔹 Pros & Cons
- ✅ Easier debugging (no side effects)
- ✅ Better scalability & parallel execution (immutable state)
- ❌ Can be harder to understand for developers used to OOP
- ❌ May require more memory due to immutability

## 2️⃣ Object-Oriented Programming (OOP)
### 🔹 Key Concepts
- Encapsulation: Data and behavior are bundled into objects.
- Abstraction: Hides complexity and exposes only necessary parts.
- Inheritance: Objects can inherit properties and methods from other objects.
- Polymorphism: Different objects can be treated as instances of the same class.
### Example
```jsx
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```
### 🔹 Pros & Cons
- ✅ Easy to organize and model real-world entities
- ✅ Code reuse via inheritance and polymorphism
- ❌ More complex and rigid structure
- ❌ Can lead to performance issues (e.g., deep inheritance trees)

## 4️⃣ When to Use FP vs OOP?
- Use FP when: You need predictable, parallel, and scalable code (e.g., data processing, React's functional components).
- Use OOP when: You need structured, reusable, and stateful objects (e.g., game development, UI components in OOP frameworks).

