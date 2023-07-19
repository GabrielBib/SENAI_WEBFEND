// let palavras = [];
// let palavra;
// let i = 0;
// let todasPalavras = document.querySelector(".todasPalavras");

// palavra = prompt("Digite uma palavra");
// todasPalavras.innerHTML += palavra + "<br>";

// while (palavras.includes(palavra) == true) {
//     palavra = prompt("Digite uma palavra");
//     palavras.push(palavra)
//     todasPalavras.innerHTML += palavra + "<br>";
// }

// console.log(palavras);

let palavras = [];
let palavra;
let todasPalavras = document.querySelector(".todasPalavras");
let todasPalavrasTexto = "";

while (true) {
  palavra = prompt("Digite uma palavra (ou 'sair' para encerrar):");

  if (palavras.includes(palavra) || palavra.toLocaleLowerCase() == "sair") {
    console.log("Palavra repetida encontrada!");
    break;
  }

  palavras.push(palavra);
  todasPalavrasTexto += palavra + "<br>";
}

todasPalavras.innerHTML = todasPalavrasTexto;

console.log("Palavras digitadas:");
console.log(palavras);
