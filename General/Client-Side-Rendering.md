## Client-Side Rendering (CSR)

>[!TIP]
>With client-side rendering, the initial HTML sent from the server is mostly empty or just contains a basic shell. JavaScript then takes over to render content on the client’s browser.

- How it works: The client downloads JavaScript files and runs them to render content and fetch data.
- Pros:
  - Rich interactivity: CSR enables highly interactive, single-page applications (SPAs), where only parts of the page update.
  - Less server strain: Since the browser handles most rendering, CSR can reduce server load.
- Cons:
  - Slower initial load time: The browser has to download and run JavaScript to load the page, which can cause a delay, especially on slower networks or devices.
  - Less SEO-friendly: Search engines may struggle to index content rendered only on the client, though this is improving.
- Example:
  - In a typical React application without SSR (using Create React App, for instance), CSR is the default.
```javascript
// In a client-side only React app
useEffect(() => {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);
```
### Choosing SSR vs. CSR
- Use SSR for content-heavy, SEO-important sites, like blogs or news sites.
- Use CSR for highly interactive apps or SPAs where SEO is less critical, like dashboards and internal tools.
