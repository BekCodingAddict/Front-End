# How do you optimize React performance?
Optimizing React performance is crucial for delivering a fast and smooth user experience. Below are key techniques and best practices to optimize React performance:

### 1. Use React.memo

- What it does: React.memo is a higher-order component that memoizes the result of a functional component. It prevents unnecessary re-renders by shallowly comparing props.
- When to use it: Use React.memo for components that depend on props and don’t need to re-render when the props don't change.

```jsx
const MyComponent = React.memo(({ name }) => {
  console.log("Rendering: ", name);
  return <div>{name}</div>;
});

```

### 2. Use useMemo and useCallback Hooks
- useMemo: Memorizes the result of an expensive function call and only recomputes it when dependencies change.
- useCallback: Memorizes a function itself to prevent it from being recreated on every render.
Example (useMemo):
```jsx
const expensiveComputation = useMemo(() => {
  return computeSomethingExpensive(data);
}, [data]);

```
Example (useCallback):
```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

```

### 3. Code Splitting
- What it does: Code splitting breaks your app into smaller bundles that can be loaded on demand, reducing the initial loading time.
- How to implement: Use dynamic imports with React.lazy() and Suspense to load components only when they are needed.

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

```
### 4. Avoid Unnecessary Re-renders
- Avoid unnecessary state changes: Re-renders happen every time state or props change, so minimize updates by reducing the number of state changes.
- Use key properly in lists: React uses the key prop to identify and track elements efficiently. Make sure the keys are unique and consistent to avoid unnecessary re-renders.

### 5. Batch State Updates
- What it does: React batches multiple state updates together in one re-render.
- How to use it: In React 18+, React automatically batches state updates inside promises, setTimeout, etc. However, in earlier versions, you should use unstable_batchedUpdates if necessary.

### 7. Lazy Load Images
- What it does: Lazy loading defers loading images or media files until they are needed (i.e., when they are in the viewport).
- How to use: You can use the loading="lazy" attribute on <img> elements or use a library like react-lazyload.
```jsx
<img src="image.jpg" loading="lazy" alt="Lazy loaded" />
```

### 8. Optimize Context API Usage
- What it does: React Context can trigger re-renders of all consuming components when the value changes, which can degrade performance.
- How to optimize:
  - Split context into smaller providers if necessary.
  - Avoid placing large objects or arrays directly in context values.

### 9. Virtualization for Large Lists
- What it does: Virtualization renders only the visible portion of a large list, significantly improving performance.
- How to implement: Libraries like react-window and react-virtualized help to render only the visible items in a list.
```jsx
import { FixedSizeList as List } from 'react-window';

function MyList({ items }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
}

```

### 0. Optimize Reconciliation with React.PureComponent
- What it does: PureComponent is a class component that only re-renders when its props or state change. It implements shouldComponentUpdate with a shallow comparison of props and state.
- When to use: Use PureComponent if your component’s state or props don’t change frequently.

```jsx
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.data}</div>;
  }
}

```

### 11. Reduce Component Hierarchy
- What it does: Deep component hierarchies can lead to unnecessary re-renders due to the way React reconciles changes. Flatten your component tree to optimize re-renders.
- How to achieve: Break down components into smaller reusable ones, and avoid unnecessary nesting.

### 12. Optimize Rendering with Suspense and Concurrent Rendering
- What it does: React Suspense allows you to control the loading state of components and async data fetching. With Concurrent Rendering, React can pause and resume work, prioritizing updates that matter most.
- How to use: Suspense is useful for wrapping components that fetch data asynchronously.

```jsx
const SomeComponent = React.lazy(() => import('./SomeComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <SomeComponent />
</Suspense>

```


