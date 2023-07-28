let capturaClasse = document.querySelector(".mostraTexto");

function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += Number(array[i]);
    }
    return soma;
}

let recebeArray = prompt("Digite uma lista de números pra saber a soma entre eles, separe cada número por ', '").split(",");

capturaClasse.innerHTML = `A soma dos números é: ${somaArray(recebeArray)}`