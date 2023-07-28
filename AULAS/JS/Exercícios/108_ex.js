let capturaClasse = document.querySelector(".mostraTexto");

function retornaInvertido(string) {
    let invertido = "";
    for (let i = string.length - 1; i >= 0; i--){
        invertido += string[i];
    }
    return invertido;
}

let recebeString = prompt("Escreva uma palavra ou uma frase, para retornar ao contrário");

capturaClasse.innerHTML = retornaInvertido(recebeString);