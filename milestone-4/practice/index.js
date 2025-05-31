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