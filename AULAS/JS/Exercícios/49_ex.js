let animal = 1;
let mensagem = "";

switch (animal) {
    case 1:
        mensagem = "Ovelha. Curiosidade: Na linguagem popular, podemos dizer que elas são dinossauros, porque são animais oficialmente domesticados há mais de 13.000 anos. ";
        break;
    case 2:
        mensagem = "Leão. Curiosidade: Quando um leão ruge, pode-se ouvir o som que ele emite de uma distância de 8 quilômetros.";
        break;
    case 3:
        mensagem = "Axolote. Curiosidade: Esse animal consegue fazer a regeneração do corpo, inclusive de regiões do sistema nervoso central.";
        break;
    case 4:
        mensagem = "Furão. Curiosidade: Estudiosos de comportamento animal já descreveram que os furões e arminhos possuem o hábito de dançar quando se sentem ameaçados. Mas essa é uma espécie de dança hipnótica que faz com que o predador entre em transe.";
        break;
    case 5:
        mensagem = "Raposa. Curiosidade: Em geral, esses animais são bons caçadores, mas têm uma maneira típica de capturar certas presas, como roedores, que consiste em saltar, cair com força e verticalmente sobre a vítima, o que a deixa sem vida. Esta técnica é aprendida por raposas desde tenra idade.";
        break;
    default:
        mensagem = "Erro"
        break;
}

console.log(mensagem);