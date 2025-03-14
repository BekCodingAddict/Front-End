# What are React Server Components, and how do they work in Next.js?

### React Server Components (RSC) in Next.js
React Server Components (RSC) are a key feature in Next.js App Router (introduced in Next.js 13+). They enable server-side rendering of React components without sending JavaScript to the client, improving performance.

### 1. What Are React Server Components?
- Run only on the server (not in the browser).
- Fetch data before rendering, reducing client-side work.
- Do not include JavaScript in the client bundle, making them very lightweight.
- Can be mixed with Client Components when needed.

### 2. Key Benefits of React Server Components
- ✅ No Client-Side JavaScript → Faster page loads.
- ✅ Improved Performance → Reduces network requests & hydration time.
- ✅ Direct Access to Database & APIs → No need for useEffect().
- ✅ Smaller Bundle Sizes → Reduces client-side JavaScript load.


### 3. How React Server Components Work in Next.js
In Next.js, components are Server Components by default when using the App Router (app/ directory).

🔥 Example: Simple Server Component
```js
// This file is in app/page.js or app/page.tsx
export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) => res.json());

  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
- ✅ Runs on the server → No JavaScript is sent to the client.
- ✅ Fetches data before rendering → No need for useEffect()

![image](https://github.com/user-attachments/assets/112cc00e-a726-417f-af58-25318cdec5b2)


## 5. Client Components in Next.js
If you need state, event handlers, or browser APIs, you must use a Client Component.

🔥 Example: Making a Component a Client Component
```js
"use client"; // Enables Client Component behavior
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
```
- ✅ Uses useState() → Must be a Client Component.
- ✅ "use client" directive tells Next.js to send JavaScript to the browser.

## 6. Combining Server & Client Components (Hybrid Approach)
You can mix Server and Client Components for optimal performance.

🔥 Example: Server Component with a Client Component Inside
```js
// app/page.js (Server Component)
import Counter from "./Counter"; // Import a Client Component

export default async function Page() {
  const data = await fetch("https://api.example.com/data").then((res) => res.json());

  return (
    <div>
      <h1>Server Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Counter /> {/* Client Component inside a Server Component */}
    </div>
  );
}
```
- ✅ The page loads fast (Server Component).
- ✅ The Counter runs on the client (Client Component).

### 7. Fetching Data in Server Components
(A) Fetching from an API
```js
export default async function Page() {
  const data = await fetch("https://api.example.com/posts", { cache: "no-store" }).then(res => res.json());

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

```
🔹 cache: "no-store" → Ensures fresh data on every request.
### (B) Fetching from a Database (MySQL)
```js
import { db } from "@/lib/db"; // Your database connection

export default async function Page() {
  const posts = await db.post.findMany(); // Fetch from DB

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

```
- ✅ No need for an API route → Direct database access.
- ✅ Faster than fetching via API → Less network overhead.



![image](https://github.com/user-attachments/assets/ecdbef1d-7023-4e77-a2bc-7cbb5fbefe80)

