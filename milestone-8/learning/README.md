## JavaScript Modules – Quick Notes

### Why Modules?

Before ES6, JavaScript used global scope — making large codebases messy and error-prone. ES6 Modules solve this by:

- Splitting code into small, reusable files
- Avoiding name conflicts
- Keeping logic organized and maintainable

---

### ES6 Modules: `export` and `import`

### Exporting

There are two ways to export values from a file:
- export: Named exports (can export multiple things)
- export default: Single main export

```js
// math.js
export const PI = 3.1416;

export function add(a, b) {
  return a + b;
}

export default function subtract(a, b) {
  return a - b;
}
```

### Importing

There are two ways to import values from a file:
- import: Named imports (can import multiple things)
- import default: Single main import
```js
// app.js
import { PI, add } from './math.js';
import subtract from './math.js';

console.log(PI); // 3.1416
console.log(add(1, 2)); // 3
console.log(subtract(1, 2)); // -1
```
---

### Structuring a Project with Modules

calculator-app/
│
├── index.html
├── app.js
└── math/
    ├── add.js
    ├── subtract.js
    └── index.js

#### Example code
```js
// add.js
export function add(a, b) {
  return a + b;
}

// subtract.js  
export function subtract(a, b) {
  return a - b;
}

// index.js
export { add, subtract } from './add.js';
export { subtract } from './subtract.js';

// app.js
import { add, subtract } from './math/index.js';

console.log(add(1, 2));
console.log(subtract(2, 1));
```
---

### Browser Support

ES6 Modules are supported in all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge
- Opera

---

### Conclusion

ES6 Modules provide a clean and organized way to structure and reuse code in JavaScript. By using export and import, you can easily split your code into small, reusable files and avoid name conflicts.