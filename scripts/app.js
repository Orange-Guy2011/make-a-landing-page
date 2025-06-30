const darkModeToggle = document.getElementById('darkModeToggle');
const app = document.getElementById('app');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    app.classList.add('dark');
  } else {
    app.classList.remove('dark');
  }
});