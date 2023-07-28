const pessoas = [
    {
        nome: "Gabriel",
        idade: 19
    },
    {
        nome: "Cleitin",
        idade: 4
    },
    {
        nome: "Jorge",
        idade: 20
    }
]

const maioresDeIdade = [];

pessoas.forEach(function(objeto){
    if (objeto.idade > 18){
        maioresDeIdade.push(objeto.nome)
    }
})

console.log(maioresDeIdade);