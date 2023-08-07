let pegaClasse = document.querySelector(".mostraTexto");

let base = Number(prompt("digite a base"));
let expoente = Number(prompt("digite o expoente"));

function calcularPotencia(a, b) {
    return (Math.pow(base, expoente));
}

pegaClasse.innerHTML = calcularPotencia(base, expoente);