## What is the difference between useMemo and useCallback?
### Difference Between useMemo and useCallback
Both useMemo and useCallback are React Hooks used for performance optimization by memoizing values and functions, respectively.
- useMemo->Memoizes the return value of a function to avoid re-computation.
- useCallback->Memoizes the function itself to prevent unnecessary re-creations.

### 1️⃣ useMemo – Memoizing Computed Values
👉 Use when you need to avoid re-computation of expensive functions.
Example: Avoiding Expensive Calculations
```jsx
import { useState, useMemo } from "react";

function ExpensiveComponent({ count }) {
  // Expensive calculation function
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // Only re-computes if `count` changes

  return <p>Computed Value: {expensiveValue}</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;

```
Why Use useMemo?
- Without useMemo, the expensiveValue would recompute on every render.
- With useMemo, it only recalculates when count changes, reducing performance overhead.

### 2️⃣ useCallback – Memoizing Functions
👉 Use when passing functions as props to avoid unnecessary re-creations.
Example: Preventing Unnecessary Re-Renders
```jsx
import { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button Rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is re-created on every render
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Memoized and won't be recreated

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
```

Why Use useCallback?
- Without useCallback, handleClick is recreated on every render, causing Button to unnecessarily re-render.
- With useCallback, the function reference remains the same, preventing re-renders

## 💡 Rule of Thumb
- If you return a value → Use useMemo ✅
- If you return a function → Use useCallback ✅
