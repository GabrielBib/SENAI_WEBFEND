let diaSemana = 4;
let mensagem ="";

switch (diaSemana) {
    case 1:
        mensagem ="Domingo - Inglês => Sunday";
        break;
    case 2:
        mensagem ="Segunda-Feira - Russo => Понедельник";
        break;
    case 3:
        mensagem ="Terça-Feira - Latim => Martis";
        break;
    case 4:
        mensagem ="Quarta-Feira - Turco => Çarşamba";
        break;
    case 5:
        mensagem ="Quinta-Feira - Mongol => Пүрэв гараг";
        break;
    case 6:
        mensagem ="Sexta-Feira - Japonês => 金曜日";
        break;
    case 7:
        mensagem ="Sábado - Italiano => Sabato";
        break;
    default:
        mensagem = "Não é um dia da semana";
        break;
}

console.log(mensagem);