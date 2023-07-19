let nomes = [];
let nome;
let numNomes = 0;
let i = 0;
let nomesss = document.querySelector(".nomesss");

numNomes = Number(prompt("Digite a quantidade de nomes que deseja inserir"));

while (i < numNomes) {
    nome = prompt("Digite um nome");
    nomes.push(nome);
    nomesss.innerHTML += nome + "<br>"
    i++
}

console.log(nomes);