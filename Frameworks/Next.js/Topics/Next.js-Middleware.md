## What is Middleware?

![Middleware](https://github.com/user-attachments/assets/2e4a85f7-e783-4d4a-9f0e-f35016081174)

>[!TIP]
>In Next.js, Middleware refers to a powerful feature that allows you to execute code before a request is completed. It sits between the user's request and the server's response, enabling you to handle tasks like authentication, redirects, logging, and modifying requests or responses dynamically.
>Middleware runs on the Edge Runtime, meaning it executes on the server-side but is optimized for low-latency operations and scales globally. It's useful for creating high-performance apps where dynamic decision-making is required at the request level.


### How Middleware Works
- Middleware functions are stored in a middleware.js file located in the root of your application or within specific directories.
- They are executed before the request reaches a page or API route.

### Key Features
- Runs on the Edge Runtime (faster than traditional server-side).
- Can modify incoming requests and responses.
- Useful for adding custom logic like authorization or locale redirection.

### Example Use Cases
1.Authentication and Authorization
- Redirect users to a login page if they are not authenticated.

2.Geo-Based Redirection
- Serve content based on a user's location (e.g., redirecting users from the UK to a UK-specific site).
  
5.A/B Testing
- Dynamically show different versions of a page to different users.

4.Custom Headers
- Add or modify request/response headers dynamically.

### How to Implement Middleware
Create a middleware.js file in your Next.js project root:
```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Example: Redirect unauthenticated users
  const isAuthenticated = req.cookies.get('authToken');
  if (!isAuthenticated) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Proceed to the requested page
}
```

### Middleware Configuration
You can configure Middleware to run for specific routes by adding a matcher in your middleware.js:
```javascript
export const config = {
  matcher: ['/protected/:path*', '/dashboard/:path*'], // Apply to specific routes
};
```
### Limitations
- Middleware is read-only for the body of requests and responses; you can only modify headers or query parameters.
- Not suitable for heavy computational tasks as it needs to run efficiently at the edge.

### When to Use Middleware
- When you need to dynamically handle requests based on conditions.
- For operations that should happen before rendering a page or calling an API route.
- In global features like user authentication or localization.
