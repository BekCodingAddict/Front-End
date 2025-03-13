# How does useReducer differ from useState?
### Difference Between useReducer and useState
Both useReducer and useState are React Hooks for managing state, but they differ in complexity and use cases.

|Hook	 | Best For	 | How It Works |
|--|--|--|
| useState	| Simple state updates	| Directly updates state with setState(newValue) | 
| useReducer | 	Complex state logic, multiple state transitions	| Uses a reducer function to update state based on an action |

### 1️⃣ useState – Simple State Management
👉 Use when state logic is straightforward (e.g., toggling, counters, form inputs).

Example: Counter with useState
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

export default Counter;

```
Why use useState?
- Easy to use and suitable for simple state updates.
- Directly updates state using setState(newValue).

### 2️⃣ useReducer – Complex State Logic
👉 Use when state has multiple possible actions or involves complex updates.

Example: Counter with useReducer
```jsx
import { useReducer } from "react";

// 1. Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  // 2. Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```
### Why use useReducer?
- Better for managing complex state logic (e.g., multiple actions, state transitions).
- Uses a reducer function (state, action → newState) to handle updates.
- Improves maintainability when state logic grows.

