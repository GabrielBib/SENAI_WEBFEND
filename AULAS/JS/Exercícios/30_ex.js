let salario = 1000.20;

if (salario <= 1000) {
    let aumento = salario * 0.20;
    console.log("Seu aumento foi de 20%: R$" + (aumento).toFixed(2) + ", agora seu salário é " + (salario + aumento).toFixed(2));
}else if (salario > 1000 && salario < 3000) {
    let aumento = salario * 0.15;
    console.log("Seu aumento foi de 15%: R$" + (aumento).toFixed(2) + ", agora seu salário é " + (salario + aumento).toFixed(2));
}else{
    let aumento = salario * 0.10;
    console.log("Seu aumento foi de 10%: R$" + (aumento).toFixed(2) + ", agora seu salário é " + (salario + aumento).toFixed(2));
}