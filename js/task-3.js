const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const userName = event.target.value.trim();
  output.textContent = userName !== '' ? userName : 'Anonymous';
  console.log(event.target.value);
});
