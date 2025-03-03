document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = parseInt(document.getElementById('ano').value);
    const cor = document.getElementById('cor').value;
    const quilometragem = parseInt(document.getElementById('quilometragem').value);
    const valorFipe = parseFloat(document.getElementById('valorFipe').value);

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        quilometragem: quilometragem,
        valorFipe: valorFipe,
        anosUtilizacao: function() {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        valorMercado: function() {
            const anosDeUso = this.anosUtilizacao();
            const kmPorAno = this.quilometragem / anosDeUso;

            if (kmPorAno <= 30000) {
                return this.valorFipe * 1.1;
            } else if (kmPorAno <= 50000) {
                return this.valorFipe;
            } else {
                return this.valorFipe * 0.9;
            }
        }
    };

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Anos de Utilização: ${carro.anosUtilizacao()}</p>
        <p>Valor de Mercado: R$ ${carro.valorMercado().toFixed(2)}</p>
    `;
});