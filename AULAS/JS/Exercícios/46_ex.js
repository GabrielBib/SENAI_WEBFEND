let estadoBrasileiro = 6;
let mensagem = "";

switch (estadoBrasileiro) {
    case 1:
        mensagem = "Amazonas (AM) - Região Norte";
        break;
    case 2:
        mensagem = "Roraima (RR) - Região Norte";
        break;
    case 3:
        mensagem = "Amapá (AP) - Região Norte";
        break;
    case 4:
        mensagem = "Pará (PA) - Região Norte";
        break;
    case 5:
        mensagem = "Tocantins (TO) - Região Norte";
        break;
    case 6:
        mensagem = "Rondônia (RO) - Região Norte";
        break;
    case 7:
        mensagem = "Acre (AC) - Região Norte";
        break;
    case 8:
        mensagem = "Maranhão (MA) - Região Nordeste";
        break;
    case 9:
        mensagem = "Piauí (PI) - Região Nordeste";
        break;
    case 10:
        mensagem = "Ceará (CE) - Região Nordeste";
        break;
    case 11:
        mensagem = "Rio Grande do Norte (RN) - Região Nordeste";
        break;
    case 12:
        mensagem = "Pernambuco (PE) - Região Nordeste";
        break;
    case 13:
        mensagem = "Paraíba (PB) - Região Nordeste";
        break;
    case 14:
        mensagem = "Sergipe (SE) - Região Nordeste";
        break;
    case 15:
        mensagem = "Alagoas (AL) - Região Nordeste";
        break;
    case 16:
        mensagem = "Bahia (BA) - Região Nordeste";
        break;
    case 17:
        mensagem = "Mato Grosso (MT) - Região Centro-Oeste";
        break;
    case 18:
        mensagem = "Mato Grosso do Sul (MS) - Região Centro-Oeste";
        break;
    case 19:
        mensagem = "Goiás (GO) - Região Centro-Oeste";
        break;
    case 20:
        mensagem = "São Paulo (SP) - Região Sudeste";
        break;
    case 21:
        mensagem = "Rio de Janeiro (RJ) - Região Sudeste";
        break;
    case 22:
        mensagem = "Espírito Santo (ES) - Região Sudeste";
        break;
    case 23:
        mensagem = "Minas Gerais (MG) - Região Sudeste";
        break;
    case 24:
        mensagem = "Paraná (PR) - Região Sul";
        break;
    case 25:
        mensagem = "Rio Grande do Sul (RS) - Região Sul";
        break;
    case 26:
        mensagem = "Santa Catarina (SC) - Região Sul";
        break;
    case 27:
        mensagem = "Distrito Federal - Região Centro-Oeste";
        break;
    default:
        mensagem = "Erro";
        break;
}

console.log(mensagem);