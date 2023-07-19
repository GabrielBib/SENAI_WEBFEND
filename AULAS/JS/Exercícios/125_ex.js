const data = new Date();
const ano = data.getFullYear();

let verifica = ((ano % 4 == 0) && (ano % 400 == 0 || ano % 100 != 0) ) ? ("O ano atual é ano bissexto") : ("O ano atual não é um ano bissexto");

console.log(verifica);