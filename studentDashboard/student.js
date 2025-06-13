// Load students from localStorage or empty array
let students = JSON.parse(localStorage.getItem('students')) || [];
let editingStudentId = null;

const form = document.getElementById('student-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradesInput = document.getElementById('grades');
const cancelEditBtn = document.getElementById('cancel-edit');
const filterPassedCheckbox = document.getElementById('filter-passed');
const tbody = document.getElementById('student-table-body');

// Save students array to localStorage
function saveToLocal() {
  localStorage.setItem('students', JSON.stringify(students));
}

// Calculate average grade of array of grades
function calculateAverage(grades) {
  if (grades.length === 0) return 0;
  const sum = grades.reduce((acc, val) => acc + val, 0);
  return +(sum / grades.length).toFixed(2);
}

// Render student table with optional filter for passed students
function renderTable() {
  tbody.innerHTML = '';

  const showPassedOnly = filterPassedCheckbox.checked;

  const filteredStudents = showPassedOnly
    ? students.filter(s => calculateAverage(s.grades) > 60)
    : students;

  filteredStudents.forEach(student => {
    const avg = calculateAverage(student.grades);

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grades.join(', ')}</td>
      <td>${avg}</td>
      <td>
        <button class="edit-btn" data-id="${student.id}">Edit</button>
        <button class="delete-btn" data-id="${student.id}">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Add event listeners for edit and delete buttons
  document.querySelectorAll('.edit-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = Number(e.target.dataset.id);
      startEditStudent(id);
    })
  );

  document.querySelectorAll('.delete-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = Number(e.target.dataset.id);
      deleteStudent(id);
    })
  );
}

// Handle form submit for add/edit student
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);
  const gradesStr = gradesInput.value.trim();

  if (!name || isNaN(age) || !gradesStr) {
    alert('Please fill all fields correctly');
    return;
  }

  const grades = gradesStr.split(',').map(g => parseFloat(g.trim())).filter(n => !isNaN(n));

  if (editingStudentId !== null) {
    // Edit existing student
    const index = students.findIndex(s => s.id === editingStudentId);
    if (index !== -1) {
      students[index] = { id: editingStudentId, name, age, grades };
    }
    editingStudentId = null;
    cancelEditBtn.style.display = 'none';
  } else {
    // Add new student with unique id (timestamp)
    students.push({ id: Date.now(), name, age, grades });
  }

  form.reset();
  saveToLocal();
  renderTable();
});

// Cancel editing mode
cancelEditBtn.addEventListener('click', () => {
  editingStudentId = null;
  form.reset();
  cancelEditBtn.style.display = 'none';
});

// Start editing student by filling form inputs
function startEditStudent(id) {
  const student = students.find(s => s.id === id);
  if (!student) return;

  nameInput.value = student.name;
  ageInput.value = student.age;
  gradesInput.value = student.grades.join(', ');
  editingStudentId = id;
  cancelEditBtn.style.display = 'inline-block';
}

// Delete student by id
function deleteStudent(id) {
  if (!confirm('Are you sure you want to delete this student?')) return;

  students = students.filter(s => s.id !== id);
  saveToLocal();
  renderTable();
}

// Re-render table when filter checkbox changes
filterPassedCheckbox.addEventListener('change', renderTable);

// Initial render on page load
renderTable();
