let mostraContagem = document.querySelector(".mostraTexto");

function contaLetras(string) {
    let palavra = string;
    let contagem = palavra.length;
    return contagem;
}

let pedePalavra = prompt("Digite uma palavra!");

mostraContagem.innerHTML = `Sua palavra tem ${contaLetras(pedePalavra)} letras de tamanho!`;