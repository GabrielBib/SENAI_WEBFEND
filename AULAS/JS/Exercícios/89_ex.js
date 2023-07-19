let array1 = [1, 2, 3, 4, 5 ,6];
let array2 = [6, 5, 4, 3, 2, 1];
let array3 = [];

for (i = 0; i < array1.length; i++){
    array3.push(array1[i] + array2[i])
}

console.log(array3);