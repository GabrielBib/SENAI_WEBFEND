let array = [2, 4, 5, 1, 7, 3];
let menorQ = 5;

for (i = 0; i < array.length; i++){
    if (array[i] < menorQ){
        array.splice(i, 1);
        i--
    }
}

console.log(array);