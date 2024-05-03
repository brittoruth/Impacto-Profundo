### 🔧 Implantação

# Projeto Impacto-Profundo - JavaScript

## JavaScript


Nesta seção, apresentamos a validação do formulario de contato com: Cadastro de Úsuario ou Especialista, cadastro de dados pessoais e cadastro de informações de risco ambiental ou duvidas direcionada aos especialistas. 
## Java Script Validação formulario

![Impacto-Profundo](https://github.com/brittoruth/Impacto-Profundo/blob/apresentacaoDoJS/assets/image/apresentacaojs/todosite.gif?raw=true)

![Impacto-Profundo](https://github.com/brittoruth/Impacto-Profundo/blob/apresentacaoDoJS/assets/image/apresentacaojs/videovalidação.gif?raw=true)

Script JavaScript:

```Js
--       <script>//Validar CadastroUsuario
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
                erroCadastro.textContent = "As senhas não compativeis.";
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

  


  //Validar Cadastro Pessoa
        function validarPessoa() {
            const nomeUser = document.getElementById('nomeUser').value;
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const localizacao = document.getElementById('localizacao').value;
            const aceitePoliticas = document.getElementById('aceitarPoliticas').checked;

            const erroAceite = document.getElementById('erroAceite');
            const erroNomeUser = document.getElementById('erroNomeUser');
            const erroNomeCompleto = document.getElementById('erroNomeCompleto');
            const erroTel = document.getElementById('erroTel');
            const erroLocalizacao = document.getElementById('erroLocalizacao');

            // Resetar mensagens de erro
            erroAceite.textContent = "";
            erroNomeUser.textContent = "";
            erroNomeCompleto.textContent = "";
            erroTel.textContent = "";
            erroLocalizacao.textContent = "";

            // Validar campos obrigatórios
            if (!nomeUser || !nomeCompleto || !telefone || !localizacao) {
                if (!nomeUser) erroNomeUser.textContent = "Campo obrigatório.";
                if (!nomeCompleto) erroNomeCompleto.textContent = "Campo obrigatório.";
                if (!telefone) erroTel.textContent = "Campo obrigatório.";
                if (!localizacao) erroLocalizacao.textContent = "Campo obrigatório.";
                return;
            }

            /*  if (!aceitePoliticas) {
                  erroAceite.textContent = "É necessário aceitar as políticas de privacidade.";
                  return;
              }
              */

            // Se passar pela validação, avança para o próximo formulário
            //window.location.href = "form_usuario.html";
            proximoEtapa();

        }



  //validar Ocorrencia
        function validarOcorrencia() {
            const risco = document.getElementById('risco').value;
            const dataOcorrencia = document.getElementById('dataOcorrencia').value;
            const horaOcorrencia = document.getElementById('horaOcorrencia').value;
            const localizacaoOcorrencia = document.getElementById('localizacaoOcorrencia').value;
            const principaisCausas = document.getElementById('principaisCausas').value;
            const qtdPessoasAfetadas = document.getElementById('qtdPessoasAfetadas').value;
            const outrasCausas = document.getElementById('outrasCausas').value;
            const perguntas = document.getElementById('perguntas').value;
            const elogiosSugestoes = document.getElementById('elogiosSugestoes').value;

            // Resetar mensagens de erro
            document.getElementById('erroRisco').textContent = "";
            document.getElementById('erroDataOcorrencia').textContent = "";
            document.getElementById('erroHoraOcorrencia').textContent = "";
            document.getElementById('erroLocalizacaoOcorrencia').textContent = "";
            document.getElementById('erroPrincipaisCausas').textContent = "";
            document.getElementById('erroqtdPessoasAfetadas').textContent = "";
            document.getElementById('erroOutrasCausas').textContent = "";
            document.getElementById('erroPerguntas').textContent = "";
            document.getElementById('erroElogiosSugestoes').textContent = "";

            // Validar campos obrigatórios
            if (!risco || !dataOcorrencia || !horaOcorrencia || !localizacaoOcorrencia || !principaisCausas || !qtdPessoasAfetadas) {
                if (!risco) document.getElementById('erroRisco').textContent = "Campo Risco obrigatório.";
                if (!dataOcorrencia) document.getElementById('erroDataOcorrencia').textContent = "Campo Data obrigatório.";
                if (!horaOcorrencia) document.getElementById('erroHoraOcorrencia').textContent = "Campo Horario obrigatório.";
                if (!localizacaoOcorrencia) document.getElementById('erroLocalizacaoOcorrencia').textContent = "Campo Localização obrigatório.";
                if (!principaisCausas) document.getElementById('erroPrincipaisCausas').value = "Campo Principais Causas obrigatório.";
                if (!qtdPessoasAfetadas) document.getElementById('erroqtdPessoasAfetadas').textContent = "Campo Quantidade de Pessoas Afetadas obrigatório.";
                // if (!outrasCausas) document.getElementById('erroOutrasCausas').textContent = "Campo Outras Causas obrigatório.";
                //  if (!perguntas) document.getElementById('erroPerguntas').textContent = "Campo Perguntas obrigatório.";
                // if (!elogiosSugestoes) document.getElementById('erroElogiosSugestoes').textContent = "Campo Elogios e Sugestões obrigatório.";

                return;
            }

            //Exibir os dados cadastrados
            const dadosCadastrados = document.getElementById('dadosCadastrados');

            dadosCadastrados.innerHTML = `
        <fieldset>
                <form action="submit" id="formPessoa">
                    <div <strong>Nível de Risco:</strong> ${risco}</div>
                    <div <strong>Data:</strong> ${dataOcorrencia}</div>
                    <div <strong>Hora:</strong> ${horaOcorrencia}</div>
                    <div <strong>Localização da Ocorrência:</strong> ${localizacaoOcorrencia}</div>
                    <div <strong>Principais Causas:</strong> ${principaisCausas}</div>
                    <div <strong>Quantidade de Pessoas Afetadas:</strong> ${qtdPessoasAfetadas}</div>
                    <div <strong>Outras Causas:</strong>${outrasCausas}</div>
                    <div <strong>Perguntas:</strong> ${perguntas}</div>
                    <div <strong>Elogios e Sugestão de Melhorias:</strong> ${elogiosSugestoes}</div>
                    <br>
                    <br>
                    <div>
                        <button onclick="editarDados()">Editar</button>
                        <button onclick="enviarDados()">Enviar</button>
                    </div>
                </form>
        </fieldset>
                `;

            proximoEtapa();

        }

        function editarDados() {
            // Limpar a div de dados cadastrados
            document.getElementById('dadosCadastrados').innerHTML = "";

            // Rolar para o topo do formulário
            //  window.scrollTo(0, 0);
            etapaAnterior();

        }



    // Função para salvar os dados no localStorage
        function salvarDados() {
            const nomeUsuario = document.getElementById('nomeCadastro').value;
            const email = document.getElementById('emailCadastro').value;
            const tipoUsuario = document.getElementById('tipoUsuario').value;
            const senha = document.getElementById('senhaCadastro').value;

            const usuario = {
                nomeUsuario,
                email,
                tipoUsuario,
                senha
            };

            // Armazenando os dados
            localStorage.setItem('usuario', JSON.stringify(usuario));
        }

        // Função para verificar se o usuário já está cadastrado
        function verificarUsuario() {
            // Verifica se já existe algum dado armazenado
            const dadosSalvos = localStorage.getItem('usuario');
            if (dadosSalvos) {
                const usuario = JSON.parse(dadosSalvos);

                // Preenche o formulário com os dados salvos
                document.getElementById('nomeUser').value = usuario.nomeUsuario;
                document.getElementById('emailCadastro').value = usuario.email;
                document.getElementById('tipoUsuario').value = usuario.tipoUsuario;
                document.getElementById('senhaCadastro').value = usuario.senha;
            }
        }

        function preencherDados() {
            const dadosSalvos = localStorage.getItem('usuario');
            if (dadosSalvos) {
                const usuario = JSON.parse(dadosSalvos);
                document.getElementById('nomeUser').value = usuario.nomeUsuario;
            }
        }
        // Adiciona o evento de 'submit' ao formulário
        document.getElementById('formCadastro').addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário
            salvarDados();
        });

        // Quando a página carrega, verifica se o usuário já está cadastrado
        document.addEventListener('DOMContentLoaded', verificarUsuario);

--
'''

[!modeloconsulta](assets\image\apresentacaojs\videovalidação.gif)








## 👨🏻‍🏫 Tutor Mateus Gesualdo 




