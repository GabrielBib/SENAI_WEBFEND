let mostraParImpar = document.querySelector(".mostraTexto");

function parImpar(a) {
    let resposta = "";
    if (a % 2 == 0){
        resposta = "par";
        return resposta;
    } else {
        resposta = "impar";
        return resposta;
    }
}

let num = Number(prompt("Digite um número!"));

mostraParImpar.innerHTML = `Seu número é ${parImpar(num)}`;