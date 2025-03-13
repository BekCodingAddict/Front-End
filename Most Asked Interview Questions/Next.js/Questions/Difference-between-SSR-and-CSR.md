# Difference Between SSR (Server-Side Rendering) and CSR (Client-Side Rendering)
SSR (Server-Side Rendering) and CSR (Client-Side Rendering) are two different approaches to rendering web applications. Each has its own advantages and trade-offs.

## 1️⃣ What is SSR (Server-Side Rendering)?
SSR generates the HTML on the server for each request and sends a fully rendered page to the client. The browser displays the page immediately while JavaScript hydrates the interactive components.

### 🔹 How It Works
- A user requests a page from the server.
- The server processes the request, fetches data, and renders HTML.
- The fully rendered HTML is sent to the browser.
- The browser displays the page while React hydrates it for interactivity.

### 🔹 Example (Next.js SSR)
```js
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}
```
### 🔹 Pros & Cons
- ✅ Better SEO (HTML is pre-rendered, making it easier for search engines to crawl)
- ✅ Faster initial page load (users see content before JavaScript loads)
- ✅ Dynamic content is up-to-date (always fetches fresh data)
- ❌ Slower TTFB (Time To First Byte) (each request requires server processing)
- ❌ Higher server load (renders pages on demand, increasing server resources)

## 2️⃣ What is CSR (Client-Side Rendering)?
CSR loads a minimal HTML shell and relies on JavaScript to fetch data and render the UI in the browser. The rendering happens on the client side.

### 🔹 How It Works
- The browser loads a lightweight HTML file.
- JavaScript (React, Vue, etc.) is downloaded and executed.
- API calls fetch the required data.
- The UI is rendered dynamically in the browser.

### 🔹 Example (React with CSR)
```jsx
import { useState, useEffect } from "react";

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? data.title : "Loading..."}</div>;
}

```
### 🔹 Pros & Cons
- ✅ Fast navigation (after the initial load, switching between pages is instant)
- ✅ Lower server load (since rendering happens on the client)
- ✅ Better for interactive applications (SPAs like dashboards, social media)
- ❌ Slower initial load (blank screen until JavaScript is executed)
- ❌ SEO challenges (bots may not see content if JavaScript is required)

## 4️⃣ When to Use SSR vs CSR?
Use SSR when:
- ✅ SEO is important (e.g., blogs, news sites, e-commerce)
- ✅ The first contentful paint (FCP) speed matters
- ✅ The app has dynamic, frequently updated content

Use CSR when:
- ✅ The app is highly interactive (e.g., dashboards, social media)
- ✅ SEO is not a priority
- ✅ You need smooth client-side navigation
