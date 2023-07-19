let numero = 10;

if (numero % 2 == 0 && numero % 3 == 0) {
    console.log("Seu número é divisivel por 2 e por 5");
}else if (numero % 2 == 0) {
    console.log("Seu número é apenas divisivel por 2");
}else if (numero % 3 == 0) {
    console.log("Seu número é apenas divisivel por 3");
}else{
    console.log("Seu número não é divisivel por 2 nem por 3");
}