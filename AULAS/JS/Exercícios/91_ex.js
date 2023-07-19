let num = 10;
let array = [0]

for (i = 0; i < num; i++){
    for (j = i + 1; j < i; j++){
        array.push(i + j);
    }
}