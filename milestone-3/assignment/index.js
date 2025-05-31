
// 1. Print your bio using variables: name, age, hobbies, isStudent.
const bio = {
    name: "Ismail",
    age: 25,
    hobbies: ["Coding", "Travel", "Book Reads"],
    isStudent: true,
}
console.log(bio);

// 2. Take a number, check if it’s even or odd.
function oddEvenCheck(num) {
    if ( num % 2 == 0 ){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
oddEvenCheck(8);

// 3. Simple calculator: Input 2 numbers & an operator (+, -, *, /). Return result using if-else.
function sum(para1, para2) {
    return result=console.log(para1+para2);
}
function sub(para1, para2) {
    return result=console.log(para1-para2);
}
function mul(para1, para2) {
    return result=console.log(para1*para2);
}
function divide(para1, para2) {
    return result=console.log(para1/para2);
}
sum(6,3);
sub(6,3);
mul(6,3);
divide(6,3);

// 4. Take a student’s score, return grade (A to F) with if-else.
let marks=63;
if(marks>=80 && marks<=100){
    console.log("Your Grade is A+");
}else if(marks>=70 && marks<80){
    console.log("Your Grade is A");
}else if(marks>=60 && marks<70){
    console.log("Your Grade is B");
}else if(marks>=50 && marks<60){
    console.log("Your Grade is C");
}else if(marks>=40 && marks<50){
    console.log("Your Grade is D");
}else if (marks<40){
    console.log("Fail");
}else{
    console.log("Your input is not valid. Please input 0 to 100.");
}

// 5. Take a user’s age, print: child (<13), teen (13-17), adult (18+).
let age=12;
if (age<13 && age>0) {
    console.log("child");
}else if(age>=13 && age<=17){
    console.log("Teen");
}else if(age>18 && age<100){
    console.log("Adult");
}else {
    console.log("Please input positive number minimum start with 1 and max age 100");
}

// 6. Ask user for a number and print multiplication table (1–10).
let number=5;
for(let i=1;i<=10;i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

// 7. Declare a hobbies array. Loop and print: “I love ___”.
let hobbies = ["Coding", "Travel", "Book Reads"];
hobbies.forEach((hobby)=>{
    console.log(`I love ${hobby}`);
})

// 8. Print numbers from 1–30. Skip 13, stop at 25.
for (let i = 0; i <=30; i++) {
    if (i==13) {
        continue;
    }
    if (i==25) {
        break;
    }
    console.log(i);
}

// 9. Find the sum of all even numbers from 1–100.
let sum1=0;
for (let i=0; i<=6; i++) {
    if (i%2==0) {
        sumOfEven = i + sum1;
        sum1=sumOfEven;
    }
}
console.log(`Sum of even number ${sum1}`);

// 10. Classic FizzBuzz from 1–50 (3 = Fizz, 5 = Buzz, both = FizzBuzz).
for (let i = 1; i<=50; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if (i % 3 == 0) {
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}