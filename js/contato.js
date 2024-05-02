let etapaAtual = 1;

function selecionarEtapa(etapa) {
    // Remove a classe 'active' da etapa atual
    document.querySelector('.step-' + etapaAtual).classList.remove('active');

    // Adiciona a classe 'active' à nova etapa
    document.querySelector('.step-' + etapa).classList.add('active');

    // Atualiza a variável de etapaAtual
    etapaAtual = etapa;
}

function proximoEtapa() {
    if (etapaAtual < 3) {
        selecionarEtapa(etapaAtual + 1);
    }
}

function etapaAnterior() {
    if (etapaAtual > 0) {
        selecionarEtapa(etapaAtual - 1);
    }
}


function proximoEtapa() {
    document.querySelector(`.etapa-${etapaAtual}`).classList.remove('etapa-atual');
    etapaAtual++;
    document.querySelector(`.etapa-${etapaAtual}`).classList.add('etapa-atual');
}

function etapaAnterior() {
    document.querySelector(`.etapa-${etapaAtual}`).classList.remove('etapa-atual');
    etapaAtual--;
    document.querySelector(`.etapa-${etapaAtual}`).classList.add('etapa-atual');
}

// exibir dados na 3 etapa antes do enviao 
function exibirDados() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var data = document.getElementById('data').value;
    var hora = document.getElementById('hora').value;
    var localizacao = document.getElementById('localizacao').value; // Alterado para pegar o texto do elemento div
    var risco = document.getElementById('risco').value;
    var aceitarPoliticas = document.getElementById('aceitarPoliticas').value; //checkbox teste
    var qtdPessoas = document.getElementById('qtdPessoas').value;
    var causas = document.getElementById('causas').value;
    var outrasCausas = document.getElementById('outrasCausas').value;
    var sugestao = document.getElementById('sugestao').value;


    var dadoscadastrado = document.getElementById('dados-cadastrado');
    dadoscadastrado.innerHTML = `
    <h3>Informações de Risco Ambiental:</h3> <br>
    <div class="field-cadastrados"><strong>Nome:</strong><br> ${nome}</div>
    <div class="field-cadastrados"><strong>Email:</strong><br> ${email}</div>
    <div class="field-cadastrados"><strong>Data:</strong><br> ${data}</div>
    <div class="field-cadastrados"><strong>Hora:</strong><br> ${hora}</div>
    <div class="field-cadastrados"><strong>Localização:</strong><br> ${localizacao}</div>
    <div class="field-cadastrados"><strong>Nível de Risco:</strong><br> ${risco}</div>
    <div class="field-cadastrados"><strong>Aceite Politicas:</strong><br> ${aceitarPoliticas}</div>
    <div class="field-cadastrados"><strong>Quantidade de Pessoas Afetadas:</strong><br> ${qtdPessoas}</div>
    <div class="field-cadastrados"><strong>Causa:</strong><br> ${causas}</div>
    <div class="field-cadastrados"><strong>Outras Causas e Sugestão de melhorias:</strong><br> ${outrasCausas}</div>
    <div class="field-cadastrados"><strong>Elogios e Sugestão de melhorias:</strong><br> ${sugestao}</div>

`;
}

// alert temporario 
function enviarFormulario() {
    alert('Formulario enviado com Sucesso!');
}