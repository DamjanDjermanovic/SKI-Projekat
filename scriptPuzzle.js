let neslozeniDelovi = document.querySelectorAll('.piece');
const start = document.querySelector("#start");

delovi = [
    "./puzzle/1.png",
    "./puzzle/2.png",
    "./puzzle/3.png",
    "./puzzle/4.png",
    "./puzzle/5.png",
    "./puzzle/6.png",
    "./puzzle/7.png",
    "./puzzle/8.png",
    "./puzzle/9.png",
];

function resiPuzzle() {
    neslozeniDelovi.forEach((piece, index) => {
        piece.src = delovi[index];
        piece.setAttribute('draggable', 'true');
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragover', dragOver);
        piece.addEventListener('drop', drop);
    });
}

function promesajPuzzle() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    const selectedNumbers = shuffledNumbers.slice(0, 9);

    neslozeniDelovi.forEach((piece, index) => {
        piece.src = delovi[selectedNumbers[index]];
    });
}

function proveriResenje() {
    let reseno = true;

    neslozeniDelovi.forEach((piece, index) => {
        const filename = piece.src.split('/').pop();
    
        if (filename !== delovi[index].split('/').pop()) {
            reseno = false;
        }
    });
    return reseno;
}

window.onload = function() {
    resiPuzzle();
}

let draggedPiece = null;

function dragStart(e) {
    draggedPiece = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.className === 'piece') {
        const tempSrc = e.target.src;
        e.target.src = draggedPiece.src;
        draggedPiece.src = tempSrc;
    }
}

start.addEventListener('click', () => {
    promesajPuzzle();
    let time = 30;
    let timer = document.querySelector("#timer");

    timerInterval = setInterval(() => {
        time--;
        timer.textContent = "TIMER: " + time + "s";

        if (proveriResenje()) {
            clearInterval(timerInterval);
            alert("Uspeli ste!");
        };

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Vreme je isteklo, kraj igre!");
            promesajPuzzle();
        };
    }, 1000);
});