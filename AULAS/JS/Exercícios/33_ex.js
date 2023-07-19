let pesoK = 80;
let alturaM = Math.pow(1.75, 2);
let calculaIMC = (pesoK / alturaM).toFixed(1);

if (calculaIMC < 18.5) {
    console.log(`Seu IMC é ${calculaIMC}. Você esta Abaixo do peso normal.`);
}else if (calculaIMC < 24.9 && calculaIMC >= 18.5) {
    console.log(`Seu IMC é ${calculaIMC}. Você esta com Peso normal.`);
}else if (calculaIMC < 29.9 && calculaIMC > 25) {
    console.log(`Seu IMC é ${calculaIMC}. Você esta com Excesso de peso.`);
}else if (calculaIMC < 34.9 && calculaIMC > 30) {
    console.log(`Seu IMC é ${calculaIMC}. Você esta com Obesidade classe I.`);
}else if (calculaIMC < 35 && calculaIMC > 39.9) {
    console.log(`Seu IMC é ${calculaIMC}. Você esta com Obesidade classe II.`);
}else{
    console.log(`Seu IMC é ${calculaIMC}. Você esta com Obesidade classe III.`);
}
