let filme = 1;
let mensagem = "";

switch (filme) {
    case 1:
        mensagem = "Super Mario Bros. O Filme - Classificação Indicativa: Livre";
        break;
    case 2:
        mensagem = "Os Mercenários 2 - Classificação Indicativa: 16 anos";
        break;
    case 3:
        mensagem = "Kingsman: Serviço Secreto - Classificação Indicativa: 16 anos";
        break;
    case 4:
        mensagem = "Avatar - Classificação Indicativa: 12 anos";
        break;
    case 5:
        mensagem = "Tá Dando Onda - Classificação Indicativa: Livre";
        break;
    default:
        mensagem = "Erro"
        break;
}

console.log(mensagem);