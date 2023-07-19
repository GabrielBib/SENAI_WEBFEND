let pegaClasse = document.querySelector(".mostraTexto");

function ordenarArray(a, b) {
    return (a - b);
}

let recebeArray = prompt("Escreva uma lista de número separando-os cada, por ','").split(",");

pegaClasse.innerHTML = ordenarArray(Number(recebeArray));