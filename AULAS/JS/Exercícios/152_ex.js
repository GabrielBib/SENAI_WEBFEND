let nums = [1, 2, 3, 4, 5, 20, 7, 8, 9, 10];
let soma = 0;

nums.forEach(function(num){
    soma += num;
})

let media = soma / nums.length;
console.log(media);