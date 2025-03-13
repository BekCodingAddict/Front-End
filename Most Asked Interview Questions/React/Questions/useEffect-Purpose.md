# What is the purpose of useEffect and how does it work?
## Purpose of useEffect
useEffect is a React Hook used for handling side effects in functional components. Side effects include things like:
- Fetching data from an API
- Subscribing to or cleaning up event listeners
- Updating the DOM directly
- Setting up timers or intervals
It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount from class components.

### How useEffect Works
useEffect takes two arguments:
```js
useEffect(effectFunction, dependencyArray);

```
- effectFunction: The function that runs when the component renders or updates.
- dependencyArray: (Optional) An array of values that determine when the effect runs

### Different Usage Patterns
1. Run on Every Render (No Dependency Array)
If you don’t provide a dependency array, the effect runs after every render.
```js
useEffect(() => {
  console.log("Component rendered or updated");
});
```
 Used rarely, as it can cause performance issues.

2. Run Only Once (On Mount)
If you provide an empty dependency array ([]), the effect runs only once when the component mounts.
```js
useEffect(() => {
  console.log("Component mounted");
}, []);

```
3. Run Only When Dependencies Change
If you pass variables in the dependency array, the effect runs only when those variables change.
```js
useEffect(() => {
  console.log(`The count is now: ${count}`);
}, [count]);

```
4. Cleanup Function (Handling Unmount or Re-runs)
If your effect involves event listeners, timers, or subscriptions, clean them up in the return function.
```js
useEffect(() => {
  const handleResize = () => {
    console.log("Window resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```
### Key Takeaways
- useEffect helps manage side effects in functional components.
- It runs after render, not during it.
- Always clean up effects when necessary.
- Optimize dependencies to avoid unnecessary re-renders.
