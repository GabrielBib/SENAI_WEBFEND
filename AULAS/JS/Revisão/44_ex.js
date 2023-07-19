let str = "Pedro".toLocaleLowerCase();
let contador = 0;


for (i = 0; i < str.length; i++){
    if (((str[i]) == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")){
        contador ++;
    };
};

console.log(`Há ${contador} vogais!`);