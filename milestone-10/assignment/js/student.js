let students = loadFromStorage();
let idCounter = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;

class Student {
  constructor({ id, name, age, grades }) {
    this.id = id || idCounter++;
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  getAverage() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }
}

function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function loadFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("students") || "[]");
    return data.map(s => new Student(s));
  } catch {
    return [];
  }
}

export function getStudents() { return students; }
export function addStudent(data) { students.push(new Student(data)); saveToStorage(); }
export function updateStudent(id, data) {
  const idx = students.findIndex(s => s.id === id);
  if (idx > -1) students.splice(idx, 1, new Student({ id, ...data }));
  saveToStorage();
}
export function deleteStudent(id) {
  const idx = students.findIndex(s => s.id === id);
  if (idx > -1) students.splice(idx, 1);
  saveToStorage();
}
export function updateStudentGrades(id, grades) {
  const s = students.find(s => s.id === id);
  if (s) s.grades = grades;
  saveToStorage();
}
