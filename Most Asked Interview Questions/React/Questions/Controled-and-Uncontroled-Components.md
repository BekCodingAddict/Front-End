# What are controlled and uncontrolled components in React?
>[!NOTE]
>In React, controlled and uncontrolled components refer to how form elements (like inputs, textareas, and selects) are managed. The key difference lies in how the form data is handled and where the state is stored.

## 1. Controlled Components
In a controlled component, the form data is managed by the React component's state. The value of the form element is controlled by React, and changes are handled via event handlers.

### Key Characteristics:
- The component's state is the single source of truth for the form data.
- Changes to the form element are handled by React's onChange event handler.
- The value of the form element is explicitly set using the value prop.

Examnple
```js
import React, { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
}
```
Explanation:
- The inputValue state variable holds the current value of the input.
- The handleChange function updates the state whenever the input value changes.
- The value prop of the input is set to inputValue, making it a controlled component.

Advantages:
- Full control over form data and validation.
- Easier to implement complex logic (e.g., dynamic form updates, conditional rendering).

## 2. Uncontrolled Components
In an uncontrolled component, the form data is managed by the DOM itself, rather than by React. The form elements maintain their own state, and you access their values using refs.

### Key Characteristics:
- The DOM is the source of truth for the form data.
- Changes to the form element are handled by the DOM, not React.
- The value of the form element is accessed using a ref.

Example:
```js
import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Explanation:
- The inputRef is created using the useRef hook.
- The ref attribute of the input is set to inputRef, allowing direct access to the DOM element.
- The handleSubmit function accesses the input's value using inputRef.current.value.

Advantages:
- Simpler to implement for basic forms.
- Less boilerplate code compared to controlled components.

![image](https://github.com/user-attachments/assets/0d02332d-15c9-4d78-adc0-5b5d083c2d12)


## 4. When to Use Controlled vs. Uncontrolled Components
Use Controlled Components:
- When you need full control over form data and validation.
- When the form logic is complex (e.g., dynamic fields, conditional rendering).
- When you want to integrate form data with other parts of your React state.

Use Uncontrolled Components:
- When the form is simple and doesn't require much logic.
- When you need to integrate with non-React code or libraries.
- When you want to avoid unnecessary re-renders.

##  Conclusion
- Controlled components are ideal for complex forms where you need full control over the form data and validation.
- Uncontrolled components are simpler and better suited for basic forms or when integrating with non-React code.
