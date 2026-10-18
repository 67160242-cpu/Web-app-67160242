const status = document.querySelector('#status');
const mascot = document.querySelector('.mascot');

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages! 💖';
  mascot.textContent = '🐱';
});

document.querySelector('#themeBtn').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  status.textContent = dark ? 'Night mode on 🌙' : 'Day mode on ☀️';
  mascot.textContent = dark ? '🦉' : '🐰';
});
