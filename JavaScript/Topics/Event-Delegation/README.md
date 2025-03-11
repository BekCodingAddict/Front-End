# 🚀 Event Delegation Example in JavaScript
>Event Delegation is a technique where a parent element handles events for its child elements, even if they are dynamically added to the DOM. This improves performance by reducing the number of event listeners.

## ✅ Basic Example: Handling Click Events for Multiple Buttons
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
</head>
<body>

    <div id="button-container">
        <button class="btn">Button 1</button>
        <button class="btn">Button 2</button>
        <button class="btn">Button 3</button>
    </div>

    <script>
        document.getElementById("button-container").addEventListener("click", function(event) {
            if (event.target.classList.contains("btn")) {
                alert(event.target.textContent + " clicked!");
            }
        });
    </script>

</body>
</html>
```
### 🎯 How It Works:
- Instead of adding separate event listeners to each button, we add one listener to the parent <div id="button-container">.
- When any button inside the container is clicked, the event bubbles up to the <div>, and we check if event.target is a .btn.
- This makes the code more efficient, especially when handling dynamically added elements.

## ✅ Example with Dynamically Added Elements
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation - Dynamic Elements</title>
</head>
<body>

    <button id="add-btn">Add Button</button>
    <div id="button-container"></div>

    <script>
        document.getElementById("button-container").addEventListener("click", function(event) {
            if (event.target.classList.contains("btn")) {
                alert(event.target.textContent + " clicked!");
            }
        });

        document.getElementById("add-btn").addEventListener("click", function() {
            const newButton = document.createElement("button");
            newButton.className = "btn";
            newButton.textContent = "New Button";
            document.getElementById("button-container").appendChild(newButton);
        });
    </script>

</body>
</html>
```
### 🎯 Why Event Delegation is Useful:
Even if new buttons are added dynamically, the existing event listener still works.
No need to manually attach event listeners to each new element.
This improves performance and maintainability in large applications.
