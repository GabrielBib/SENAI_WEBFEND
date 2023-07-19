const carro = {
    marca: "mclaren",
    modelo: "GT - v8 turbo",
    ano: 2019,
    cor: "Azul marinho",
    ligar: function() {
        console.log(`O carro de modelo ${this.modelo} ${this.cor} de ano ${this.ano} esta ligado!`);
    }
}

carro.ligar();