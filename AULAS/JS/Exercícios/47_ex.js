let fruta = 1;
let mensagem = "";

switch (fruta) {
    case 1:
        mensagem = "Maçã - Vermelha";
        break;
    case 2:
        mensagem = "limão - Verde";
        break;
    case 3:
        mensagem = "Abacaxi - Amarelo";
        break;
    case 4:
        mensagem = "Laranja - Laranja";
        break;
    case 5:
        mensagem = "Uva - Roxo";
        break;
    default:
        mensagem = "Erro"
        break;
}

console.log(mensagem);