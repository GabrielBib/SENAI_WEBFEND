let capturaClasse = document.querySelector(".mostraTexto");

function retornaPositivos(array) {
    let transformaEmArray = array.split(",");
    let novoArray = [];
    for (let i = 0; i < transformaEmArray.length; i++) {
        if (Number(transformaEmArray[i]) > 0){
            novoArray.push(transformaEmArray[i]);
        }
    }
    return novoArray;
}

let recebeArray = prompt("Escreva uma lista de números, positivos e negativos, separando-os por ',' ira retornar só os positivos!");

capturaClasse.innerHTML = retornaPositivos(recebeArray);