## What is ContextAPI in React

>[!NOTE]
>The Context API is a feature in React that allows you to share data (or "state") across multiple components without having to pass props manually through every level of the component tree.

### Why Use Context API?
When you have deeply nested components and need to share state or props across multiple levels, passing props manually can become cumbersome, a problem known as "prop drilling". The Context API solves this by providing a way to access data directly from the component tree.

### How Does the Context API Work?
The Context API works through three main components:
- Create a Context:
  - You use React.createContext() to create a context object.
  - This object comes with two components:
    - Provider: To provide data to components.
    - Consumer or useContext: To consume the provided data.
```javascript
const MyContext = React.createContext();
```
### Provider:
- The Provider component wraps the part of the component tree where you want the context to be accessible.
- It accepts a value prop that holds the data to be shared.

```javascript
<MyContext.Provider value={sharedData}>
    <ChildComponent />
</MyContext.Provider>

```

### Consumer or useContext Hook:
- Components inside the provider can access the context's value using:
  - The Consumer component.
  - The useContext hook (recommended for modern React)
```javascript
<MyContext.Consumer>
    {value => <div>{value}</div>}
</MyContext.Consumer>
```
Using useContext Hook:
```javascript
const value = React.useContext(MyContext);
```

### Example: Using Context API
ere’s an example of sharing a theme across a component tree:
```javascript
import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide the context value
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  // 3. Consume the context value
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
};

export default App;
```

### Benefits of Context API
1. Avoid Prop Drilling:
 - Makes the code cleaner and reduces unnecessary prop passing.
2. Scalability:
- Ideal for managing global state in small to medium applications.
3. Built-in Solution:
- No need for third-party state management libraries like Redux if your app's needs are simple.

### When to Use Context API
- Sharing data like theme, authentication state, or user preferences.
- When you need a simpler alternative to Redux or other state management tools for small projects.

### Limitations of Context API
1. Re-rendering Issues:
  - When the context value changes, all components consuming the context will re-render.
  - Solution: Use memoization or split the context into smaller, more specific contexts.
3. Not Suitable for All Scenarios:
 - For very complex state management, tools like Redux or Zustand might be more appropriate.
