export function setupThemeToggle() {
    const btn = document.getElementById('toggleTheme');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('bg-gray-900');
      document.body.classList.toggle('text-white');
      btn.textContent = document.body.classList.contains('bg-gray-900') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }
  