// Students Array with Objects and Method

// Initial student array
let students = [
    {
        id: 1,
        name: "Alice",
        age: 20,
        grades: [70, 85, 90],
        getAverage: function () {
            return this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
        },
    },
    {
        id: 2,
        name: "Bob",
        age: 22,
        grades: [55, 60, 58],
        getAverage: function () {
            return this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
        },
    },
];

// Add Student (using push)
function addStudent(student) {
    students.push(student);
}

addStudent({
    id: 3,
    name: "Charlie",
    age: 21,
    grades: [95, 92, 88],
    getAverage: function () {
        return this.grades.reduce((sum, g) => sum + g, 0) / this.grades.length;
    },
});

// Remove Student (using splice)
function removeStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}
removeStudent(2);
  
// Edit Student (using splice or direct update)
function editStudent(id, updatedData) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = {
            ...students[index],
            ...updatedData,
            getAverage: students[index].getAverage,
        };
    }
}
editStudent(1, { name: "Alicia", age: 21 });
  

// Filter Students Who Passed (avg grade > 60)
function getPassingStudents() {
    return students.filter(student => student.getAverage() > 60);
}
const passingStudents = getPassingStudents();
console.log(passingStudents);

// Get Class Average (using reduce)
function getClassAverage() {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.getAverage(), 0);
    return total / students.length;
}
const classAverage = getClassAverage();
console.log("Class Average:", classAverage);
  
  