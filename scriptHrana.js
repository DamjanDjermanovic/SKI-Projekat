const inputiMeni = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
const ispisCene = document.querySelector("#cena");

let cena;

function promeniCenu() {
    cena = 0.00;
    inputiMeni.forEach((item) => {
        if (item.checked){
            cena += parseFloat(item.value);
        }
    });
    ispisCene.textContent = "CENA: " + cena.toFixed(2) + " rsd";
};

promeniCenu();

const infoForma = document.querySelector("#info-forma");
const imePrezime = document.querySelector("#imePrezime");
const adresa = document.querySelector("#adresa");
const brTel = document.querySelector("#brTel");
const inputGreska = document.querySelector("#inputGreska")

infoForma.addEventListener('submit', e => {
    let poruke = [];

    if (imePrezime.value === '' || imePrezime.value == null) {
        poruke.push('Ime i prezime su obavezni');
    }

    if (adresa.value === '' || imePrezime.value == null) {
        poruke.push('Adreska je obavezna');
    }

    if (brTel.value.length < 9 || brTel.value.length > 11) {
        poruke.push('Pogrešno unesen broj telefona')
    }

    if (poruke.length > 0) {
        inputGreska.innerText = poruke.join(', ') + '!';
        e.preventDefault();
    }
});