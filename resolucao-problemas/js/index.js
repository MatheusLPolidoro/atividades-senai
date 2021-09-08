function principal() {
    var usuario, nomeEvento, cadastro;
    var anoNasc, anoAtual, dataAtual, dataEvento, idade, qtdPart;
    
    var data = new Date();

    anoAtual = data.getFullYear(); //pegar do computador
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    dataAtual = dia + mes + anoAtual; // pegar do computador
    qtdPart = 0; // banco de dados

    // entrada de dados
    usuario = window.prompt('Bem vindo! Por favor entre com seu nome de usuário');
    anoNasc = window.prompt('Digite o ano em que você nasceu:');

    //processamento
    idade = anoAtual - anoNasc;

    if (idade > 18) {
        // entrada de dados
        cadastro = window.prompt(usuario + " você deseja cadastrar um evento novo ou entrar em um existente? [Digite 'N' para NOVO e 'E' para EXISTENTE");
        cadastro = cadastro.toUpperCase();
        if (cadastro == "N") {
            dataEvento = window.prompt('Digite a data do evento que deseja programar: ');
            dataEvento = dataEvento.replace("/","");
            if (dataEvento > dataAtual) {
                nomeEvento = window.prompt('Digite um nome para seu evento');
                window.alert(usuario + ' evento ' + nomeEvento + ' cadastrado com sucesso!');
            } else {
                window.alert('Esse evento não será permitido devido data inválida.');
            }
        } else {
            if (cadastro == 'E') {
                nomeEvento = window.prompt(usuario + ' digite o nome do envento que você deseja ingressar');
                if (validarEvento(nomeEvento) == true) {
                    window.alert('Lista de participantes e palestrantes do evento ' + nomeEvento);
                    listaEvento(nomeEvento);
                    if (qtdPart < 100) {
                        window.alert(usuario + ' seu cadastro no evento ' + nomeEvento + ' foi realizado com sucesso!');
                        qtdPart = qtdPart + 1;
                    } else {
                        window.alert('O evento ' + nomeEvento + ' Já está lotado, seu ingresso não será possível.');
                    }
                } else {
                    window.alert('Evento invalido!');
                }
            } else {
                window.alert('Opção invalida, processo encerrado.');
            }
        }
    } else {
        window.alert(usuario + ' seu cadastro não é permitido devido sua idade.');
    }
}

function listaEvento(nomeEvento) {
    //implementar listagem de eventos e participantes
}

function validarEvento(nomeEvento) {
    //implementar validação de data e nome do evento
    return true;
}

function formCriarEvento () {
    var element = document.getElementById('escolha');
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    minDate = ano + '-' + mes + '-' + dia;
    element.innerHTML = '<div><label>Data do Evento </label><input id="dataEvento" type="date" name="dataEvento" min="'+ minDate + '" max="2025-04-30" required></div><div><label>Nome do Evento </label><input type="text" name="nomeEvento" id="nomeEvento" maxlength="20" required></div><div><br><label>Descrição </label><textarea row="6" style="width: 25em" id="descricao""></textarea></div><div><button type="submit">Concluído </button></div>' 
}


function formEntrarEvento () {
    var element = document.getElementById('escolha');
    element.innerHTML = '<div><label>Nome do Evento </label><input type="text" name="nomeEvento" id="nomeEvento" maxlength="20" required></div><div><br><button type="submit">Concluído </button></div>' 
}
