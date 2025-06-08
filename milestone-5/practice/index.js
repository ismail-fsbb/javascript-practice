// Create a todo list array and manipulate it
let todoList = ["Wake up", "Have breakfast", "Start work"];
console.log(todoList);
// Add task
todoList.push("Do exercise");
console.log(todoList);
// Remove task
todoList.shift();
console.log(todoList);
// Update a specific task
todoList[1] = "Turn on computer";
console.log(todoList);

// Filter students by grade
let students = [
    { name: "Ismail", grade: "A+" },
    { name: "Moon", grade: "B" },
    { name: "John", grade: "A" },
    { name: "Jamal", grade: "C" }
];
let gradeStudents = students.filter(student => student.grade === "A");
console.log(gradeStudents);

// Object of a person with name, age, greet method
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet();