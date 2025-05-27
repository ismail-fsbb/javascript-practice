// Print Name
document.write("Hello Ismail"+"<br><br>");

// With Variable
let name = "Imon";
document.write("Hello, " + name +"<br><br>");

// PrintName With function
document.write("PrintName With function:"+"<br>");
function printName(name) {
    document.write("Hello, " + name +"<br><br>");
}
printName("Ismail Hossain");


// =============================
// Adding two numbers
let num1=10;
let num2=20;
let result=num1+num2;
document.write("Sum of "+num1+" and "+num2+" is: "+result+"<br><br>");

// Adding with function
document.write("Adding with function:"+"<br>");
function sumNumber(num1,num2){
    let result=num1+num2;
    document.write("Sum of "+num1+" and "+num2+" is: "+result+"<br><br>");
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
document.write("Name: "+fullName+"<br>");
document.write("Age: "+age+"<br>");
document.write("Country: "+country+"<br>");
document.write("Profession: "+profession+"<br>");
document.write("Hobbies: "+hobbies+"<br>");
document.write("Marital Status: "+status+"<br>");
document.write("Language: "+language+"<br>");
document.write("Skills: "+skills+"<br><br>");
// Skills show with for loop
document.write("Skills show with for loop:"+"<br>");
for(let i=0;i<skills.length;i++){
    document.write(skills[i]+"<br>");
}