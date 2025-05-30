
// Check Age Category:
// Write a program to take a user's age and print whether they are a Child (under 13), Teenager (13-17), or Adult (18 and above) using if, else if, and else.

let age = 12;

if (age < 13) {
    console.log("Child"+"<br>");
} else if (age >= 13 && age <= 17) {
    console.log("Teenager"+"<br>");
} else if(age >= 18) {
    console.log("Adult"+"<br>");
} else {
    console.log("Invalid Age"+"<br>");
}

// Even or Odd:
// Write a program that takes a number and checks whether it is even or odd using if/else.

let num = 11;

if (num % 2 == 0) {
    console.log("Even"+"<br>");
} else {
    console.log("Odd"+"<br>");
}

// Fruit Type Checker:
// Use a switch statement to take a fruit name (apple, banana, mango) and print a message like “You selected Mango”, or a default message if it doesn't match any.

let fruitName = "mango";
switch (fruitName){
    case "apple":
        console.log("You selected Apple"+"<br>");
        break;
    case "banana":
        console.log("You selected Banana"+"<br>");
        break;
    case "mango":
        console.log("You selected Mango"+"<br>");
        break;
    default:
        console.log("Invalid Fruit Name"+"<br>");
}

// Multiplication Table:
// Take a number (e.g., 5) and print its multiplication table up to 10 using a for loop.
let number=5;
for (i=1;i<=10;i++){
    console.log(`${number} x ${i} = ${number * i}`+"<br>");
}

// Print Even Numbers (2–20):
// Use a while loop to print all even numbers from 2 to 20.
let num2 = 2;
while (num2 <= 20) {
    console.log(num2+"<br>");
num2 += 2;
}

// Use a while loop to count down from 10 to 1 and print each number.
let count = 10;

while (count >= 1) {
console.log(count);
count--;
}

// Use a do...while loop to print "Hello JavaScript!" 5 times.
let count2 = 0;

do {
console.log("Hello JavaScript!"+"<br>");
count2++;
} while (count2 < 5);

// Simulate user input using a variable and keep checking if it is less than 100 using do...while. (Example: keep printing “Keep trying...” until number >= 100)

let number3 = 40;

do {
console.log("Keep trying..."+"<br>");
number3+=20;
} while (number3 < 100);

// Calculate Factorial:
// Write a program to calculate the factorial of a given number using a for loop.

let num4 = 5;
let factorial = 1;

for (let i = 1; i <= num4; i++) {
factorial *= i;
}

console.log(`Factorial of ${num4} is ${factorial}`+"<br>");


// foreach basic example
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
console.log(fruit+"<br>");
});

// With Index
const colors = ["Red", "Green", "Blue"];

colors.forEach((color, index) => {
    console.log(`Index ${index} = ${color}`+"<br>");
});

// Function declaration
function sum(a,b) {
return a+b;
}
console.log(sum(2,3)+"<br>");

// function expression
const multiply = function(a,b) {
return a*b;
}
console.log(multiply(2,3)+"<br>");

// arrow function
const subtract = (a,b) => {
return a-b;
}
console.log(subtract(4,3)+"<br>");

// Sum of Even Numbers in an Array
// Write a function that takes an array of numbers and returns the sum of only the even numbers.

function sumEven(numbers) {
  return numbers.filter(num => num % 2 === 0) .reduce((sum, num) => sum + num, 0);
}

const result = sumEven([1, 2, 3, 4, 5]);
console.log(result+"<br>");

// Write an arrow function that filters only the positive numbers from an array.
const filterPositive = arr => arr.filter(num => num > 0);

console.log(filterPositive([-2, 5, 0, -1, 7])+"<br>");

// From an array of names, return the first name that has more than 5 characters.
const names = ["Alice", "Bob", "Charlie", "David"];
const longName = names.find(name => name.length > 5);

console.log(longName+"<br>");

// Given an array of fruits, use forEach() to print each fruit with a message.
const fruits2 = ["Apple", "Banana", "Mango"];

fruits2.forEach(fruit => {
  console.log(`I love ${fruit}!`+"<br>");
});