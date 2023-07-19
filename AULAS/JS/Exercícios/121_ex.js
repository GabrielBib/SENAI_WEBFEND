const valorInput1 = document.getElementById("valor1"),
      valorInput2 = document.getElementById("valor2"),
      calcula = document.getElementById("btn"),
      reseta = document.getElementById("btnReset"),
      resultado = document.getElementById("resultado"),
      operacao = document.getElementById("operacao");


function calcular() {
    const valor1 = Number(valorInput1.value),
          valor2 = Number(valorInput2.value)

    if (operacao.value === "somar"){
        resultado.innerHTML = valor1 + valor2;
    } else if (operacao.value === "subtrair"){
        resultado.innerHTML = valor1 - valor2;
        
    } else if (operacao.value === "multiplicar"){
        resultado.innerHTML = valor1 * valor2;
        
    } else if (operacao.value === "dividir"){
        resultado.innerHTML = valor1 / valor2;
        
    }
}

reseta.addEventListener("click", () => {
    valorInput1.value = "";
    valorInput2.value = "";
    resultado.innerHTML = "0";
})
