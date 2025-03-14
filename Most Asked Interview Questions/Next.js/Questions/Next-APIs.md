# How do Next.js API routes work?

### Next.js API Routes: Overview
Next.js API routes allow you to create server-side endpoints within your Next.js application. These routes work as serverless functions, handling requests without the need for a dedicated backend server. They are useful for handling form submissions, database interactions, authentication, and more.

- API routes are stored inside the pages/api/ directory.
- Each file inside pages/api/ maps to an endpoint (/api/...).
- API routes run only on the server, meaning they do not increase client-side JavaScript bundle size.
- They support middleware, authentication, and database connections.

### 1. Creating a Simple API Route
You can create an API route by adding a file inside pages/api/.

📌 Example: Create pages/api/hello.js
```js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, Next.js API!" });
}

```
How It Works:
When you visit /api/hello, the server returns a JSON response
```json
{ "message": "Hello, Next.js API!" }
```
The function receives two parameters:
- req (request object) → Contains information about the incoming request.
- res (response object) → Used to send back a response.

### 2. Handling HTTP Methods (GET, POST, PUT, DELETE)
📌 Example: Handling multiple HTTP methods in pages/api/user.js
```js
export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Fetching user data" });
  } 
  else if (req.method === "POST") {
    return res.status(201).json({ message: "User created successfully" });
  } 
  else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
```
How It Works:
If a GET request is made to /api/user, it returns
```json
{ "message": "Fetching user data" }
```
If a POST request is made to /api/user, it returns:
```js
{ "message": "User created successfully" }
```
If another method (like DELETE) is used, it returns a 405 Method Not Allowed error

### 3. Accessing Query Parameters
📌 Example: API route with dynamic query parameters in pages/api/user.js
```js
export default function handler(req, res) {
  const { id } = req.query; // Extract query parameters
  res.status(200).json({ message: `Fetching data for user ${id}` });
}
```
📌 Usage:

Requesting /api/user?id=123 returns:
```json
{ "message": "Fetching data for user 123" }

```

### 4. Using Dynamic API Routes
📌 Example: Create a dynamic API route in pages/api/user/[id].js
```js
export default function handler(req, res) {
  const { id } = req.query; // Extract dynamic route parameter
  res.status(200).json({ message: `User ID: ${id}` });
}
```
📌 Usage:
- Requesting /api/user/42 returns
```json
{ "message": "User ID: 42" }
```

### 5. Connecting API Routes to a Database
API routes can interact with databases like MySQL, PostgreSQL, MongoDB, Firebase, etc.

📌 Example: Fetch data from a database (MongoDB) in pages/api/products.js
```js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const products = await db.collection("products").find().toArray();
  client.close();

  res.status(200).json({ products });
}

```
📌 Environment Variables (.env.local):
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```
### 6. Using API Routes with Middleware
API routes can be combined with authentication middleware like JSON Web Tokens (JWT) or session-based authentication.

📌 Example: Protect an API route (pages/api/protected.js)
```js
import { verifyToken } from "../../utils/auth";

export default function handler(req, res) {
  const user = verifyToken(req);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ message: "Welcome, authenticated user!" });
}
```

### 7. Error Handling in API Routes
Always return proper error responses.

📌 Example: Handling Errors in pages/api/data.js
```js
export default function handler(req, res) {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

```
### 8. Calling API Routes from the Frontend
You can call Next.js API routes using fetch or axios inside React components.

📌 Example: Fetch Data in a Component
```js
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return <div>{data ? data : "Loading..."}</div>;
}
```
### 9. API Route Caching & Performance
Next.js API routes do not have built-in caching, but you can optimize them by:

Using Cache-Control headers:
```js
res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
```
Using a database cache (e.g., Redis).
Offloading API calls to serverless functions like Vercel Edge Functions

### 10. Limitations of API Routes
- No long-running processes: API routes are stateless and short-lived (not ideal for WebSockets).
- No native rate limiting: You must implement rate limiting manually (e.g., using middleware).
- Edge Functions vs API Routes: API routes run as Node.js functions, whereas Edge Functions run closer to the user and are optimized for speed.

