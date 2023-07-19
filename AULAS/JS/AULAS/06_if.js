let idade = 17;

if (idade >= 18) {
    console.log("Você pode dirigir");
}
else {
    console.log("Você não pode dirigir ");
}

let numero = 0;

if (numero > 0) {
    console.log(`O número ${numero} é positivo`);
}
else if (numero < 0) {
    console.log(`O número ${numero} é positivo`);
}
else {
    console.log(`O número é ${numero}`);
}

let senha = "senai123";

if (senha == "" || senha == " ") {
    console.log("Erro");
}
else {
    if (senha != "senai123" && senha != "Senai123" && senha != "SENAI123") {
        console.log("Senha incorreta");
    }
    else {
        console.log("Senha correta");
    }
}

let senha1 = "bruno";
let senha2 = "Bruno";

if (senha1 == senha2) {
    console.log("As senhas são iguais");
}
else {
    console.log("As senhas são diferentes");
}

console.log("FIM");