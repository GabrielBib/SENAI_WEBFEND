let num = 5;
let max = 5;
let numAleatorio = Math.floor(Math.random() * max + 1);

let casos = num - numAleatorio;

switch (casos) {
    case 0:
        console.log("Parabéns! Você acertou!");
        break;
    case -1: case -2: case -3: case -4:
        console.log(`Você errou, o número a ser adivinhado era maior`);
        break;
    case 1: case 2: case 3: case 4:
        console.log(`Você errou, o número a ser adivinhado era menor`);
        break;
    default:
        console.log("Erro");
        break;
}

console.log(numAleatorio);