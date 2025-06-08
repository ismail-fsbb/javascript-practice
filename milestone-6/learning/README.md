## JavaScript DOM Complete Guide (Beginner Friendly)

Learn how to work with the DOM (Document Object Model) in JavaScript. This single guide covers everything you need as a beginner: selecting elements, navigating the DOM, handling events, and updating content/styles.

---
### What is the DOM?

The **DOM (Document Object Model)** is a tree-like structure of your HTML page. JavaScript uses this to access, modify, or delete elements dynamically.
```html
<h1>Hello DOM</h1>
<script>
  const heading = document.querySelector('h1');
  heading.textContent = 'Hello JavaScript!';
</script>
```
### Query Selectors
- JavaScript can select elements using CSS-style selectors with:
- document.querySelector() → returns the first matching element
- document.querySelectorAll() → returns a NodeList of all matches
```HTML
  <p id="text">Welcome!</p>
```
```js
  const text = document.querySelector('#text');
  console.log(text.textContent);
```
### DOM Traversal
- You can move around in the DOM using:
- parentElement – Go up to the parent
- .children, .firstElementChild, .lastElementChild – Go down to children
- .nextElementSibling, .previousElementSibling – Go sideways to siblings
```HTML
  <ul id="menu">
  <li>Home</li>
  <li>About</li>
</ul>

<script>
  const menu = document.querySelector('#menu');
  const firstItem = menu.firstElementChild;
  console.log(firstItem.textContent);
</script>
```

### Event Handling
You can add interactivity using addEventListener() to handle events like clicks, input, hover, etc.
```HTML
<button id="btn">Click Me</button>
<p id="msg"></p>
<script>
  const btn = document.querySelector('#btn');
  const msg = document.querySelector('#msg');

  btn.addEventListener('click', () => {
    msg.textContent = 'You clicked the button!';
  });
</script>
```

### Changing Styles and Content
Use .textContent to change inner text. Use .style to apply CSS directly from JavaScript.
```HTML
<p id="text">Hello</p>
<script>
  const text = document.querySelector('#text');
  text.textContent = 'Goodbye';
  text.style.color = 'red';
  text.style.fontSize = '20px';
</script>
```