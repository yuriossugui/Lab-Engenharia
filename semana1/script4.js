document.addEventListener('DOMContentLoaded', function () {
    function verificarTipoDeDado() {
        let dado = prompt("Digite um valor:");
    
        let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
    
        if (desejaVerificar) {
            document.body.innerHTML = `<p>O tipo do dado informado é: <strong>${typeof dado}</strong></p>`;
        } else {
            document.body.innerHTML = "<p>Obrigado por visitar esta página</p>";
        }
    }
    
    verificarTipoDeDado();    
});