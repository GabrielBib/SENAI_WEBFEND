const numeroString = "12345";
let soma = 0;

numeroString.split("").forEach(function(numero){
    soma += Number(numero);
});

console.log(soma);