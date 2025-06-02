//  Function to add any two numbers
function addNumber(num1, num2){
    return num1+num2;
}
console.log(addNumber(1,2));

// Function that checks if a year is a leap year
function leapYear(year){
    if(year % 4 == 0){
        console.log(`${year} is a Leap Year.`)
    }else{
        console.log(`${year} is NOT a Leap Year.`)
    }
}
leapYear(2024);

// Create a function named calculate that takes 3 parameters: two numbers and an operator (like "+", "-", "*", "/"). Based on the operator, return the result of the calculation.
function calculate(num1, num2, operator){
    if(operator == "+"){
        return num1 + num2;
    }else if(operator == "-"){
        return num1 - num2;
    }else if(operator == "*"){
        return num1 * num2;
    }else if(operator == "/"){
        return num1 / num2;
    }else{
        return "Invalid Operator";
    }
}
console.log(calculate(1,2,"+"));

// Create a function expression that takes two arguments: name and timeOfDay (like "morning", "afternoon", "evening"). It should return a nice greeting message.
const greet = function(name, timeOfDay){
    return `Good ${timeOfDay}, ${name}!`;
}
console.log(greet("John", "Morning"));

// Write a function outer which declares a variable. Inside that function, create another function inner that logs the outer variable (lexical scope). Also, create a block inside inner using if or for and declare a let variable inside it. Try to log that variable outside the block to see the error.
function outer(){
    let outerVar = "Outer Variable";
    function inner(){
        console.log(outerVar);
        if(true){
            let innerVar = "Inner Variable";
            console.log(innerVar);
        }
    }
    inner();
}
outer();

// Create a function called checkEvenOdd that takes a number as a parameter and returns "Even" if the number is even, or "Odd" if it's odd.
function checkEvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(checkEvenOdd(10));

// Create a function expression called getFullName that takes two arguments: firstName and lastName. It should return the full name in this format: "FirstName LastName".
const getFullName = function(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Ismail", "Hossain"));