function principal() {
    var usuario, nomeEvento, cadastro;
    var anoNasc, anoAtual, dataAtual, dataEvento, idade, qtdPart;
    
    var data = new Date();

    var anoAtual = data.getFullYear();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var dataAtual = dia + mes + anoAtual;

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

function formCriarEvento() {
    var element = document.getElementById('escolha');
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    minDate = ano + '-' + mes + '-' + dia;
    element.innerHTML = '<div class="campo"><label><strong>Data do Evento</strong></label><input id="dataEvento" type="date" name="dataEvento" min="'+ minDate + '" max="2025-04-30" required></div><div class="campo"><label><strong>Nome do Evento</strong></label><input type="text" name="nomeEvento" id="nomeEvento" maxlength="20" required></div><div class="campo"><br><label><strong>Descrição</strong></label><textarea row="6" style="width: 25em" id="descricao""></textarea></div><div><button type="submit" class="botao">Concluído</button></div>' 

}


function formEntrarEvento() {
    var element = document.getElementById('escolha');
    element.innerHTML = '<div class="campo"><label><strong>Nome do Evento</strong></label><select type="text" name="nomeEvento" id="nomeEvento"required>  <option value="valor1">Versionamento</option><option value="valor2">Internet of things</option><option value="valor3">Big Data</option></select></div><div><br><button type="submit" class="botao">Concluído</button></div>' 
}

function submeter() {
    var data = new Date();
    var dataN = dataNasc.value.split('-');

    var anoAtual = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();

    var anoN = dataN[0];
    var mesN = dataN[1];
    var diaN = dataN[2];

    var idade = anoAtual - anoN;

    //Se mes atual for menor que o mes do nascimento, nao fez aniversario ainda;  
    if(mes < mesN){
        idade--; 
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(mes == mesN){ 
            if(dia < diaN ){ 
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--; 
            }
        }
    } 

    if (idade > 17) {
        window.alert(nome.value + " cadastro realizado com sucesso!");
    }else{
        window.alert(nome.value + " não foi possivel completar o cadastro. Idade mínima de 18 anos.")
    };
}