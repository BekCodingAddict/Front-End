# 📂 Folder Structure for State Management in a Full-Stack Next.js App
When using a state management library like Redux, React Query, or Context API, it's essential to structure your files properly for scalability and maintainability. Below are folder structures for different state management approaches.

## ✅ 1. Redux Toolkit Folder Structure
Best for: Global state with complex updates, caching, and predictable reducers.

```css
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 layout.tsx
 ┃ ┣ 📜 page.tsx
 ┃ ┗ 📂 tasks
 ┃   ┣ 📜 page.tsx
 ┃   ┗ 📜 TaskList.tsx
 ┣ 📂 store
 ┃ ┣ 📜 store.ts
 ┃ ┣ 📂 features
 ┃ ┃ ┗ 📂 tasks
 ┃ ┃   ┣ 📜 taskSlice.ts
 ┃ ┃   ┗ 📜 taskSelectors.ts
 ┣ 📂 components
 ┃ ┗ 📜 TaskItem.tsx
 ┣ 📂 hooks
 ┃ ┗ 📜 useTasks.ts
 ┣ 📂 types
 ┃ ┗ 📜 task.ts
 ┗ 📂 utils
    ┗ 📜 fetcher.ts
```
### 🛠 Key Files in Redux
- store.ts → Configures Redux store
- taskSlice.ts → Contains reducers & actions
- taskSelectors.ts → Selectors for optimized state access
- useTasks.ts → Custom hook for Redux logic
- fetcher.ts → API utilities


### 🔥 Redux Example (taskSlice.ts)
```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;

```
## ✅ 2. React Query Folder Structure
Best for: Server state management (data fetching, caching, optimistic updates).
```css
📦 src
 ┣ 📂 app
 ┃ ┣ 📜 layout.tsx
 ┃ ┣ 📜 page.tsx
 ┃ ┗ 📂 tasks
 ┃   ┣ 📜 page.tsx
 ┃   ┗ 📜 TaskList.tsx
 ┣ 📂 queries
 ┃ ┣ 📜 useTasks.ts
 ┃ ┗ 📜 useTaskMutation.ts
 ┣ 📂 components
 ┃ ┗ 📜 TaskItem.tsx
 ┣ 📂 api
 ┃ ┗ 📜 taskApi.ts
 ┣ 📂 utils
 ┃ ┗ 📜 fetcher.ts
 ┗ 📂 types
    ┗ 📜 task.ts

```
### 🔥 React Query Example (useTasks.ts)
```ts
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/api/taskApi";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};

```
## ✅ 3. Context API Folder Structure
Best for: Simple global state (themes, auth, preferences).
```css
📦 src
 ┣ 📂 app
 ┣ 📂 context
 ┃ ┣ 📜 TaskContext.tsx
 ┃ ┗ 📜 AuthContext.tsx
 ┣ 📂 hooks
 ┃ ┣ 📜 useTasks.ts
 ┃ ┗ 📜 useAuth.ts
 ┣ 📂 components
 ┃ ┗ 📜 TaskItem.tsx
 ┣ 📂 types
 ┃ ┗ 📜 task.ts
 ┗ 📂 utils
    ┗ 📜 fetcher.ts
```
### 🔥 Context API Example (TaskContext.tsx)
```tsx
import { createContext, useState, ReactNode } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}
```

## 🏆 Choosing the Right State Management Library
![image](https://github.com/user-attachments/assets/537b5afd-73a6-43c3-bca9-abe7ab90b4a0)

## 🚀 Final Thoughts
Use Redux if you need a predictable, centralized state.
Use React Query if you're mostly dealing with server state & API caching.
Use Context API for lightweight, global UI state like themes or authentication.
