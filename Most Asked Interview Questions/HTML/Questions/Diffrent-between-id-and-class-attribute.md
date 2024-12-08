## Explain the difference between id and class attributes.

>[!TIP]
>The id and class attributes in HTML are used to apply styles, behaviors, and scripts to elements, but they serve different purposes and have distinct characteristics:

### 1. id Attribute
- Purpose: Identifies a single, unique element on a page.
- Uniqueness: An id must be unique across the entire HTML document.
- Usage: Typically used to target a specific element for CSS, JavaScript, or hyperlinking.
- CSS Selector: Targeted with a # in CSS (e.g., #header).
- JavaScript Access: Accessed using document.getElementById('id').

```html
<div id="uniqueHeader">Welcome!</div>

<style>
  #uniqueHeader {
    color: blue;
  }
</style>

<script>
  document.getElementById('uniqueHeader').textContent = 'Hello World!';
</script>
```
### 2. class Attribute
- Purpose: Defines a group or category of elements that share the same styles or behaviors.
- Reusability: A class can be used on multiple elements in the same document.
- Usage: Used when you want to apply the same style or behavior to multiple elements.
- CSS Selector: Targeted with a . in CSS (e.g., .button).
- JavaScript Access: Accessed using document.getElementsByClassName('class') or document.querySelectorAll('.class').

```html
<div class="button">Click Me!</div>
<div class="button">Submit</div>

<style>
  .button {
    background-color: lightgray;
    padding: 10px;
    border-radius: 5px;
  }
</style>

<script>
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => alert('Button clicked!'));
  });
</script>
```
### Key Differences
| Feature |	id	| class |
|--|--|--|
| Uniqueness	| Must be unique in a document.| 	Can be reused on multiple elements.|
| Purpose |	Targets a specific element.	| Groups elements with shared styles/behaviors. |
| CSS Selector	| #id (e.g., #header) | 	.class (e.g., .button)| 
| JavaScript | Access	getElementById() | 	getElementsByClassName() or querySelectorAll() |
 | Best Use Case	 | Unique styling/interaction.	 | Shared styling/interaction. |

### When to Use What?
- Use id when you need to uniquely identify an element, such as the main header, a specific form, or a single unique button.
- Use class when styling or scripting multiple elements with the same behavior, such as a group of buttons, list items, or card components.
 
