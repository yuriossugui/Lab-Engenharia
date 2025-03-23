document.addEventListener('DOMContentLoaded', function() {

    const counter = document.getElementById('counter');

    let html = `
    <div class="container mt-5">
    <div class="card p-4 shadow-sm text-center">
        <h3>Total</h3>
        <input type="text" class="form-control w-25 mx-auto text-center" readonly>
        <button class="btn btn-outline-secondary mx-auto mt-2">
            Zerar
        </button>
        
        <div class="row mt-4">
            <div class="col-md-6 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145867.png" width="80" alt="Homem">
                <div class="mt-2">
                    <button class="btn btn-success me-2">+</button>
                    <button class="btn btn-danger">-</button>
                </div>
                <h5 class="mt-2">Homens</h5>
                <input type="text" class="form-control w-50 mx-auto text-center" readonly>
            </div>
            <div class="col-md-6 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/145/145852.png" width="80" alt="Mulher">
                <div class="mt-2">
                    <button class="btn btn-success me-2">+</button>
                    <button class="btn btn-danger">-</button>
                </div>
                <h5 class="mt-2">Mulheres</h5>
                <input type="text" class="form-control w-50 mx-auto text-center" readonly>
            </div>
        </div>
    </div>
</div> 
    `;
    
    counter.innerHTML = html;

    const totalInput = document.querySelector('.container .form-control');
    const homensInput = document.querySelector('.col-md-6:first-child .form-control');
    const mulheresInput = document.querySelector('.col-md-6:last-child .form-control');
    
    const homemPlusBtn = document.querySelector('.col-md-6:first-child .btn-success');
    const homemMinusBtn = document.querySelector('.col-md-6:first-child .btn-danger');
    const mulherPlusBtn = document.querySelector('.col-md-6:last-child .btn-success');
    const mulherMinusBtn = document.querySelector('.col-md-6:last-child .btn-danger');
    const zerarBtn = document.querySelector('.btn-outline-secondary');

    let homens = 0;
    let mulheres = 0;

    function atualizarTotal() {
        const total = homens + mulheres;
        totalInput.value = total;
        homensInput.value = homens;
        mulheresInput.value = mulheres;
    }

    homemPlusBtn.addEventListener('click', () => {
        homens++;
        atualizarTotal();
    });

    homemMinusBtn.addEventListener('click', () => {
        if (homens > 0) homens--;
        atualizarTotal();
    });

    mulherPlusBtn.addEventListener('click', () => {
        mulheres++;
        atualizarTotal();
    });

    mulherMinusBtn.addEventListener('click', () => {
        if (mulheres > 0) mulheres--;
        atualizarTotal();
    });

    zerarBtn.addEventListener('click', () => {
        homens = 0;
        mulheres = 0;
        atualizarTotal();
    });

    atualizarTotal();

});