## Browser Storage in JavaScript

### localStorage
- Stores data with **no expiration** time.
- Data persists even after closing the browser.
- Used for long-term storage (e.g., user settings, login info).

### Example:
```js
localStorage.setItem("username", "Ismail");
const user = localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear();
```