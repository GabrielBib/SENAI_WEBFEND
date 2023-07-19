let nums = [1, 5, 32, 2];
let i = 0;
let maior = 0;

while (i < nums.length) {
    if (nums[i] > maior){
        maior = nums[i];
    }
    i++
}

console.log(maior);