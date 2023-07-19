let animais = [];
let animal;
let listaAnimais = document.querySelector(".animais");
let i = 0;

animal = prompt("Escreva nomes de animais. Quando acabar digite sair").toLocaleLowerCase().trim();

while (animal !== "sair") {
    animais.push(animal);
    animal = prompt("Escreva nomes de animais. Quando acabar digite sair");
    i++;
}

let listaAnimaisHTML = "";
for (let j = 0; j < animais.length; j++) {
  if (j === animais.length - 1) {
    listaAnimaisHTML += animais[j];
  } else {
    listaAnimaisHTML += animais[j] + ", ";
  }
}

listaAnimais.innerHTML = listaAnimaisHTML;

console.log(animais);
