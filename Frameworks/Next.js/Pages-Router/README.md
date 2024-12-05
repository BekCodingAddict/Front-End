# All about Next.js Pages Router

### What is Next.js Pages Router?

>[!TIP]
>The Next.js Pages Router is a routing system used in Next.js applications that organizes routes based on the file system structure. It is the older and simpler routing method in Next.js, especially suited for applications with straightforward page requirements.

Here's how it works:
### Key Features of the Pages Router

1.File-Based Routing:
- Each file in the pages/ directory corresponds to a route in the application.
- For example:
  - pages/index.js → /
  - pages/about.js → /about
  - pages/blog/post.js → /blog/post

2.Dynamic Routes:
- Files with square brackets ([ ]) in their names define dynamic routes.
- Example:
  - pages/blog/[id].js → /blog/:id
  - Accessed as /blog/123, where id equals 123.
    
3. API Routes
- Files in the pages/api/ directory create serverless API endpoints.
- Example:
  - pages/api/hello.js → /api/hello

4.Client-Side Navigation:
- Use the Link component from Next.js for seamless client-side navigation between routes

5.Pre-rendering:
- Static Generation (SSG) and Server-Side Rendering (SSR) can be implemented on a per-page basis using getStaticProps and getServerSideProps.

### Example File Structure
```plaintext
pages/
├── index.js          // Home page
├── about.js          // About page
├── blog/
│   ├── index.js      // Blog listing
│   ├── [id].js       // Dynamic blog post
├── api/
│   ├── hello.js      // API endpoint
```

### Transition to the App Router
- Starting from Next.js 13, the App Router was introduced, which is based on the app/ directory. It provides additional features like React Server Components, layouts, and better support for modern web development.
- However, the Pages Router remains supported and is still a valid choice for many projects.
