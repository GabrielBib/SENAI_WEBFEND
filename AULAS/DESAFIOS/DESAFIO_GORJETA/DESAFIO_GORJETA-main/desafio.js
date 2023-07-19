const valorInputP = document.getElementById("input"),
    valorInputCB = document.getElementById("customB"),
    valorInputNP = document.getElementById("numberP"),
    botoes = document.querySelector(".button"),
    resultado = document.querySelector(".resultado");


function calculaValor(porcentagem) {

    if (valorInputCB.value === ""){
        let valorFinal = Number(valorInputP.value);
        let qtdPessoa = Number(valorInputNP.value);
        let calculo = valorFinal * porcentagem / qtdPessoa;
    
        if (calculo == Infinity || calculo == 0) {
            valorInputNP.value = 1;
        } else {
            resultado.innerHTML = calculo.toFixed(2);
        }
    }else {
        alert("Remova")
    }


};

function reset() {
    valorInputP.value = "";
    valorInputCB.value = "";
    valorInputNP.value = "";
    resultado.value = "";
};