let array = [1, 2, 3, 4, 5, 6];
let contagem = 0;

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        contagem++
    }
}

console.log(`Há ${contagem} números pares`);