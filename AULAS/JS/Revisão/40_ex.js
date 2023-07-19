let numbers = [2, 4, 6, 1, 8];

let i = 0;

while (i < numbers.length){
    if (numbers[i] %2 != 0){
        console.log(`Foi encontrado o número ${numbers[i]} na lista`);
        break;
    }
    i++
}