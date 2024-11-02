## React Server Components (RSC)

>[!TIP]
>React Server Components (RSC) are a feature that allows components to be rendered on the server rather than in the browser, providing a way to build fast, efficient web applications by reducing the amount of JavaScript sent to the client. This approach combines the advantages of server-rendering with the interactivity of client-rendered React apps, helping reduce load times, especially on complex pages.

### Key Concepts of React Server Components
- Server-Side Rendering without JavaScript on the Client:
  - With Server Components, the actual rendering logic stays on the server, so the client doesn’t need to download or execute as much JavaScript.
  - This can significantly reduce bundle sizes, as components that only need server-rendered HTML (and don’t need to be interactive) are kept off the client entirely.

### Separation of Server and Client Components:
- In a React app, you can define components as either Server Components or Client Components.
- Server Components can access databases, files, and APIs directly from the server, bypassing the need to fetch data separately and reducing latency.
- Client Components still handle interactivity and lifecycle methods and can only run in the browser.

### Better Data Fetching and Efficiency:
- Server Components allow data fetching to happen directly within the component, reducing the need for API calls from the client.
- Since they render HTML on the server, they provide faster initial load times and improve the overall user experience.

### No Hydration Needed:
- Unlike traditional SSR components, Server Components don’t need hydration (the process of attaching event listeners on the client). They’re pre-rendered on the server as static HTML and don’t require further JavaScript on the client unless interactivity is needed.

## How React Server Components Work
- Rendering: When a user requests a page, Server Components are rendered to HTML on the server and sent to the client. Any interactive Client Components that need JavaScript will still load on the client.
- Streaming: React Server Components support streaming, which allows the server to send HTML to the client in chunks as it becomes ready, further speeding up load times for large or complex pages.

### Example: Defining Server and Client Components
- In an application that uses Server Components, you can distinguish between the two types like this:
```javascript
// Server Component (no client-side JavaScript)
export default async function ProductList() {
  const products = await fetchProductsFromDatabase(); // Runs on the server
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

// Client Component (interactive, needs to run on the client)
"use client"; // Mark as a Client Component
import { useState } from "react";

export default function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);
  
  const handleClick = () => {
    addToCart(productId);
    setAdded(true);
  };
  
  return (
    <button onClick={handleClick}>
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
```
### Benefits of Using React Server Components
- Reduced JavaScript Bundles: Only the necessary Client Components are sent to the client, minimizing JavaScript usage.
- Improved Performance: Initial page loads are faster as HTML can be streamed and displayed as soon as it’s ready.
- Simpler Data Fetching: Server Components can fetch data directly from the server, eliminating the need for additional client-side data fetching logic.
- Better User Experience: By reducing client-side JavaScript and loading content faster, RSC improves the overall user experience, especially on slower networks.

### When to Use Server Components
Server Components are ideal for large, content-heavy applications where minimizing JavaScript and maximizing performance are critical. They’re especially useful for e-commerce, blog, and dashboard applications where data-heavy, non-interactive content needs to load quickly.

React Server Components are still an experimental feature, so they may not yet be stable for production in all cases. However, frameworks like Next.js are starting to integrate support for Server Components to help leverage this new approach.
