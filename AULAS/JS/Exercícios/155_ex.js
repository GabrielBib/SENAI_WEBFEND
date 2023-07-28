const pessoas = [
    {
        nome: 'João', 
        idade: 30 
    },
    {
        nome: 'Maria', 
        idade: 25 
    },
    {
        nome: 'Pedro', 
        idade: 40 
    },
];

const nomesPessoas = [];

pessoas.forEach(function(objeto) {
  nomesPessoas.push(objeto.nome);
})

console.log(nomesPessoas);