let array = [1, 5, 2, 4, 5, 0, 0, 20, 5, 20];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]){
            array.splice(j, 1);
            j--
        }
    }
}

console.log(array);