const valorInput = document.getElementById("visor"),
    botoes = document.querySelector("button");


function insereValor(num) {
    let tela = num;
    valorInput.value += tela;
}

function reset() {
    valorInput.value = "";
}

function apaga() {
    valorInput.value = valorInput.value.substring(0, valorInput.value.length)
}

function calcula() {
    valorInput.value = eval(valorInput.value);
}
