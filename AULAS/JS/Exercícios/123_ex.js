const data = new Date();
const mes = data.getMonth();
let verifica = ((mes + 1) % 2 == 0) ? ("O mês atual é par") : ("O mês atual é impar");

console.log(verifica);