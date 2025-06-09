// Simulate an async operation (setTimeout)
function fakeAsyncOperation() {
    console.log("Starting operation...");
    setTimeout(()=>{
        console.log("Async operation completed after 2 seconds!");
    }, 2000);
}
fakeAsyncOperation();
  
// Use fetch to get data from a public API
async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}
getUserData();


// Destructure an object and an array
const person = {
    name: "Ismail",
    age: 25,
    location: "Dhaka",
};
const { name, age, location } = person;
console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);

// Array destructuring
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(`First: ${firstColor}, Second: ${secondColor}, Third: ${thirdColor}`);
  