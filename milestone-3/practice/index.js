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