let diaSemana = 1;
let mensagem = "";

switch (diaSemana) {
    case 1:
        mensagem = "Domingo, fim de semana";
        break;    
    case 1:
        mensagem = "Segunda-feira, dia útil";
        break;    
    case 1:
        mensagem = "Terça-feira, dia útil";
        break;    
    case 1:
        mensagem = "Quarta-feira, dia útil";
        break;   
    case 1:
        mensagem = "Quinta-feira, dia útil";
        break;  
    case 1:
        mensagem = "Sexta-feira, dia útil";
        break;   
    case 7:
        mensagem = "Sábado, fim de semana";
        break; 
    default:
        mensagem = "Erro"
        break;  
}

console.log(mensagem);