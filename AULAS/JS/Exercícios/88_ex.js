let array = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = [];

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        pares.push(array[i]);
    }
}

console.log(`São os elementos pares ${pares}`);