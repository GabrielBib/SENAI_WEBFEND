let numAdivinha = 5;
let numAleatorio;


do {
    numAleatorio = Math.floor(Math.random() * 10 + 1);
    if (numAleatorio != numAdivinha){
    console.log(`${numAleatorio} Errou!`);
    }else{
        console.log(`${numAleatorio} Acertou!`);
    }

} while (numAleatorio != numAdivinha)