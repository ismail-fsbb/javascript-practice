import { getStudents, addStudent, updateStudent, deleteStudent, updateStudentGrades } from './student.js';
import { fetchStudentData } from './api.js';

const form = document.getElementById('studentForm');
const tbody = document.querySelector('#studentsTable tbody');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradesInput = document.getElementById('grades');

let editingId = null;

export function renderStudents() {
  tbody.innerHTML = '';
  getStudents().forEach(s => {
    const tr = document.createElement('tr');
    tr.className = 'student-row';
    tr.onclick = () => highlightRow(tr);
    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.age}</td>
      <td>${s.getAverage().toFixed(2)}</td>
      <td>
        <button data-id="${s.id}" class="edit">Edit</button>
        <button data-id="${s.id}" class="refresh">Refresh Grades</button>
        <button data-id="${s.id}" class="delete">Delete</button>
      </td>
    `;
    const details = document.createElement('tr');
    details.id = `details-${s.id}`;
    details.className = 'hidden';
    details.innerHTML = `<td colspan="4">Grades: ${s.grades.join(', ')}</td>`;
    tbody.appendChild(tr);
    tbody.appendChild(details);
  });
}

export function setupDOMEvents() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const grades = gradesInput.value.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n));

    if (!name || isNaN(age) || grades.length === 0) {
      return alert('Invalid data');
    }

    if (editingId) {
      updateStudent(editingId, { name, age, grades });
      editingId = null;
    } else {
      addStudent({ name, age, grades });
    }

    form.reset();
    renderStudents();
  });

  tbody.addEventListener('click', async e => {
    e.stopPropagation();
    const id = Number(e.target.dataset.id);
    if (e.target.classList.contains('delete')) deleteStudent(id), renderStudents();
    if (e.target.classList.contains('edit')) {
      const s = getStudents().find(s => s.id === id);
      if (s) {
        nameInput.value = s.name;
        ageInput.value = s.age;
        gradesInput.value = s.grades.join(', ');
        editingId = s.id;
      }
    }
    if (e.target.classList.contains('refresh')) {
      const data = await fetchStudentData(id);
      updateStudentGrades(id, data.grades);
      renderStudents();
    }
  });

  tbody.addEventListener('dblclick', e => {
    if (e.target.closest('tr').classList.contains('student-row')) {
      const id = Array.from(tbody.children).indexOf(e.target.closest('tr')) / 2;
      document.getElementById(`details-${ getStudents()[id].id }`).classList.toggle('hidden');
    }
  });
}

function highlightRow(row) {
  document.querySelectorAll('.student-row').forEach(r => r.style.background = '');
  row.style.background = '#eef';
}
