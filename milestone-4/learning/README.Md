
### Function Declaration:
```js
function greet(name) {
  return "Hello, " + name;
}
greet("Ismail");
```
- **Hoisted**: Can be called before it’s declared.
- Great for reusable utility functions.

### Function Expression:
```js
const greet = function(name) {
  return "Hello, " + name;
};
greet("Ismail");
```
- **Not hoisted**: Must be defined before calling.
- Useful for callbacks, dynamic behavior, and passing functions as values.

### Parameters vs Arguments
- **Parameters**: Variables listed in the function definition.
- **Arguments**: Actual values passed when calling the function.
```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```

### Return Values
```js
function multiply(a, b) {
  return a * b;
}
const result = multiply(4, 5);
```

- Use the `return` keyword to send back a value.
- If no `return`, the function returns `undefined`.

### Global Scope
- Accessible from anywhere in the file.
```js
let x = 10;
function show() {
  console.log(x);
}
```

### Block Scope
- Variables declared with `let` or `const` are limited to `{}` blocks.
```js
{
  let y = 20;
  console.log(y);
}
// console.log(y); ❌ Error
```

### Lexical Scope
- Inner functions can access variables from their outer functions.
- protect variables from outside code
```js
function outer() {
  let name = "Ismail";

  function inner() {
    console.log("Hello, " + name);
  }

  inner(); // Output: Hello, Ismail
}
```

### Scope Overview Table

| Type           | Description                          | Example                            |
|----------------|--------------------------------------|------------------------------------|
| Global Scope   | Accessible from the entire file      | `let x = 5;`                       |
| Block Scope    | Inside `{}` with `let`/`const`       | `if (true) { let y = 10; }`        |
| Lexical Scope  | Inner function can access outer vars | `function outer() { function inner() {} }` |

---

### When to Use Function Types

| Situation                              | Use                  |
|----------------------------------------|-----------------------|
| Regular function (utility, common tasks) | Function Declaration |
| Anonymous, callback, delay (`setTimeout`, `array.map`) | Function Expression |
| Private/nested logic                    | Lexical Scope         |
| Need to pass function as value         | Function Expression   |