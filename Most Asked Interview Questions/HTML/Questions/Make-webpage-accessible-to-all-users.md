## How would you make a webpage accessible to all users?

>[!TIP]
>Making a webpage accessible means ensuring it can be used by people with a wide range of abilities and disabilities, including those who rely on assistive technologies. Here are key practices for improving accessibility:

### 1. Use Semantic HTML
- Why: Semantic elements (e.g., header, nav, main, footer) provide meaningful structure to assistive technologies.
- How
```html
<header>
  <h1>Website Title</h1>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content goes here...</p>
  </article>
</main>
```
### 2. Provide Text Alternatives
- Images: Use alt attributes for images to describe their content or purpose
- ```html
  <img src="example.jpg" alt="A beautiful sunrise over the mountains">
- ```
- Videos: Add captions, transcripts, or audio descriptions for multimedia content.
- Icons: Use accessible labels for icons (e.g., aria-label, aria-hidden).

### 3.Ensure Keyboard Navigation
- Why: Many users rely on the keyboard to navigate.
- How
  - Use focusable elements like links (<a>) and buttons (<button>).
  - Ensure custom components are keyboard accessible with tabindex, keydown, or keyup events.
  - ```html
    <button>Click Me</button>
  - ```

### 4.Use ARIA Roles and Attributes
- Why: ARIA (Accessible Rich Internet Applications) enhances dynamic content accessibility
- How:
  - Add roles like role="button" or role="alert" for non-semantic elements.
  - Use attributes like aria-label and aria-labelledby for better descriptions.
  - ```html
    <div role="alert" aria-live="polite">
     Form submitted successfully!
    </div>
    ```

### 5. Ensure Sufficient Contrast
- Why: Low contrast can make text unreadable for visually impaired users.
- How:
  - Test with tools like WebAIM Contrast Checker.
  - Ensure a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

### 6. Design Responsive and Flexible Layouts
- Why: Users may have varying device sizes, zoom levels, and orientations.
- How:
  - Use responsive design techniques with CSS (e.g., media queries, flexbox, grid).
  - Avoid fixed pixel-based layouts.
 
### Label Form Controls Clearly
- Why: Assistive technologies need clear labels for form elements.
- How:
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

### 8. Avoid Auto-Play
- Why: Auto-playing audio or video can disorient users, especially those relying on screen readers.
- Set autoplay="false" or avoid autoplay entirely.

### Test with Assistive Technologies
- Why: Tools like screen readers provide insights into how accessible your site is
- How:
  - Use screen readers like NVDA, VoiceOver, or JAWS.
  - Test keyboard navigation thoroughly.
 
### . Use Skip Links
- Why: Helps users skip repetitive navigation and go directly to the main content
- How
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<main id="main-content">
  <!-- Main content here -->
</main>
```
