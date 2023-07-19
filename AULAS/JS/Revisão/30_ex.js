let estacao = "primavera";
let mensagem = "";

switch (estacao) {
  case "verao":
    mensagem = "Verão: 22 de dezembro a 20 de março";
    break;
  case "outubro":
    mensagem = "Outono: 20 de março a 21 de junho";
    break;
  case "inverno":
    mensagem = "Inverno: 21 de junho a 23 de setembro";
    break;
  case "primavera":
    mensagem = "Primavera: 22/23 de setembro a 22 de dezembro";
    break;
  default:
    mensagem = "Estação inválida";
}

console.log(mensagem);