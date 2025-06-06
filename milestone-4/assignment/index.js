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
function CTF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(CTF(32));  

// Build a function that reverses a string.
function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}
console.log(reverseString("Ismail"));

// Write a function that finds the maximum value in an array.
function MaxValue(arr) {
  let max = Math.max(...arr);
  return max;
}
console.log(MaxValue([1, 2, 3, 4, 5]));

// Create a function that returns the Fibonacci sequence up to n terms.
function fibonacci(n) {
    const sequence = [];
    if (n >= 1) sequence.push(0);
    if (n >= 2) sequence.push(1);

    for (let i = 2; i < n; i++) {
      const next = sequence[i - 1] + sequence[i - 2];
      sequence.push(next);
    }
    return sequence;
}
console.log(fibonacci(4));

// Write a function that checks if a string is a palindrome.
function isPalindrome(str) {
    str = str.toLowerCase();
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("Madam"));

// Implement a function that counts the number of vowels in a string.
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Ismail"));

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
function calculateArea(width, height) {
    return width * height; 
}
console.log(calculateArea(3, 2));