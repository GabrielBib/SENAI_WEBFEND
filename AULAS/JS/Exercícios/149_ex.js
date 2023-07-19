let obj1 = {
    diaSemana: "segunda-feira",
    dia: 10,
    mes: "Janeiro"
};

let obj2 = {
    ano: 2023,
    bissexto: "sim"
};

let mergedObj = {...obj1, ...obj2};

console.log(mergedObj);