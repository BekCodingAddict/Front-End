## What is a Pure Component in React?

> [!NOTE]
> A Pure Component in React is a component that performs a shallow comparison of its props and state to decide whether to re-render. If neither the props nor the state have changed, it skips the rendering process, improving performance.

### Key Characteristics of a Pure Component

1.Shallow Comparison:

- React compares the previous and current props and state using a shallow comparison (i.e., it checks if the first level of values has changed).
- If there's no change, the component will not re-render.

  2.Class Component-Based:

  - A pure component is typically created by extending React.PureComponent instead of React.Component.

  3.Stateless or Stateful:

- Pure components can be either stateless or stateful.
