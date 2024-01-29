const umotvorine = [
    "Gvožđe se kuje dok je vruće.",
    "Lepa reč gvozdena vrata otvara.",
    "Ko se ne namuči, taj se ne nauči.",
    "Ko mudro ćuti, lepo govori.",
    "Ko rano rani dve sreće grabi."
]

function prikaziUmotvorinu() {
    const x = Math.floor(Math.random() * umotvorine.length);
    const umotvorina = document.getElementById("umotvorina");

    umotvorina.textContent = umotvorine[x];
}

prikaziUmotvorinu();

setInterval(prikaziUmotvorinu, 10000);