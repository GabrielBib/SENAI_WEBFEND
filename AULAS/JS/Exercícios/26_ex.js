let lado1 = 5;
let lado2 = 2;
let lado3 = 5;

if ( lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
    console.log("Esse triangulo é escaleno");
}else if((lado1 == lado2 && lado1 != lado3) || (lado1 == lado3 && lado1 != lado2) || (lado2 == lado3 && lado2 != lado1)) {
    console.log("Esse triangulo é isóceles");
}else{
    console.log("Esse triangulo é equilátero");
}