## What is a Pure Component in React?
>[!NOTE]
>A Pure Component in React is a component that performs a shallow comparison of its props and state to decide whether to re-render. If neither the props nor the state have changed, it skips the rendering process, improving performance.

### Key Characteristics of a Pure Component
1.Shallow Comparison:Shallow Comparison:
 - React compares the previous and current props and state using a shallow comparison (i.e., it checks if the first level of values has changed).
 - If there's no change, the component will not re-render.
   
2.Class Component-Based:
  - A pure component is typically created by extending React.PureComponent instead of React.Component.
    
3.Stateless or Stateful:
  - Pure components can be either stateless or stateful.

### How is it Different from React.Component?
- React.Component re-renders by default whenever its parent component re-renders, even if the props or state haven’t changed.
- React.PureComponent re-renders only if there are actual changes to props or state.

### How to Use PureComponent?
Example 1: Using PureComponent
```javascript
import React, { PureComponent } from "react";

class MyComponent extends PureComponent {
  render() {
    console.log("Rendering...");
    return <div>{this.props.value}</div>;
  }
}

// Parent Component
class ParentComponent extends React.Component {
  state = { value: "Hello" };

  updateValue = () => {
    this.setState({ value: "Hello" }); // Same value, no re-render in PureComponent
  };

  render() {
    return (
      <div>
        <MyComponent value={this.state.value} />
        <button onClick={this.updateValue}>Update Value</button>
      </div>
    );
  }
}

export default ParentComponent;
```
In this example:
 - If you click the button, updateValue sets the same state value.
 - MyComponent won’t re-render because PureComponent detects that the props (value) haven’t changed.

### Using Functional Components with React.memo
In functional components, you can achieve similar behavior as React.PureComponent by using React.memo.

Example 2: Using React.memo
```javascript
import React from "react";

const MyComponent = React.memo(({ value }) => {
  console.log("Rendering...");
  return <div>{value}</div>;
});

// Parent Component
const ParentComponent = () => {
  const [value, setValue] = React.useState("Hello");

  const updateValue = () => {
    setValue("Hello"); // Same value, no re-render in React.memo
  };

  return (
    <div>
      <MyComponent value={value} />
      <button onClick={updateValue}>Update Value</button>
    </div>
  );
};

export default ParentComponent;
```

### When to Use Pure Components?
1.Performance Optimization
  - Pure components are useful when rendering is expensive and you want to avoid unnecessary renders.

2.Static or Immutable Data
  - Best used when props and state are simple, static, or immutable.

### Limitations of PureComponent
- Deep Comparison Not Performed:
  - Only performs a shallow comparison, so changes to nested objects or arrays might not trigger re-renders.
```javascript
this.setState({ data: { key: "value" } }); // Won't re-render if reference is unchanged
```
Solution: Use immutable data structures or manually trigger updates.

- Avoid Side Effects:
  - Pure components should not rely on side effects for rendering.

