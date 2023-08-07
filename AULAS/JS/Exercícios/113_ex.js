let pegaClasse = document.querySelector(".mostraTexto");

let num = prompt("Digite um número para retorar a sequencia de fibonacci").split("");
let arrayNumber = num.map(str => parseInt(str));
let novoArray = [0, 1];

function gerarSequenciaFibonacci(numero) {
    for(let i = 0; i < numero; i++){
        for(let j = 1; j <= numero; j++){
            let calcula = numero[i] + numero[j];
            novoArray.push(calcula);
        }
    }
}

pegaClasse.innerHTML = gerarSequenciaFibonacci(arrayNumber);