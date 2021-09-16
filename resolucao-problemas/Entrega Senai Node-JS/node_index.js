// Autor: Matheus Latancio Polidoro | data: 16/09/2021 | Senai Front-end

// Observação importante, essa versão funciona apenas rodando com o Node e com a biblioteca readline-sync. Por favor executar o comando : npm install readline-sync no terminal caso não esta com as pastas da biblioteca disponiveis no diretorio atual.Também fiz uma versão desse mesmo programa para rodar pelo navegador, substitutindo a entrada de dados pelo comando: window.prompt(); e a saída de dados por window.alert();

const rl = require('readline-sync'); // responsavel pelo input da leitura (requer biblioteca externa)

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
usuario = rl.question('Bem vindo! informe seu nome: ');
anoNasc = rl.question('Digite o ano em que nasceu: ');

//processamento
idade = anoAtual - anoNasc;

if (idade > 17) {
    // entrada de dados
    cadastro = rl.question(usuario + " deseja cadastrar um evento novo ou entrar em um existente? ['N' para NOVO e 'E' para EXISTENTE]: ");
    cadastro = cadastro.toUpperCase();
    if (cadastro == "N") {
        dataEvento = rl.question('Digite a data do evento que deseja programar: ');
        dataEvento = dataEvento.replace("/","");
        if (dataEvento > dataAtual) {
            nomeEvento = rl.question('Digite um nome para seu evento: ');
            // saída de dados
            console.log(usuario + ' evento ' + nomeEvento + ' cadastrado com sucesso!');
        } else {
            // saída de dados
            console.log('Esse evento não será permitido devido data inválida.');
        }
    } else {
        if (cadastro == 'E') {
            nomeEvento = rl.question(usuario + ' digite o nome do envento que deseja ingressar: ');
            if (validarEvento(nomeEvento) == true) {
                // saída de dados
                console.log('Lista de participantes e palestrantes do evento ' + nomeEvento);
                listaEvento(nomeEvento);
                if (qtdParticipantes < 100) {
                    // saída de dados
                    console.log(usuario + ' seu cadastro no evento ' + nomeEvento + ' foi realizado com sucesso!');
                    qtdParticipantes = qtdParticipantes + 1;
                } else {
                    // saída de dados
                    console.log('O evento ' + nomeEvento + ' Já está lotado, seu ingresso não será possível.');
                }
            } else {
                // saída de dados
                console.log('Evento invalido!');
            }
        } else {
            // saída de dados
            console.log('Opção invalida, processo encerrado.');
        }
    }
} else {
    // saída de dados
    console.log(usuario + ' seu cadastro não é permitido devido idade mínima de 18 anos.');
}


function listaEvento(nomeEvento) {
//implementar listagem de eventos e participantes
}

function validarEvento(nomeEvento) {
//implementar validação de data e nome do evento
return true;
}

