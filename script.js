const gameBoard = document.getElementById('gameBoard');
const button = document.getElementById('reset');

window.addEventListener('load', setDefaultGrid);

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for(let i = 0; i < 256; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.classList.add('white');
        tile.addEventListener('mouseover', changeColor);
        gameBoard.appendChild(tile);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}


const divs = document.querySelectorAll('.tile');

// divs.forEach(div => div.addEventListener('mouseenter', () => {
//     div.classList.remove('white');
//     div.classList.add('black');
// }));



