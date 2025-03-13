# How do you handle global state in a large React application?
### How to Handle Global State in a Large React Application
In a large-scale React application, managing global state efficiently is crucial for performance, maintainability, and scalability. The best approach depends on what type of state you need to manage.

## 1️⃣ Understanding Different Types of State
Before choosing a state management solution, it's important to categorize your state:
![image](https://github.com/user-attachments/assets/c010fa88-d5f4-4507-94cb-27b6ef8f251e)

## 2️⃣ Choosing the Right Global State Management Solution
🔹 Context API – Simple Global State
👉 Best for lightweight UI state (e.g., theme, authentication).

✔ Good for small-to-medium apps
❌ Causes unnecessary re-renders if deeply nested

Example: Managing Theme with Context API
```jsx
import { createContext, useState, useContext } from "react";

// Create Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook
export function useTheme() {
  return useContext(ThemeContext);
}

```
👉 When to use Context API?

✅ Small applications
✅ Simple state like theme, authentication, user preferences

## 🔹 Redux Toolkit – Centralized & Scalable State Management
👉 Best for managing complex global state (e.g., shopping cart, user authentication).

✔ Predictable state updates
✔ Middleware support (async actions with Thunks, Saga)
❌ Requires boilerplate (reducers, actions, store)

Example: Managing Authentication with Redux Toolkit
```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// Create a slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login: (state, action) => { state.user = action.payload; },
    logout: (state) => { state.user = null; },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Configure store
const store = configureStore({ reducer: authSlice.reducer });

// Authentication Component
function AuthStatus() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>User: {user ? user.name : "Not logged in"}</p>
      <button onClick={() => dispatch(login({ name: "John Doe" }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

// Wrap App in Provider
export function App() {
  return (
    <Provider store={store}>
      <AuthStatus />
    </Provider>
  );
}
```
 When to use Redux Toolkit?

✅ Large-scale applications
✅ Complex state logic (e.g., authentication, shopping cart, notifications)
✅ When state changes need to be predictable

## 🔹 React Query – Managing API Data (Server State)
👉 Best for fetching, caching, and synchronizing server data.

✔ Automatic caching & background refetching
✔ Optimized for performance (pagination, stale data handling)
❌ Not for UI state (theme, auth, etc.)

Example: Fetching User Data with React Query
```jsx
import { useQuery } from "@tanstack/react-query";

function UsersList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

```
👉 When to use React Query?

✅ Fetching and caching API data
✅ Handling pagination, real-time updates, and background sync
✅ Avoiding global state for API responses (e.g., replacing Redux for async data)

## 🔹 Zustand – Simple Alternative to Redux
👉 Best for managing global state with minimal boilerplate

✔ Easier to use than Redux
✔ No unnecessary re-renders
❌ Less powerful than Redux for complex apps

Example: Global State with Zustand
```jsx
import { create } from "zustand";

// Define store
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;

```
👉 When to use Zustand?

✅ When Redux feels like overkill
✅ Small-to-medium applications with global state

## 3️⃣ Best Approach Based on App Size
- Small App->Context API, Zustand
- Medium App->Redux Toolkit (for complex state), Zustand (simpler)
- Large App->Redux Toolkit, React Query (for async data)



