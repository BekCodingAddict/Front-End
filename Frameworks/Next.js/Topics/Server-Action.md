## What is Server Action?

>[!TIP]
>In web development, Server Actions refer to actions or functions that run directly on the server instead of the client. These actions allow you to perform server-side tasks such as interacting with databases, making API requests, or processing sensitive logic securely, without exposing the code or data to the user's browser.

### Characteristics of Server Actions:
1.Runs on the Server: The code for server actions is executed on the backend. It can securely handle tasks requiring sensitive data, like accessing a database or processing payments.

2.Reduces Client-Side Overhead: By offloading complex or secure tasks to the server, the client-side code becomes lighter and more secure.

3.Optimized for Data Handling: Server actions are well-suited for tasks like fetching, transforming, or validating data, especially in response to user inputs or API requests.

### Example in Modern Frameworks:

### Next.js (13+)
Next.js introduced a concept of Server Actions with server components and the ability to run server-side logic in React server components. For instance:
- Server Actions in Next.js allow you to execute server-side logic on user-triggered events (e.g., submitting a form or fetching data) without exposing server-side logic to the client.

- Example in Next.js:
```javascript
  // app/page.js
async function saveData(formData) {
  'use server'; // Server action directive
  // Server-side logic here (e.g., saving to a database)
  console.log(formData);
}

export default function Page() {
  return (
    <form action={saveData}>
      <input type="text" name="name" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```
Here:
- The saveData function is a server action that runs directly on the server.
- The 'use server' directive ensures this function is executed server-side.

### Benefits of Server Actions in Next.js:
- Reduced client-server interaction overhead.
- Secure handling of sensitive data.
- Automatic serialization and deserialization of data.

### General Use Cases for Server Actions:
- Database Queries: Retrieving or updating records from a server-side database.
- Secure Logic: Processing sensitive business logic like authentication or payments.
- API Communication: Making secure third-party API calls.
- File Operations: Handling file uploads or processing on the server.
