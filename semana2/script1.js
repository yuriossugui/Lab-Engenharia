document.addEventListener('DOMContentLoaded', function () {

        // ex1
        let options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
        let dataFormatada = new Date().toLocaleString('pt-BR', options); 
    
        document.getElementById('data').textContent = dataFormatada;

});