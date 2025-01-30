## What happens when you open a webpage?
When you open a webpage, several processes happen behind the scenes. Here's a simplified breakdown of the steps:

### 1. Entering the URL
You type a URL (e.g., https://example.com) into the browser's address bar and press Enter.
### 2. DNS Lookup
The browser checks its cache or contacts a DNS (Domain Name System) server to find the IP address of the domain (e.g., 93.184.216.34 for example.com).
### 3. Establishing a Connection
The browser establishes a connection with the web server using:
- TCP (Transmission Control Protocol) – Ensures reliable data transfer.
- TLS (if HTTPS is used) – Encrypts the connection for security.

### 4. Sending an HTTP Request
The browser sends an HTTP (or HTTPS) request to the server, asking for the webpage content.

### 5. Server Processes the Request
The web server processes the request, which may involve:
- Fetching static files (HTML, CSS, JavaScript, images).
- Running backend logic (database queries, authentication).
- Generating dynamic content.

### 6.Server Sends an HTTP Response
The server sends back an HTTP response, which includes:
- Status Code (e.g., 200 OK, 404 Not Found).
- Headers (metadata like caching rules and content type).
- Body (HTML, CSS, JavaScript, etc.).

### 7. Browser Renders the Webpage
The browser parses the HTML and:
- Requests external resources (CSS, JavaScript, images).
- Applies styles and layouts (CSS).
- Executes JavaScript (e.g., animations, dynamic content).
- Constructs the DOM (Document Object Model) and CSSOM (CSS Object Model).
- Combines them into a Render Tree and paints pixels on the screen.

### 8. JavaScript Execution & Interactivity
- JavaScript may modify the DOM dynamically (e.g., fetching new data, updating content).
- Event listeners handle user interactions.

### 9. Continuous Updates & Optimizations
