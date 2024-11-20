## What are void element of HTML?

>[!NOTE]
>Void elements in HTML are elements that do not have any content or closing tag. These elements are self-contained and are used to insert things like line breaks, images, or meta information into a web page.

### Characteristics of Void Elements
- No Closing Tag: Void elements do not need a closing tag (</>) because they cannot have child elements or content.
  - Example: &#60;br&#62;(line break).
- Self-Closing Syntax (Optional): In some cases (e.g., XHTML), you might see a self-closing syntax like &#60;br &#47;&#62;, but it is optional in modern HTML (HTML5).
- Purpose: Usually used for embedding or adding non-content elements.

### Common Void Elements
Here are the most commonly used void elements in HTML:
![화면 캡처 2024-11-20 090342](https://github.com/user-attachments/assets/81cc222c-eda6-426c-bd57-aa22af7e2697)

### Why Use Void Elements?
- They serve specific purposes like structuring the page, embedding resources, or providing metadata.
- They simplify the markup by reducing unnecessary closing tags.

>[!NOTE]
>- Void elements do not have children, so attempting to add content between a start and end tag (e.g.,  &#60;img&#62;content &#60;&#47;img&#62;) will result in unexpected behavior.
>- Some void elements (like  &#60;input&#62;) might accept attributes, but no content.
