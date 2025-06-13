import { setupDOMEvents, renderStudents } from './dom.js';
import { setupThemeToggle } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDOMEvents();
  setupThemeToggle();
  renderStudents();
});
