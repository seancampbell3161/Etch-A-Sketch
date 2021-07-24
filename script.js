const gameBoard = document.getElementById('gameBoard');
const divList = [document.querySelectorAll('tile')];
const button = document.getElementById('sizeButton');

divList.forEach(element => console.log(element));

window.addEventListener('load', setDefaultGrid);

button.addEventListener('click', () => {
    removeGrid(gameBoard);
    let size = prompt('Enter a new grid size');
    while(size > 64) {
        size = prompt('Please enter a number between 1 and 64');
    }
    setGridSize(size);
    fillGrid(size);
});

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.classList.add('white');
        tile.addEventListener('mouseover', changeColor);
        gameBoard.appendChild(tile);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${generateRandomNum()}, ${generateRandomNum()}, ${generateRandomNum()})`;
}

function generateRandomNum() {
    return Math.floor(Math.random() * 256);
}

function removeGrid(container) {
    const divArray = Array.from(container.childNodes);
    divArray.forEach((element) => {
        container.removeChild(element);
    });
}

