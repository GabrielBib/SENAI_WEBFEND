// let mostraArray = document.querySelector(".mostraTexto")

// function retornaMenor(array) {
//     let menorValor = array[0];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < menorValor){
//             menorValor = array[i];
//         }
//     }
//     return menorValor;
// }

// let recebeArray = prompt("Faça uma lista de números, dividindo-os por espaço");
// let divideLista = recebeArray.split(" ");
// divideLista = Number(divideLista);

// mostraArray.innerHTML = `O menor número da sua lista é o número ${retornaMenor(divideLista)}`;

// console.log(divideLista);

let mostraArray = document.querySelector(".mostraTexto");

function retornaMenor(array) {
    let menorValor = Number(array[0]);
    let divideListaNumeros = [];

    for (let i = 0; i < array.length; i++) {
        let numero = Number(array[i]);
        divideListaNumeros.push(numero);

        if (numero < menorValor) {
            menorValor = numero;
        }
    }

    console.log(divideListaNumeros);
    return menorValor;
}

let recebeArray = prompt("Faça uma lista de números, dividindo-os por espaço");
let divideLista = recebeArray.split(" ");

mostraArray.innerHTML = `Os números da sua lista são: ${retornaMenor(divideLista)}`;

// Meu código

function encontrarMenorNumero(array) {
    return Math.min(...array);
}

const numeros = prompt("Digite uma lista de números separados por vírgula:").split(",").map(Number);

console.log(encontrarMenorNumero(numeros));

// Exemplo 1
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

// Exemplo 2
function soma(a, b, c) {
    return a + b + c;
  }
  
  const numeros = [1, 2, 3];
  const resultado = soma(...numeros);
  
  console.log(resultado); // Output: 6
  
