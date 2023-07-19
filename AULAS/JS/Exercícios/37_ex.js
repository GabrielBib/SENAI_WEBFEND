let numero = 24;

if (numero % 4 == 0 && numero % 6 == 0 && numero % 9 != 0){
    console.log("Seu número é divisivel por 4 e por 6, mas não por 9");
}else if (numero % 4 == 0 && numero % 6 != 0 && numero % 9 != 0) {
    console.log("Seu número é apenas divisivel por 4");
}else if (numero % 4 != 0 && numero % 6 == 0 && numero % 9 != 0) {
    console.log("Seu número é apenas divisivel por 6");
}else{
    console.log("Seu número não é divisivel por 4 nem por 6");
}