const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`);

