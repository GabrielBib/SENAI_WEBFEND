// let num = 1;
// let numPrimoAte = 10;

// while(num <= numPrimoAte){
//     if (num == 1){
//         console.log(`Seu número ${num} não é primo`);
//     }else if (num == 2 || num == 3 || num == 7){
//         console.log(`Seu número ${num} é primo`);
//     }else if (num % 2 == 0 || num % 3 == 0 || num % 7 == 0 || num % 5 == 0) {
//         console.log(`Seu número ${num} não é primo`);
//     } else {
//         console.log(`Seu número ${num} é primo`);
//     }
//     num++
// } 
//                   Resolvido com If

// Número que ele quer saber
const numero = 83; 

// Contagem de divisões 
let divisoes = 0; 

// Números de 1 até o número escolhido
let i = 1; 

while (i <= numero){
    if(numero % i == 0){ 
        divisoes++
    }
    i++
}

// Números primos só se dividem por 1 e por eles mesmos,
// ou seja o máximo de divisões que terão será dois, entrando assim na próxima condição

if (divisoes === 2){ 
    console.log(`Seu número ${numero} é primo!`);
}else{
    console.log(`Seu número ${numero} não é primo!`);

}