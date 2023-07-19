let numPares = [];
let i = 0;
let numPar = 0;

while (i < 20) {
    if (numPar %2 == 0){
        numPares.push(numPar);
    }
    numPar++
    i++
}

console.log(numPares);