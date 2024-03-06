
// Checkbox scrool de políticas -->

// lendo  a  caixa de seleção
document.getElementById('aceitarPoliticas').addEventListener('change', function () {
    /* pega as políticas*/
    var politicasElement = document.getElementById('politicas');

    // Verificando se a caixa de seleção está marcada
    if (this.checked) {
       
        // Se estiver marcada, exibimos as políticas
        politicasElement.style.display = 'block';

        // Salvar dados cookies localstorage 
       

    } else {
        // Se não estiver marcada, escondemos as políticas
        politicasElement.style.display = 'none';

     
    }
});
