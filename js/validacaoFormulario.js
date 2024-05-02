

// Etapa 1  Login



// Função para mostrar o formulário de login
function mostrarLogin() {
    document.getElementById('loginForm').style.display = 'block';
}

// Função para verificar os dados de login
document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeUserLogin = document.getElementById('nomeUserLogin').value;
    const senhaUserLogin = document.getElementById('senhaUserLogin').value;

    const dadosSalvos = localStorage.getItem('usuario');
    if (dadosSalvos) {
        const usuario = JSON.parse(dadosSalvos);

        // Verifica se o nome de usuário e senha estão corretos
        if (nomeUserLogin === usuario.nomeUsuario && senhaUserLogin === usuario.senha) {
            alert('Login realizado com sucesso!');
            // Redireciona para a página principal ou dashboard
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    } else {
        alert('Usuário não cadastrado.');
    }
    proximoEtapa();
});


//Validar CadastroUsuario
function validarCadastro() {
    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const senha = document.getElementById('senhaCadastro').value;
    const confirmSenha = document.getElementById('confirmSenhaCadastro').value;

    const erroCadastro = document.getElementById('erroCadastro');
    const erroEmailCadastro = document.getElementById('erroEmailCadastro')
    const erroSenhaCadastro = document.getElementById('erroSenhaCadastro');

    // Resetar mensagem de erro
    erroCadastro.textContent = "";
    erroEmailCadastro.textContent = '';
    erroSenhaCadastro.textContent = '';

    // Validar campos obrigatórios
    if (!nome || !email || !tipoUsuario || !senha || !confirmSenha) {
        erroCadastro.textContent = "Preencha todos os campos.";
        return;
    }


    // Valida o email
    if (!validarEmail(email)) {
        erroEmailCadastro.textContent = "O email não é válido.";
        return;
    }

    // Valida a senha
    if (!validarSenha(senha)) {
        erroSenhaCadastro.textContent = "A senha não atende aos critérios de segurança.";
        return;
    }

    // Validar se as senhas coincidem
    if (senha !== confirmSenha) {
        erroCadastro.textContent = "As senhas não coincidem.";
        return;
    }
    // Função para validar o email
    function validarEmail(email) {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }
    // Função para validar a senha
    function validarSenha(senha) {
        // Critérios: mínimo de 8 caracteres, pelo menos uma letra maiúscula,
        // uma letra minúscula, um número e um caractere especial
        var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regexSenha.test(senha);
    }

    //Aqui ele chama a proxima etapa que é cadastro de pessoa
    proximoEtapa();


    // Se passar pela validação, pode enviar os dados ou realizar outra ação
    // Por exemplo, você pode enviar os dados para o servidor ou redirecionar o usuário para outra página
    // Aqui, vamos apenas exibir uma mensagem de sucesso
    // alert("Cadastro realizado com sucesso!"); 
}

