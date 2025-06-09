## JavaScript Concepts – Callbacks, Promises, Async/Await, ES6+ Features

This note explains core JavaScript concepts that are crucial for modern development. It includes callback functions, Promises, async/await syntax, and essential ES6+ features like destructuring, spread/rest operators, and template literals.

---

### Callback Functions

A **callback function** is a function passed as an argument to another function and executed later, often after a task is completed.

### Example:

```js
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Ismail", sayBye);
```

### Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```js
  const fetchData = new Promise((resolve, reject) => {
  let isSuccess = true;

  if (isSuccess) {
    resolve("Data fetched successfully.");
  } else {
    reject("Failed to fetch data.");
  }
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

```

### Async / Await
async/await is a modern and cleaner way to work with Promises. It makes asynchronous code look synchronous and improves readability.

```js
function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 2000);
  });
}

async function showUserData() {
  console.log("Fetching...");
  const result = await getUserData();
  console.log(result);
}

showUserData();
```

### Destructuring
Destructuring allows you to unpack values from arrays or properties from objects into individual variables.

```js
const person = { name: "Ismail", age: 25 };
const { name, age } = person;

console.log(name); // Ismail
```

### Spread Operator (...)
Used to copy or combine arrays/objects by spreading their values.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

### Rest Operator (...)
Used to collect multiple elements or arguments into a single array or object.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### Template Literals (Backticks `)
Allows you to create strings with embedded expressions and multi-line formatting.

```js
const name = "Ismail";
const age = 25;

const intro = `Hi, I'm ${name} and I am ${age} years old.`;
console.log(intro);
```

### Summary

| Concept           | Description                                               |
|------------------|-----------------------------------------------------------|
| Callback          | Function passed into another function and executed later |
| Promise           | Represents future success/failure of async operations     |
| Async/Await       | Clean syntax for writing async code using Promises        |
| Destructuring     | Extract values from arrays or objects                     |
| Spread Operator   | Copy/spread array or object values                        |
| Rest Operator     | Group multiple values into one                            |
| Template Literals | Create strings with embedded variables and multi-lines    |
