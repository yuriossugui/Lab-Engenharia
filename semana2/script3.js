document.addEventListener('DOMContentLoaded', function () {

    function verificarPalindromo() {
        // Obtém o texto digitado pelo usuário
        let texto = prompt("Digite uma palavra ou frase:");
      
        // Verifica se o usuário digitou algo
        if (texto === null || texto === "") {
          alert("Nenhum texto foi digitado.");
          return;
        }
      
        // Converte o texto para minúsculas e remove espaços em branco
        texto = texto.toLowerCase().replace(/\s/g, "");
      
        // Inverte o texto
        let textoInvertido = texto.split("").reverse().join("");
      
        // Verifica se o texto original é igual ao texto invertido
        if (texto === textoInvertido) {
          alert(texto + " é um palíndromo.");
        } else {
          alert(texto + " não é um palíndromo.");
        }
      }
      
      // Chama a função para iniciar o processo
      verificarPalindromo();

});