let numero1 = 20;
let numero2 = 20;
let numero3 = 2;

if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
    console.log("Não há um número que seja maior que todos");
}else{
    if (numero1 > numero2 && numero1 > numero3) {
        console.log("O primeiro número é o maior");
    }else if (numero2 > numero1 && numero2 > numero3) {
        console.log("O segundo número é o maior");
    }else{
        console.log("O terceiro número é o maior");
    }
}
