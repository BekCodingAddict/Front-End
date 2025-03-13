# What are React Hooks, and why were they introduced?

## What Are React Hooks?
React Hooks are functions that let you use state and lifecycle features inside functional components. Before Hooks, these features were only available in class components.
Some commonly used Hooks:
- useState → Manages state in functional components.
- useEffect → Handles side effects (e.g., fetching data, event listeners).
- useContext → Provides access to context values without prop drilling.
- useReducer → An alternative to useState for complex state logic.
- useRef → Maintains a mutable reference that persists across renders.
- useMemo & useCallback → Optimize performance by memoizing values/functions.

## Why Were Hooks Introduced?
React Hooks were introduced in React 16.8 to solve several problems with class components:
1. Avoid Class Component Complexity
- Managing state and lifecycle methods (componentDidMount, componentDidUpdate, etc.) in class components often led to confusing, scattered logic.
- Hooks allow for cleaner, reusable code in functional components.

2. Remove the Need for Class Components
- Before Hooks, functional components were stateless.
- Hooks allow functional components to manage state and lifecycle logic, making class components mostly unnecessary.

3. Easier Code Reusability with Custom Hooks
- Class components lacked a built-in way to reuse stateful logic.
- Hooks enable custom hooks, which help encapsulate reusable logic.

4. Better Performance & Readability
- Hooks remove unnecessary re-renders caused by class-based lifecycle methods.
- With useEffect, side effects are grouped logically instead of being spread across lifecycle methods.

## Example: Before and After Hooks
### Before Hooks (Class Component)
```js
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

```
### With Hooks (Functional Component)
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```
🚀 Much cleaner and easier to read!
