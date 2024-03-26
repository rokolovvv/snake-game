function initGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.classList.add('cell');
    });

    const firstCell = cells[0];
    firstCell.classList.add('snake');
}

console.log(initGame);