let idade =99;

if (idade > 100) {
    console.log("Press F");
}else if (idade > 18) {
    console.log("Categoria Adulto");
}else{
    if (idade < 8) {
        console.log("Categoria Infantil A");
    }
    if (idade >= 8 && idade <= 10){
        console.log("Categoria Infantil B");
    }
    if (idade >= 11 && idade <= 13) {
        console.log("Categoria Juvenil A");
    }
    if (idade >= 14 && idade <= 17) {
        console.log("Categoria Juvenil B");
    }
}