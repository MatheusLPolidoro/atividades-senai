// Autor: Matheus Latancio Polidoro | data: 16/09/2021 | Senai Front-end


// definição de variáveis
var usuario, nomeEvento, cadastro;
var anoNasc, anoAtual, dataAtual, dataEvento, idade;

// pegar a data atual do sistema
var data = new Date(),

anoAtual = data.getFullYear(),
dia = String(data.getDate()).padStart(2, '0'),
mes = String(data.getMonth() + 1).padStart(2, '0'),

dataAtual = dia + mes + anoAtual;

var qtdParticipantes = 0; // banco de dados

// entrada de dados
usuario = window.prompt('Bem vindo! informe seu nome: ');
anoNasc = window.prompt('Digite o ano em que nasceu: ');

//processamento
idade = anoAtual - anoNasc;

if (idade > 17) {
    // entrada de dados
    cadastro = window.prompt(usuario + " deseja cadastrar um evento novo ou entrar em um existente?\n ['N' para NOVO e 'E' para EXISTENTE]: ");
    cadastro = cadastro.toUpperCase();
    if (cadastro == "N") {
        dataEvento = window.prompt('Digite a data do evento que deseja programar: ');
        dataEvento = dataEvento.replace("/","");
        if (dataEvento > dataAtual) {
            nomeEvento = window.prompt('Digite um nome para seu evento: ');
            // saída de dados
            window.alert(usuario + ', o evento ' + nomeEvento + ' foi cadastrado com sucesso!');
        } else {
            // saída de dados
            window.alert('Esse evento não será permitido devido data inválida.');
        }
    } else {
        if (cadastro == 'E') {
            nomeEvento = window.prompt(usuario + ' digite o nome do envento que deseja ingressar: ');
            if (validarEvento(nomeEvento) == true) {
                // saída de dados
                window.alert('Lista de participantes e palestrantes do evento ' + nomeEvento);
                listaEvento(nomeEvento);
                if (qtdParticipantes < 100) {
                    // saída de dados
                    window.alert(usuario + ' seu cadastro no evento ' + nomeEvento + ' foi realizado com sucesso!');
                    qtdParticipantes = qtdParticipantes + 1;
                } else {
                    // saída de dados
                    window.alert('O evento ' + nomeEvento + ' Já está lotado, seu ingresso não será possível.');
                }
            } else {
                // saída de dados
                window.alert('Evento invalido!');
            }
        } else {
            // saída de dados
            window.alert('Opção invalida, processo encerrado.');
        }
    }
} else {
    // saída de dados
    window.alert(usuario + ' seu cadastro não é permitido devido idade mínima de 18 anos.');
}

function listaEvento(nomeEvento) {
//implementar listagem de eventos e participantes
}

function validarEvento(nomeEvento) {
//implementar validação de data e nome do evento
return true;
}

