document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

document.querySelector('#themeBtn').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  document.querySelector('#status').textContent = dark ? 'Dark theme on' : 'Light theme on';
});
