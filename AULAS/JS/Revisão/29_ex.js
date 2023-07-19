let codigoCor = 1;
let mensagem = "";

switch (codigoCor) {
  case 1:
    mensagem = "Vermelho";
    break;
  case 2:
    mensagem = "Verde";
    break;
  case 3:
    mensagem = "Azul";
    break;
  case 4:
    mensagem = "Branco";
    break;
  case 5:
    mensagem = "Marrom";
    break;
  case 6:
    mensagem = "Preto";
    break;
  case 7:
    mensagem = "Amarelo";
    break;
  default:
    mensagem = "Código inválido";
}

console.log(mensagem);