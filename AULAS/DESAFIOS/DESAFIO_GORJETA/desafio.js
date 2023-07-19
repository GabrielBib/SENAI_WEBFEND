const valorInputP = document.getElementById("input"),
    valorInputCB = document.getElementById("customB"),
    valorInputNP = document.getElementById("numberP"),
    botoes = document.querySelector("button"),
    resultado = document.querySelector("resultado");


function calculaValor(porcentagem) {
    let calculo = Number(valorInputP.value) * porcentagem / Number(valorInputNP.value);
    resultado.value += calculo;
};

function reset() {
    valorInputP.value = "";
    valorInputCB.value = "";
    valorInputNP.value = "";
    resultado.value = "";
};