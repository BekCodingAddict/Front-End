## What is DOM and BOM ?
Both DOM and BOM are part of how JavaScript interacts with web pages, but they serve different purposes.

## 1. DOM (Document Object Model)
The DOM is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows JavaScript to dynamically manipulate content, structure, and styles.

### How it Works?
- The browser converts an HTML document into a DOM tree.
- Each HTML element (e.g., <div>, <p>, <h1>, etc.) becomes a node in the tree.
- JavaScript can access and modify these nodes using DOM methods.

### Example: Accessing and Modifying DOM Elements
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>DOM Example</title>
</head>
<body>
    <p id="text">Hello, DOM!</p>
    <button onclick="changeText()">Click me</button>

    <script>
        function changeText() {
            document.getElementById("text").innerText = "DOM Manipulated!";
        }
    </script>
</body>
</html>

```
🔹 document.getElementById("text") → Finds the element with id="text"
🔹 .innerText = "DOM Manipulated!" → Changes its content dynamically

![화면 캡처 2025-02-01 212133](https://github.com/user-attachments/assets/b0c1d327-6343-457d-bd81-c2c11a0ff315)

## BOM (Browser Object Model)
The BOM refers to the objects that represent the browser environment. It allows JavaScript to interact with browser features like the window, history, and screen.

### Key BOM Objects
- window – Represents the browser window
- navigator – Provides information about the browser
- location – Gives information about the URL
- history – Allows navigation through browser history
- screen – Provides details about the screen resolution

### Example: Using BOM Objects
```js
console.log(window.innerWidth); // Get browser width
console.log(navigator.userAgent); // Get browser info
console.log(location.href); // Get current page URL

// Redirect user to another page
// location.href = "https://google.com";
```
![image](https://github.com/user-attachments/assets/0e317796-5552-4a55-b56a-c74d90bd0b65)


![image](https://github.com/user-attachments/assets/46bce093-9958-4960-aa96-320102d321b1)

