// For loop
for(let i=1;i<=10;i++){
    console.log(i);
}

// While loop
let i=10;
while(i<=20){
    console.log(i);
    i++;
}

// Do while loop
let j=11;
do{
    console.log(j);
    j++;
}while(j<=20);

// break
for(let i=10;i<=20;i++){
    if(i==16){
        break;
    }
    console.log(i);
}

// print even number with continue
for (let i=1;i<=10;i++){
    if (i%2 !==0){
        continue;
    }
    console.log(i);
}

// Looping through arrays
let skills = ["HTML", "CSS", "JavaScript", "React"];
for (let i=0;i<skills.length;i++){
    console.log(skills[i]);
}


let userAge = 32;
if(userAge>=0 && userAge<=12){
    console.log("Child");
}else if(userAge>12 && userAge<18){
    console.log("Teenager");
}else if(userAge>17 && userAge<60){
    console.log("Adult");    
}else if(userAge>=60){
    console.log("Senior");
}else{
    console.log('Input not valid');
}

// ternary operation
// Check if name is "Ismail". If yes, print "Welcome back", else print "Guest user".

let name="Ismail";
let message = name==="Ismail"?"Welcome back": "Guest user";
console.log(message);

// Print numbers 1 to 20
// Stop when the number is 10 (break)

for (i = 1; i<=20 ; i++){
    if (i==10) {
        break;
    }
    console.log(i);
}
// Print numbers 1 to 20
// Stop when the number is 10 (break)
// Skip 5 (continue)
for (let i =1; i <= 20;i++) {
    if(i=== 5) continue;
    if (i===10) break;
    console.log(i);
}

// Print only working days from a list of days by skipping Sunday
const days = ["Monday", "Tuesday", "Wednesday",  "Sunday", "Thursday", "Friday", "Saturday"];
for (let day of days){
    if(day==="Sunday"){
        continue;
    }
    console.log(day);
}