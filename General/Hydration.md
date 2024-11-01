## Hydration

>[!TIP]
>Hydration is a process in web development, particularly in frameworks like React, where the client-side JavaScript "re-activates" a server-rendered HTML page by attaching event listeners and restoring interactivity. It’s crucial for Server-Side Rendering (SSR) and Static Site Generation (SSG), where an initial HTML page is sent to the client, and JavaScript then takes over to make it interactive.

### How Hydration Works
- Server-side or statically generated HTML: When a page is loaded, it initially comes as fully-rendered HTML from the server.
- JavaScript reactivation: The client downloads JavaScript for the page, and React (or another framework) compares the pre-rendered HTML to its own virtual DOM.
- Adding interactivity: After the DOM structure is confirmed, React attaches event listeners, enabling components to be interactive, such as handling clicks, inputs, and state changes.

### Why Hydration Matters
- Improves performance: With SSR or SSG, users see the content faster, since HTML is already there, and hydration happens quietly in the background to make it interactive.
- SEO benefits: Pre-rendered HTML allows search engines to read content more easily, so hydration allows for SEO-friendly pages that are also interactive.
- Avoids re-rendering: Hydration prevents the page from fully re-rendering on the client, reusing the existing HTML instead, which helps with performance.

### Example in React
- In frameworks like Next.js, which supports SSR and SSG, hydration happens automatically:
```javascript
// pages/index.js (Next.js)
export default function Home({ data }) {
  return (
    <div>
      <h1>{data.title}</h1> 
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
}

// The server renders <h1>{data.title}</h1> as plain HTML, 
// and hydration attaches the click event to the button after loading.

```
In this example, users can see the <h1> content before interactivity (like the button click) is hydrated.
