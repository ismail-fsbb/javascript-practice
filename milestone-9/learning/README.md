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

### sessionStorage
- Stores data temporarily for the current tab/session.
- Data is cleared when the tab is closed.

```js
sessionStorage.setItem('email', 'ismail@example.com');
const email = sessionStorage.getItem('email');
sessionStorage.removeItem('email');
sessionStorage.clear();

```