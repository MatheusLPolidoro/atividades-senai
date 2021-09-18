// Autor: Matheus Latancio Polidoro | data: 16/09/2021 | Senai Front-end

// definição de variáveis
var usuario, nomeEvento, cadastro, dataNasc, dataAtual, dataEvento, idade;

// pegar a data atual do sistema
let data = new Date()
dataAtual = ((data.getMonth() + 1) + '-' + data.getDate() + '-' + data.getFullYear()).split("-")

// entrada de dados
usuario = window.prompt('Bem vindo! informe seu nome: ')

dataNasc = window.prompt('Digite sua data de nascimento: ').replaceAll("/", "")

dataNasc = (dataNasc.substring(2, 4) + '-' + dataNasc.substring(0, 2) + '-' + dataNasc.substring(4, 8)).split("-")

//processamento da data 
idade = dataAtual[2] - dataNasc[2];
    //Se mes atual for menor que o mes do nascimento, nao fez aniversario ainda;  
    if(parseInt(dataAtual[0]) < parseInt(dataNasc[0])){
        idade--; 
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(parseInt(dataAtual[0]) === parseInt(dataNasc[0])){ 
            if(parseInt(dataAtual[1]) < parseInt(dataNasc[1])){ 
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--; 
            }
        }
    } 

if (idade >= 18) {
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

                var qtdParticipantes = 0; // banco de dados

                if (qtdParticipantes < 100) {
                    // saída de dados
                    window.alert(usuario + ' seu cadastro no evento ' + nomeEvento + ' foi realizado com sucesso!');
                    qtdParticipantes ++;
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

