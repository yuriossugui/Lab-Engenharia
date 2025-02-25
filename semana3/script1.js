document.addEventListener('DOMContentLoaded', function () {

    // declarando
    let array = [];
    let orderedList = document.createElement('ol');
    let form = document.getElementById('form');

    // inserindo no dom a lista
    document.body.appendChild(orderedList)


    // eventListener no submit do form
    form.addEventListener('submit', function () {
        // evita o reload
        event.preventDefault();

        // resgata o valor digitado
        let val = document.getElementById('val').value;
        // insere no array
        array.push(val)
        atualizarLista();
    });

    function atualizarLista() {
        orderedList.innerHTML = ''; // Limpa a lista antes de recriar os itens

        array.forEach(function (item) {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            orderedList.appendChild(listItem);
        });
    }

});