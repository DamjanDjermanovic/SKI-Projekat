const audio = document.getElementById("audio-player");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const lista = document.getElementById("lista");

const pesme = [
    {ime: "1. Nokia Espionage", path: "./music/nokia_espionage.mp3"},
    {ime: "2. Title Theme", path: "./music/01 Title Theme.mp3"},
    {ime: "3. Deku Tree", path: "./music/12 Inside The Deku Tree.mp3"},
    {ime: "4. Zelda's Theme", path: "./music/26 Zelda's Theme.mp3"},
    {ime: "5. Lost Woods", path: "./music/35 Lost Woods.mp3"},
    {ime: "6. Great Fairy's Fountain", path: "./music/40 Great Fairy's Fountain.mp3"},
    {ime: "7. Windmill Hut", path: "./music/57 Windmill Hut.mp3"},
    {ime: "8. Gerudo Valley", path: "./music/68 Gerudo Valley.mp3"},
    {ime: "9. Requiem of Spirit", path: "./music/70 Requiem of Spirit.mp3"},
    {ime: "10. Ocarina of Time", path: "./music/81 Ocarina of Time.mp3"},
]

let id = 0;

pesme.forEach((pesma, index) => {
    const button = document.createElement('button');
    button.textContent = pesma.ime;
    button.classList.add("pesma");

    button.addEventListener('click', () => {
        audio.src = pesma.path;
        pustiPesmu(index);
        id = index;
    })

    lista.appendChild(button);
})

function pustiPesmu(id) {
    audio.src = pesme[id].path;
    audio.play();

    const buttons = document.querySelectorAll(".pesma")
    buttons.forEach(button => button.classList.remove('active'));
    buttons[id].classList.add('active');
}

play.addEventListener('click', () => {
    if (audio.paused){
        pustiPesmu(id);
    }
    else {
        audio.pause();
    }
});

next.addEventListener('click', () => {
    id = (id + 1) % pesme.length;
    pustiPesmu(id);
});

prev.addEventListener('click', () => {
    id = (id - 1 + pesme.length) % pesme.length;
    pustiPesmu(id);
});