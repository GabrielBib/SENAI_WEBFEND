let lista = [1, 2, 3, 1, 3, 1, 3, 3, 3, 1];
let num = 1;
let i = 0;
let quantidade = 0;

while (i < lista.length){
    if(lista[i] == num){
        quantidade++
    }
    i++
}

console.log(`O seu número aparece ${quantidade} vezes na lista`);
