let perguntaSoma = document.querySelector(".mostraTexto");

function somar(a, b) {
    let soma = a + b;
    return soma;
}

let num1 = Number(prompt("Digite o 1° número!"));
let num2 = Number(prompt("Digite o 2° número!"));

perguntaSoma.innerHTML = somar(num1, num2);