let capturaClasse = document.querySelector(".mostraTexto");

function ePrimo(num) {
    let divisor = 0;
    for (let i = 1;i <= num; i++) {
        if (num % i === 0){
            divisor++
        }
    }

    if (divisor === 2) {
        return true;
    } else {
        return false;
    }
}

let recebeNumero = Number(prompt("O número é primo?"));

capturaClasse.innerHTML = ePrimo(recebeNumero)