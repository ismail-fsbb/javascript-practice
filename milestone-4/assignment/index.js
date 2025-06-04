// Write a calculator with functions for add, subtract, multiply, divide
function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1+num2;
    } else if (operator === "-") {
        return num1-num2;}
    else if (operator === "*") {
        return num1*num2;
    } else if (operator === "/") {
        return num1/num2;}
    else {
        return "Invalid operator";
    }
}
console.log(calculator(2, 5, "+"));
console.log(calculator(11, 2, "-"));
console.log(calculator(4, 4, "*"));
console.log(calculator(15, 3, "/")); 

// Write a function that returns the factorial of a number.
function factorial(f_num) {
    let result = 1;
    for(let i = 1; i <= f_num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(3));

// Create a function that checks whether a number is prime.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));

// Write a function that converts Celsius to Fahrenheit.
// Build a function that reverses a string.
// Write a function that finds the maximum value in an array.
// Create a function that returns the Fibonacci sequence up to n terms.
// Write a function that checks if a string is a palindrome.
// Implement a function that counts the number of vowels in a string.
// Write a function that takes a number and returns whether it’s even or odd.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));


// Create a function that calculates the area of a rectangle given width and height.