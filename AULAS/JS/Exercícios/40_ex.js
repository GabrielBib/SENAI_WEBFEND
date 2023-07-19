let temperaturaC = -300;
let calculaTemperaturaF = (temperaturaC * 1.8) + 32;

if (temperaturaC < -273.15) {
    console.log("A menor temperatura em Celsius é de -273.14");
}else{
    console.log(`Sua temperatura em Fahrenheit é de ${calculaTemperaturaF}°F`);
}
