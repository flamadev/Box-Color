const mainElement = document.querySelector('#main-container');

const colorClasses = [
  'yellow',
  'pink',
  'green',
  'yellow',
  'pink',
  'red',
  'orange',
  'blue',
];

function handleMousever() {
  const randomNumber = Math.round(Math.random() * (colorClasses.length - 1));
  this.className = 'cube ' + colorClasses[randomNumber];
}
for (let i = 0; i < 22; i++) {
  const rowElement = document.createElement('div');
  rowElement.classList.add('box');
  for (let i = 0; i < 20; i++) {
    const cubeElement = document.createElement('div');
    cubeElement.classList.add('cube');
    cubeElement.addEventListener('mouseover', handleMousever);
    rowElement.appendChild(cubeElement);
  }
  mainElement.appendChild(rowElement);
}
