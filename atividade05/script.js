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

});