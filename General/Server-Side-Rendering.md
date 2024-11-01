## Server-Side Rendering(SSR)

>[!TIP]
>With server-side rendering, the server generates the entire HTML page for a user’s request. When a user visits the website, the server sends a fully-rendered HTML page, which is then displayed by the browser.

- How it works: The server processes the request, fetches data, generates HTML, and sends it to the client.
- Pros:
  - Faster initial load time: Because the browser receives a complete HTML page, the page loads faster for the user.
  - SEO-friendly: Since content is already present in the HTML, search engines can easily crawl and index the page.
  - Better for slower devices: Rendering on the server reduces the work done by the client’s device.
- Cons:
  - Higher server load: Every request requires the server to render the page, which can be costly if there are many users.
  - Slower interactions after initial load: Interactive elements might need additional client-side code to function, which can cause a delay in subsequent interactions.

- Example:
  - Frameworks like Next.js enable server-side rendering in React applications.
```javascript
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

### Choosing SSR vs. CSR
- Use SSR for content-heavy, SEO-important sites, like blogs or news sites.
- Use CSR for highly interactive apps or SPAs where SEO is less critical, like dashboards and internal tools.
