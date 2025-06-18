let students = [
  { id: 1, name: "Ismail", age: 23, grades: [67, 88, 99, 76] },
  { id: 2, name: "Ayesha", age: 22, grades: [72, 81, 95, 89] },
  { id: 3, name: "Shaon", age: 24, grades: [64, 79, 83, 90] },
  { id: 4, name: "Tabassum", age: 21, grades: [88, 92, 74, 85] },
  { id: 5, name: "Nabil", age: 25, grades: [91, 87, 77, 80] },
  { id: 6, name: "Sara", age: 23, grades: [85, 93, 69, 88] },
  { id: 7, name: "Riyad", age: 22, grades: [78, 85, 91, 84] },
  { id: 8, name: "Meher", age: 23, grades: [80, 79, 94, 88] },
  { id: 9, name: "Fahim", age: 24, grades: [73, 90, 86, 82] },
  { id: 10, name: "Tania", age: 21, grades: [22, 33, 10, 21] },
];

function filterByGrade() {
 const passed = students.filter((item) =>  getAverage(item.grades)>60);
  console.log(passed);
}
console.log("passed")
filterByGrade();

function deleteStudentById(id) {
  students = students.filter((item) => item.id !== id);
}

// students = deleteStudentById(3);
// console.log(students);
function editStudentById(id, newData) {
  const filterData = students.filter((item) => item.id === id);
  console.log(filterData);
  if (filterData.length != 0) {
    let student = filterData[0];
    student = {
      ...student,
      ...newData,
    };

    deleteStudentById(id);
    students.push(student);
  } else {
    console.log("no student found");
  }
}
editStudentById(1, { name: "Abdul", age: 45 });
// console.log(students);

function getAverage(grades) {
  let sum = 0;
  const totalSubject = grades.length;
  grades.forEach((grade) => {
    sum += grade;
  });
  return sum / totalSubject;
}

// console.log(students);

function addStudent(data, position = null) {
  if (position != null && position > -1) {
    students.splice(position, 0, data);
  } else {
    students.push(data);
  }
}

// addStudent({
//   id: 2,
//   name: "ebvu",
//   age: 23,
//   grades: [67, 88, 99, 76],s
// });

// console.log(students);

// addStudent({
//   id: 3,
//   name: "Ebra",
//   age: 23,
//   grades: [67, 88, 99, 76],
// }, 0);

// console.log(students);

function removeStudent(position = null, deleteCount = 1) {
  if (position != null && position > -1) {
    students.splice(position, deleteCount);
  } else {
    students.pop();
  }
}

// removeStudent(0, 2)

// console.log(students);
