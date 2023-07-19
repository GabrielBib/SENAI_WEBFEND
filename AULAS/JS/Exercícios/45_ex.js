let posicaoPodio = 1;
let mensagem = "";

switch (posicaoPodio) {
    case 1:
        mensagem = "Primeira posição, Brasil com 1000 pontos.";
        break;
    case 2:
        mensagem = "Segunda posição, Russia com 700 pontos.";
        break;
    case 3:
        mensagem = "Terceira posição, Argentina com 500 pontos.";
        break;
    default:
        mensagem = "Erro";
        break;
}

console.log(mensagem);