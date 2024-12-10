## What is the DOM, and how do you manipulate it using JavaScript?

### What is the DOM?
>[!TIP]
>The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects. Each node in this tree corresponds to part of the document, such as an element, attribute, or text content.

>The DOM allows JavaScript to access and manipulate the structure, style, and content of a web page dynamically.


### Structure of the DOM
Given this HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1 id="heading">Hello, World!</h1>
    <p class="text">This is a paragraph.</p>
  </body>
</html>
```
The DOM representation looks like this:
```less
Document
 ├── html
      ├── head
      │    └── title
      └── body
           ├── h1 (id="heading")
           └── p (class="text")
```

### Manipulating the DOM with JavaScript
JavaScript interacts with the DOM through the document object, which provides methods and properties to select, modify, and manage elements.

1. Selecting Elements
- By id
```javascript
const heading = document.getElementById("heading");
```
- By Class Name:
```javascript
const paragraphs = document.getElementsByClassName("text");
```
By Tag Name:
```javascript
const allParagraphs = document.getElementsByTagName("p");
```
- Using Query Selector:
  - Single Element
```javascript
const heading = document.querySelector("#heading");
```
 - All matching elements
```javascript
const allTexts = document.querySelectorAll(".text");
```
### 2.Changing Content
- Modify Text Content:
```javascript
heading.textContent = "Welcome to the DOM!";
```
- Insert HTML:
```javascript
heading.innerHTML = "<span>Welcome to the DOM!</span>";
```
### 3. Changing Attributes
- Get or Set Attributes:
```javascript
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href"));
```
- Change ID or Class:
```javascript
heading.id = "newHeading";
heading.className = "newClass";
```
### Changing Styles
- Direct Style Changes:
```javascript
heading.style.color = "blue";
heading.style.fontSize = "24px";
```
- Add or Remove Classes:
```javascript
heading.classList.add("highlight");
heading.classList.remove("highlight");
```
- Toggle a Class:
```javascript
heading.classList.toggle("highlight");
```
### Creating and Inserting Elements
- Create a New Element:
```javascript
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
```
- Append to an Existing Element:
```javascript
document.body.appendChild(newParagraph);
```
Insert Before Another Element:
```javascript
const referenceNode = document.querySelector("h1");
document.body.insertBefore(newParagraph, referenceNode);
```
###  Removing Elements
- Remove Specific Element:
```javascript
const paragraph = document.querySelector(".text");
paragraph.remove();
```
- Remove via Parent:
```javascript
const parent = document.body;
const child = document.querySelector(".text");
parent.removeChild(child);
```
### 7. Event Handling
- Add Event Listeners:
```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```
- Remove Event Listeners:
```javascript
const handler = () => alert("Button clicked!");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);
```
### Example: Dynamic DOM Manipulation
```html
<!DOCTYPE html>
<html>
  <body>
    <button id="add">Add Paragraph</button>
    <div id="container"></div>

    <script>
      const button = document.getElementById("add");
      const container = document.getElementById("container");

      button.addEventListener("click", () => {
        const newPara = document.createElement("p");
        newPara.textContent = "This is a dynamically added paragraph!";
        container.appendChild(newPara);
      });
    </script>
  </body>
</html>
```
### Why Manipulate the DOM?
DOM manipulation enables dynamic web experiences by allowing developers to:
- Update content dynamically (e.g., adding/removing elements).
- Change the appearance of a page.
- Handle user interactions (e.g., form submission, button clicks).
