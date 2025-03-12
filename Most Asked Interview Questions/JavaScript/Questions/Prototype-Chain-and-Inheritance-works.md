# Explain the prototype chain and how inheritance works in JavaScript.
In JavaScript, inheritance is implemented using the prototype chain. Unlike classical inheritance (used in languages like Java or C++), JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Here's a detailed explanation of the prototype chain and how inheritance works in JavaScript:

## 1. Prototypes
Every JavaScript object has an internal property called [[Prototype]] (accessible via __proto__ in some environments or Object.getPrototypeOf()). This property points to another object, which is its prototype. When you try to access a property or method on an object, JavaScript will look for it on the object itself. If it doesn't find it, it will traverse up the prototype chain until it finds the property or reaches the end of the chain (where [[Prototype]] is null).

## 2. The Prototype Chain
The prototype chain is a series of linked objects, where each object's prototype points to another object. This chain allows objects to inherit properties and methods from their prototypes.

### Example
```js
const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent); // child's prototype is parent
child.greet(); // "Hello from parent!"
```
Here:
- child doesn't have a greet method, so JavaScript looks up the prototype chain and finds it in parent.

## 3. Constructor Functions and prototype
When you create an object using a constructor function, the object's [[Prototype]] is set to the constructor's prototype property.

### Example:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // "Hello, my name is Alice"
```
Here:
- alice is an instance of Person.
- alice.__proto__ points to Person.prototype.
- Person.prototype contains the greet method, which alice can access.

## 4. Inheritance Using Constructor Functions
To implement inheritance, you can set the prototype of a child constructor function to an instance of the parent constructor function.
### Example:
```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Student(name, major) {
  Person.call(this, name); // Call the parent constructor
  this.major = major;
}

// Set Student's prototype to an instance of Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // Fix the constructor reference

Student.prototype.study = function () {
  console.log(`${this.name} is studying ${this.major}`);
};

const bob = new Student("Bob", "Computer Science");
bob.greet(); // "Hello, my name is Bob"
bob.study(); // "Bob is studying Computer Science"
```
Here:
- Student inherits from Person.
- bob can access both greet (from Person) and study (from Student).

## 5. Class Syntax (ES6)
ES6 introduced the class syntax, which is syntactic sugar over the prototype-based inheritance model. Under the hood, it still uses prototypes.

### Example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, major) {
    super(name); // Call the parent constructor
    this.major = major;
  }

  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

const alice = new Student("Alice", "Mathematics");
alice.greet(); // "Hello, my name is Alice"
alice.study(); // "Alice is studying Mathematics"
```
Here: 
- extends sets up the prototype chain.
- super calls the parent constructor.
