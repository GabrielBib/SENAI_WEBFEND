let valorPresente = 1500;
let periodo = 12;
let juros = 2/100;

let calculaValorFuturo = valorPresente * Math.pow((1 + juros), periodo);

console.log(calculaValorFuturo);