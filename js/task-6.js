function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');

const refs = {
  input: controls.querySelector('input'),
  createButton: controls.querySelector('[data-create]'),
  destroyButton: controls.querySelector('[data-destroy]'),
};

refs.createButton.addEventListener('click', handleCreateButton);
refs.destroyButton.addEventListener('click', handleDestroyButton);

function createBoxes(amount) {
  let height = 30;
  let width = 30;
  const markup = [];

  for (let i = 0; i < amount; i++) {
    let color = getRandomHexColor();
    markup.push(
      `<div style = "width: ${width}px; height: ${height}px; background-color: ${color}"></div>`
    );
    width += 10;
    height += 10;
  }
  boxes.innerHTML = markup.join('');
}

function handleCreateButton() {
  const amount = Number(refs.input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    refs.input.value = '';
  }
}

function handleDestroyButton() {
  boxes.innerHTML = '';
  refs.input.value = '';
}
