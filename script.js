const pixelBoard = document.getElementById('pixel-board');
const colors = document.querySelectorAll('.color');
const clearButton = document.getElementById('clear-board');

for (let i = 0; i < 700; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
  pixel.style.backgroundColor = 'rgb(255, 255, 255)';
}

const getTheColor = ({ target }) => {
  colors.forEach((color) => color.classList.remove('selected'));
  target.classList.add('selected');
};

colors.forEach((color) => color.addEventListener('click', getTheColor));

const pixel = document.querySelectorAll('.pixel');

function paint({ target }) {
  const colorSelected = document.querySelector('.selected');
  const cssStyle = window
    .getComputedStyle(colorSelected)
    .getPropertyValue('background-color');
  target.style.backgroundColor = cssStyle;
}

pixel.forEach((px) => px.addEventListener('click', paint));

function clearFunc() {
  pixel.forEach((px) => px.style.backgroundColor = 'rgb(255, 255, 255)');
}

clearButton.addEventListener('click', clearFunc);
