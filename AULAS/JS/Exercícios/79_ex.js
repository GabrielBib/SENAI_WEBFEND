let nums = [86, 5, 32, 2];
let maior = 0;

for (i = 0; i < nums.length; i++) {
    if (nums[i] > maior){
        maior = nums[i];
    }
}

console.log(`O ${maior} é o número maior`);