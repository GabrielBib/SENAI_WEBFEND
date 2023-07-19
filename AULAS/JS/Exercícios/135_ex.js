const pessoa = {
    nome: "Gabriel",
    idade: 19,
    profissao: "Garoto de programa",
    email: "gabrielreidelas@uol.com",
    apresentação: function(){
        console.log(`O meu nome é ${this.nome}, trabalho atualmente como ${this.profissao}`);
    }
};