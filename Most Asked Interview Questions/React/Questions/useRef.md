## What is useRef, and when should you use it?

### useRef – What It Is and When to Use It
useRef is a React Hook that provides a mutable reference to store values without causing re-renders. It is commonly used for:
- Accessing DOM elements (like document.getElementById in vanilla JS).
- Persisting values across renders without triggering a re-render.
- Storing previous values for comparisons.

### 1️⃣ Example: Accessing the DOM (Focus an Input)
useRef can be used to directly access a DOM element without triggering re-renders.
```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null); // Create a reference

  const handleFocus = () => {
    inputRef.current.focus(); // Directly manipulate the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```
Why use useRef instead of useState?
- Updating state (useState) causes a re-render.
- useRef does NOT trigger a re-render, making it efficient for DOM manipulation.


### 2️⃣ Example: Persisting Values Across Renders
useRef can be used to store a value that persists across renders without causing the component to update.
```js
import { useState, useRef, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Store the interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return <p>Timer: {count} seconds</p>;
}

export default Timer;

```
👉 Why use useRef?
- useRef stores the interval ID without causing re-renders.
- If we used useState, updating the interval ID would trigger unnecessary re-renders.

### 3️⃣ Example: Storing Previous State
useRef can be used to store a previous value for comparison.
```jsx
import { useState, useEffect, useRef } from "react";

function PreviousCount() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Store previous value

  useEffect(() => {
    prevCountRef.current = count; // Update after render
  });

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default PreviousCount;

```
👉 Why use useRef?
- Avoids unnecessary re-renders (unlike useState).
- Can store the previous state value across renders.


![image](https://github.com/user-attachments/assets/5b1d0e68-d2c6-40bc-b355-01b741c120cc)

