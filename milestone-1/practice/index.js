// Print Name
console.log("Hello Ismail");

// With Variable
let name = "Imon";
console.log("Hello, " + name );

// PrintName With function
console.log("PrintName With function:");
function printName(name) {
    console.log("Hello, " + name );
}
printName("Ismail Hossain");


// =============================
// Adding two numbers
let num1=10;
let num2=20;
let result=num1+num2;
console.log("Sum of "+num1+" and "+num2+" is: "+result);

// Adding with function
console.log("Adding with function:");
function sumNumber(num1,num2){
    let result=num1+num2;
    console.log("Sum of "+num1+" and "+num2+" is: "+result);
} 
sumNumber(5,6);

// Create variables for your bio data
let fullName="Ismail Hossain";
let age=25;
let country="Bangladesh";
let hobbies="Coding";
let status="Single";
let language="Bangla";
let profession = "Developer";
let skills = ["HTML", "CSS", "JavaScript", "React", "nextJs", "WordPress", "PHP", "Laravel"];
// Print your bio data
console.log("Name: "+fullName);
console.log("Age: "+age);
console.log("Country: "+country);
console.log("Profession: "+profession);
console.log("Hobbies: "+hobbies);
console.log("Marital Status: "+status);
console.log("Language: "+language);
console.log("Skills: "+skills);
// Skills show with for loop
console.log("Skills show with for loop:");
for(let i=0;i<skills.length;i++){
    console.log(skills[i]);
}


// Bio with object
const bio={
    name: "ismail",
    age: 25,
    isStudent: true,
    hobbies: ["Reading", "Traveling" , "Coding"],
}

console.log("Name = "+bio.name);
console.log("Age = "+bio.age);
console.log("isStudent = "+bio.isStudent);
console.log("Hobbies = "+bio.hobbies);

// with For in loop
for (let key in bio) {
    console.log(`${key} = ${bio[key]}`);
}