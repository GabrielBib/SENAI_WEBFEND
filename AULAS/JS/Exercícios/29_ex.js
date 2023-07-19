let letra = "                  a                    ";
letra = (letra.toLocaleUpperCase()).trim();

if ((letra == "A") || (letra == "E") || (letra == "I") || (letra == "O") || (letra == "U")) {
    console.log("Sua letra é uma vogal");
}else{
    console.log("Sua letra não é uma vogal");
}