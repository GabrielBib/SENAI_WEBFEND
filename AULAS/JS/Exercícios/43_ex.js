let codigoProduto = 1;
let mensagem = "";

switch (codigoProduto) {
    case 1:
        mensagem = "Maçã - R$ 99,99";
        break;
    case 2:
        mensagem = "Pera - R$ 0,50";
        break;
    case 3:
        mensagem = "Abacaxi - R$ 1000,00";
        break;
    case 4:
        mensagem = "Sofá - R$ 200,00";
        break;
    case 5:
        mensagem = "Carne suína - R$ 20,00";
        break;
    default:
        mensagem = "Erro"
        break;
}

console.log(mensagem);