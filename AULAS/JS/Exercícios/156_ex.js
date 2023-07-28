let numsP = [2, 4, 3, 6, 5, 7];

numsP.forEach(function(numero){
    if (numero < 0){
        console.log("Há um número negativo no array");
    }else {
        console.log("Só a números positivos no array");
    }
})