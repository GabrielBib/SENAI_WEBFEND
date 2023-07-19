let pegaClasse = document.querySelector(".mostraTexto");

function maiorPalavra(array) {
    let maisLonga = "";
    for (i = 0; i < array.length; i++){
        if (array[i].length > maisLonga.length){
            maisLonga = array[i];
        }
    }
    return maisLonga;
}

let criaArray = prompt("Crie uma lista com palavras separando-as por ,").split(",");

pegaClasse.innerHTML = maiorPalavra(criaArray);