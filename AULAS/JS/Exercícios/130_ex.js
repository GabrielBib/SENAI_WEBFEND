const dataAtual = new Date();
dataAtual.setHours(9);
dataAtual.setMinutes(0);

const dataFormatada = dataAtual.toLocaleString();
console.log(dataFormatada);