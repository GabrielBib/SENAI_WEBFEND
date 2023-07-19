let pesoA = 3;
let pesoB = 4;
let pesoC = 2;

let notaA = 10;
let notaB = 5;
let notaC = 7;

let calculaNumerador = (pesoA * notaA) + (pesoB * notaB) + (pesoC * notaC);
let calculaDenominador = pesoA + pesoB + pesoC;
let calculaMediaPonderada = calculaNumerador / calculaDenominador;

console.log(Math.floor(calculaMediaPonderada));