## What is Partial Pre-rendering?

>[!TIP]
> PPR (Partial Pre-rendering), often referred to as Incremental Static Regeneration (ISR) or an approach within Next.js that involves a hybrid of static generation and server-side rendering, is a concept used to create optimized web pages that strike a balance between static and dynamic content. Partial Pre-rendering is a method where parts of a page are pre-rendered and served statically, while other parts can be dynamically rendered on the server or client. This approach is essential for pages that have a mix of content that is:
>  - Static and doesn't change often (e.g., layout, headers).
>  - Dynamic and requires fresh data (e.g., user-specific information, frequently updated data).

### How Does Partial Pre-rendering Work in Next.js?
In Next.js, the principle of Partial Pre-rendering is primarily implemented through Incremental Static Regeneration (ISR). ISR allows you to pre-render pages at build time and then update specific parts of the page at a defined interval without needing a complete rebuild of the app.

- ISR Workflow:
  - At build time, pages are statically generated.
  - hen a user requests the page, the pre-rendered version is served from the cache.
  - The page can be revalidated (i.e., rebuilt and updated) at a defined interval, ensuring the data is fresh for subsequent requests.

- Benefits of Partial Pre-rendering:
  - Improved Performance: Serving pre-rendered content is fast since the majority of the page is cached.
  - Fresh Data: Dynamic parts can be updated without a complete page rebuild.
  - Scalability: Less server load compared to server-side rendering for every request.
  - SEO-Friendly: Since pages are pre-rendered and served statically, they remain SEO-optimized.
    
### Example of Incremental Static Regeneration in Next.js:
```javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // Revalidates the page at most once every 60 seconds
  };
}

const Page = ({ data }) => {
  return <div>{data.content}</div>;
};

export default Page;

```
### Use Case:
Imagine a news site where the homepage is updated every hour with the latest articles. Using ISR:

- Static parts like the page layout, headers, and footers are pre-rendered.
- Dynamic parts like the list of articles are revalidated at a specified interval (e.g., every 60 seconds).

### Differences from Full Server-Side Rendering (SSR):
 - SSR: The entire page is generated on each request, leading to higher server load and potentially slower response times.
 - PPR/ISR: The page is pre-rendered once and updated only when needed, reducing server load and maintaining fast response times.

### Conclusion:
 - Partial Pre-rendering (PPR), through ISR, gives developers a powerful tool to build scalable, high-performance web applications that serve a mix of static and dynamic content. It enhances user experience by ensuring that pages load quickly while still providing up-to-date information.








