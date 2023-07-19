let string = "Socorram-me, subi no ônibus em Marrocos";
let aoContrario = "";

for (i = string.length -1; i < string.length; i--){
    if (i == -1){
        break;
    }
    aoContrario += string[i];
}

console.log(aoContrario);