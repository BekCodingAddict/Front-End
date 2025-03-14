# How does caching work in Next.js?

## Caching in Next.js: How It Works
Next.js automatically optimizes caching to improve performance by reducing unnecessary re-renders and network requests. It uses various levels of caching for data fetching, static assets, API responses, and page rendering.

![image](https://github.com/user-attachments/assets/ceb9653d-b784-4b66-a95b-c7e2a92a65f8)


### 2. Page-Level Caching in Next.js
(A) Static Generation (SSG) - Cached at Build Time
- Uses getStaticProps()
- Pages are cached in the CDN and served instantly.
- Great for public, unchanging content (e.g., blogs, docs).

✅ Example: Pre-rendering a Page
```js
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());

  return { props: { posts: data } };
}
```
- 🔹 The page is generated at build time and cached indefinitely.
- 🔹 No extra requests are made unless a revalidation strategy is set.

### B) Incremental Static Regeneration (ISR) - Cached but Updatable
- Pages are cached, but Next.js can update them in the background without a full rebuild.
- Uses revalidate in getStaticProps().
✅ Example: ISR (Revalidate Every 60 Seconds)
```js
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());

  return {
    props: { posts: data },
    revalidate: 60, // Revalidates every 60 seconds
  };
}

```


 The page stays cached, but if a request comes after 60 seconds, Next.js fetches new data in the background.

 ### (C) Server-Side Rendering (SSR) - No Caching (Default)
- Uses getServerSideProps()
- Every request regenerates the page (no caching).
- Useful for personalized content.
✅ Example: SSR (No Caching)
```jsx
export async function getServerSideProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());

  return { props: { posts: data } };
}

```
🔹 Every time the page loads, Next.js fetches fresh data.

## 3. Data Fetching & API Response Caching
(A) fetch() Automatic Caching
Next.js automatically caches fetch responses in useServer(), getStaticProps(), and getServerSideProps().

✅ Example: Cached API Request
```js
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/data", { cache: "force-cache" })
    .then(res => res.json());

  return { props: { data } };
}
```
🔹 Default caching behavior:

- SSG (getStaticProps) → Caches response forever.
- SSR (getServerSideProps) → Does NOT cache response.
- Client-side fetch (useEffect) → Does NOT cache response

### ✅ Example: Disabling Cache (Always Fetch New Data)
```js
fetch("https://api.example.com/data", { cache: "no-store" });
```
🔹 This ensures the API always returns fresh data.

## 4. Full Page Caching & Middleware
(A) Full Page Caching in Vercel
- Automatic full-page caching for SSG & ISR.
- Cached pages are stored on Vercel Edge CDN.
(B) Using Middleware to Modify Cache Headers
You can modify cache headers with Next.js Middleware.

✅ Example: Custom Cache-Control Header
```js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "s-maxage=300, stale-while-revalidate=60");
  return res;
}

```
🔹 This tells the browser:
- Store the response for 300 seconds (5 min).
- Serve stale data while fetching a new version in the background.

## 5. Browser Caching (Static Assets)
Next.js optimizes CSS, JS, images, and fonts with aggressive caching.

✅ Example: Automatic Caching of Static Assets

- /_next/static/* files are cached indefinitely.
- Images in next/image use automatic caching.
Controlling Image Caching
```js
import Image from "next/image";

<Image src="/image.jpg" width={500} height={300} priority />;
```
🔹 priority forces the image to load immediately and cache efficiently.

## 6. Manually Revalidating Cache
(A) Revalidate a Page on Demand
Next.js can manually revalidate pages via API calls.

✅ Example: On-Demand Revalidation
```js
export default async function handler(req, res) {
  await res.revalidate("/products"); // Revalidates `/products` page
  res.json({ revalidated: true });
}

```
🔹 Call /api/revalidate to refresh the cache.

## 7. Cache Invalidation on Deployment
- New Deployments invalidate the entire cache, ensuring fresh content.
- ISR pages still retain previously cached versions unless revalidated.
