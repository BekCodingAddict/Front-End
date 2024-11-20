## What is difference between functional and class component?

>[!NOTE]
>The difference between functional components and class components in React lies in their syntax, features, and how they handle state and lifecycle methods. Here's a detailed comparison:

1. Syntax and Structure
Functional Components:
 - Simple JavaScript functions that return JSX.
 - Introduced as "stateless" components but can now manage state using hooks.

Example:
```javascript
function FunctionalComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Or as an arrow function
const FunctionalComponent = ({ name }) => <h1>Hello, {name}!</h1>;
```

2.Class Components:
- ES6 classes that extend React.Component.
- Must include a render() method to return JSX.

Example:
```javascript
class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
### 2. State Management
Functional Components:
 - Use React Hooks (e.g., useState, useEffect) to manage state and lifecycle.
Example:
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Class Components:
 - Use the state object to manage state.
 - Update state with this.setState.

Example:
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### 3. Lifecycle Methods
Functional Components:
  - Use hooks like useEffect for lifecycle behaviors (e.g., componentDidMount, componentDidUpdate, componentWillUnmount).
```javascript
import React, { useEffect } from "react";

function ComponentWithEffect() {
  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty array means it runs only once (like componentDidMount)
}
```

Class Components:
 - Use built-in lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount.

```javascript
class ComponentWithEffect extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return <div>Class Component</div>;
  }
}
```
### Performance
Functional Components:
  - Tend to have better performance because they don't require the overhead of classes.
  - Optimized further with React.memo to avoid unnecessary re-renders.

Class Components:
  - Slightly heavier due to the use of this context and more complex structure.

### 5. Readability and Ease of Use   
Functional Components: 
- Simpler and easier to read.
- No need for this keyword, making the code cleaner.

Class Components:
 - More verbose due to the use of this and lifecycle methods.


### 6. Features

| Feature |	Functional Components |	Class Components |
|--|--|--|
| State	| Managed with useState hook |	Managed with this.state |
 | Lifecycle |	useEffect hook |	Lifecycle methods |
| Syntax |	Simpler, concise |	More boilerplate |
| Performance| 	Better (lighter weight) |	Slightly heavier |


### 7. Modern Preference
- Functional components are now preferred for new React applications due to their simplicity and the power of hooks.
- Class components are still supported but are becoming less common in modern React development.

### When to Use Each?
- Functional Components: Use them for almost everything in modern React development.
- Class Components: Use only in legacy codebases or when you're working on a project that already relies heavily on class components.

