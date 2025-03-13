# What are Next.js middleware, and how do you use them?
### What is Next.js Middleware?
Next.js Middleware is a feature that allows you to run code before a request is completed, making it possible to modify the request/response, redirect users, or even conditionally render pages. Middleware runs on the Edge Runtime, meaning it executes before a request reaches a specific route.

### Key Features of Next.js Middleware
- Runs before the request is completed (at the edge).
- Can be used for authentication, redirects, rewrites, logging, rate-limiting, and more.
- Can modify the request (headers, URL) or response.
- Runs only on the server side (does not increase client-side JavaScript).
- Lightweight and optimized for performance.

### How to Use Middleware in Next.js
Middleware in Next.js is created by adding a file named middleware.js (or middleware.ts for TypeScript) at the root of the project or inside the src folder.

Basic Example: Redirect Unauthorized Users
Create a middleware.js file in the root of your project:
```jsx
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value; // Get token from cookies

  // If user is not authenticated and trying to access a protected route
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login
  }

  return NextResponse.next(); // Continue request as normal
}

export const config = {
  matcher: "/dashboard/:path*", // Apply middleware only to `/dashboard/*`
};
```
### How This Works
- If the user is not authenticated and tries to access /dashboard, they will be redirected to /login.
- If they have a valid token, the request continues (NextResponse.next()).

