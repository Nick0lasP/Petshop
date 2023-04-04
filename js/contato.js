function validaForm () {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');
    var erro = document.getElementById('erro');

    // primeiro remove todas as formatacoes de erro
    erro.innerHTML = '';
    nome.classList.remove('invalido');
    email.classList.remove('invalido');
    mensagem.classList.remove('invalido');

    if (nome.value == '') {
        erro.innerHTML = 'Preencha o nome';
        // posiciona o cursor do mouse dentro do elemento
        nome.classList.add('invalido');
        nome.focus();
        return false;
    }

    if (email.value == '') {
        erro.innerHTML = 'Preencha o e-mail';
        email.classList.add('invalido');
        email.focus();
        return false;
    }

    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    // if ( regex.test(email.value) == false) {
    if ( !regex.test(email.value) ) {
        erro.innerHTML = 'E-mail inválido';
        email.classList.add('invalido');
        email.focus();
        return false;
    }

    if (mensagem.value == '') {
        erro.innerHTML = 'Preencha a mensagem';
        mensagem.classList.add('invalido');
        mensagem.focus();
        return false;
    }

    return false; // iremos trocar para true, no momento apenas bloqueia o envio
}