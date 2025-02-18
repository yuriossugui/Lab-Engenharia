document.addEventListener('DOMContentLoaded', function () {

    // ex1
    let options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    let dataFormatada = new Date().toLocaleString('pt-BR', options); 

    document.getElementById('data').textContent = dataFormatada;

    //ex2
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

        setTimeout(updateClock, 1000);
    }

    updateClock();

    console.log('yuri');
});