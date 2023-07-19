let nums = [];
let num;
let numeros = document.querySelector(".numeros");

num = Number(prompt("Digite números, para parar digite um número negativo"));

while (num > -1) {
    nums.push(num);
    num = Number(prompt("Digite números, para parar digite um número negativo"));
    numeros.innerHTML += num + "<br>"
}

console.log(nums);
