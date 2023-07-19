let numero = 52;

if (numero % 3 == 0 && numero % 5 == 0){
    console.log("Seu número é multiplo de 3 e 5");
}else if (numero % 3 == 0) {
    console.log("Seu número é multiplo de 3");
}else if (numero % 5 == 0) {
    console.log("Seu número é multiplo de 5");
}else{
    console.log("Seu número não é multiplo de 3 nem de 5");
}