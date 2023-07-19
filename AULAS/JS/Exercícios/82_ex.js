let array = ["pão", "bola", "italo", "henrique", "Garrafa", "paralelepípedo"];
let maior = "";

for (i = 0; i < array.length; i++){
    if (array[i].length > maior.length){
        maior = array[i];
    }
}

console.log(maior);