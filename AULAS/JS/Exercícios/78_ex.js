let num = 28;
let soma = 0;

for (i = 1; i < num; i++){
    if (num % i === 0){
        soma += i;
    }
}

if (soma == num){
    console.log(`Seu número é um número perfeito!`);
}else{
    console.log(`Seu número não é um número perfeito ;-;`);
}
