let students = JSON.parse(localStorage.getItem('students')) || [];
let editingStudentId = null;

// DOM
const form = document.getElementById('student-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradesInput = document.getElementById('grades');
const cancelEditBtn = document.getElementById('cancel-edit');
const filterPassedCheckbox = document.getElementById('filter-passed');
const tbody = document.getElementById('student-table-body');
const themeToggleBtn = document.getElementById('theme-toggle');
const passwordInput = document.getElementById('teacher-password');
const togglePasswordBtn = document.getElementById('toggle-password');

// Helpers
const saveToLocal = () => localStorage.setItem('students', JSON.stringify(students));
const calculateAverage = grades => grades.length ? +(grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2) : 0;

// Render Table
function renderTable() {
  tbody.innerHTML = '';
  const filtered = filterPassedCheckbox.checked
    ? students.filter(({ grades }) => calculateAverage(grades) > 60)
    : students;

  filtered.forEach(({ id, name, age, grades }) => {
    const avg = calculateAverage(grades);
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition';
    tr.innerHTML = `
      <td class="p-3 border-b">${name}</td>
      <td class="p-3 border-b">${age}</td>
      <td class="p-3 border-b">${grades.join(', ')}</td>
      <td class="p-3 border-b">${avg}</td>
      <td class="p-3 border-b space-y-1">
        <div class="space-x-2">
          <button class="edit-btn bg-yellow-400 px-2 py-1 rounded text-white" data-id="${id}">Edit</button>
          <button class="delete-btn bg-red-500 px-2 py-1 rounded text-white" data-id="${id}">Delete</button>
        </div>
      </td>
    `;
    tr.onclick = e => {
      if (!e.target.closest('button')) {
        document.querySelectorAll('#student-table-body tr').forEach(row =>
          row.classList.remove('selected')
        );
        tr.classList.add('selected');
      }
    };
    tbody.appendChild(tr);
  });

  document.querySelectorAll('.edit-btn').forEach(btn =>
    btn.onclick = () => startEditStudent(+btn.dataset.id)
  );
  document.querySelectorAll('.delete-btn').forEach(btn =>
    btn.onclick = () => deleteStudent(+btn.dataset.id)
  );
}

// Form Submission
form.onsubmit = e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);
  const grades = gradesInput.value
    .split(',')
    .map(s => parseFloat(s.trim()))
    .filter(n => !isNaN(n));

  if (!name || isNaN(age) || grades.length === 0) {
    alert('Please enter valid name, age and numeric grades.');
    return;
  }

  if (editingStudentId !== null) {
    const index = students.findIndex(s => s.id === editingStudentId);
    if (index !== -1) {
      students[index] = { ...students[index], name, age, grades };
    }
    editingStudentId = null;
    cancelEditBtn.classList.add('hidden');
  } else {
    students.push({ id: Date.now(), name, age, grades });
  }

  form.reset();
  saveToLocal();
  renderTable();
};

// Cancel Edit
cancelEditBtn.onclick = () => {
  editingStudentId = null;
  form.reset();
  cancelEditBtn.classList.add('hidden');
};

// Edit Student
function startEditStudent(id) {
  const s = students.find(s => s.id === id);
  if (!s) return;
  nameInput.value = s.name;
  ageInput.value = s.age;
  gradesInput.value = s.grades.join(', ');
  editingStudentId = id;
  cancelEditBtn.classList.remove('hidden');
}

// Delete Student
function deleteStudent(id) {
  if (!confirm('Are you sure to delete?')) return;
  students = students.filter(s => s.id !== id);
  saveToLocal();
  renderTable();
}

// Theme
themeToggleBtn.onclick = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};

// Init theme
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

// Toggle password visibility
togglePasswordBtn.onclick = () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePasswordBtn.textContent = type === 'password' ? 'Show' : 'Hide';
};

// Filter
filterPassedCheckbox.onchange = renderTable;

// Init
renderTable();
