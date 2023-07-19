let numAleatori;
let par = 0;
let impar = 0;

do{
    numAleatorio = Math.floor(Math.random() * 100);
    if (numAleatorio % 2 == 0){
        par++
    }else{
        impar++
    }
}while (numAleatorio != 0)

console.log(`${par} números pares e ${impar} números ímpares`);