const produto = {
    nome: "Tv",
    preco: 2000,
    desconto: 0.80,
    calcularPrecoComDesconto: function() {
        console.log(`O valor do produto com desconto é de R$${this.preco * this.desconto}`);
    }
}

produto.calcularPrecoComDesconto();