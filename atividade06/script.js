document.addEventListener('DOMContentLoaded', function() {
    const calc = document.getElementById('calc');
        
    // Estilização do container principal
    calc.style.width = '320px';
    calc.style.backgroundColor = '#333';
    calc.style.padding = '20px';
    calc.style.borderRadius = '10px';
    calc.style.margin = 'auto';

    // Display
    const display = document.createElement('div');
    display.textContent = '0';
    display.style.cssText = `
        width: 100%;
        height: 80px;
        background: #f0f0f0;
        margin-bottom: 20px;
        border-radius: 5px;
        text-align: right;
        padding: 20px;
        box-sizing: border-box;
        font-size: 2.5em;
    `;
    calc.appendChild(display);

    // Variáveis de estado
    let currentValue = '0';
    let storedValue = null;
    let currentOperator = null;
    let shouldResetDisplay = false;

    function updateDisplay() {
        display.textContent = currentValue;
    }

    function calculateResult() {
        if (storedValue !== null && currentOperator !== null) {
            const currValue = parseFloat(currentValue);
            let result;
            
            switch(currentOperator) {
                case '+': result = storedValue + currValue; break;
                case '-': result = storedValue - currValue; break;
                case 'x': result = storedValue * currValue; break;
            }
            
            currentValue = result.toString();
            storedValue = null;
            currentOperator = null;
            shouldResetDisplay = true;
            updateDisplay();
        }
    }

    function handleButtonClick(label) {
        if (label === 'AC') {
            currentValue = '0';
            storedValue = null;
            currentOperator = null;
            shouldResetDisplay = false;
            updateDisplay();
            return;
        }

        if (label === '+/-') {
            currentValue = (parseFloat(currentValue) * -1).toString();
            updateDisplay();
            return;
        }

        if (label === '%') {
            currentValue = (parseFloat(currentValue) / 100).toString();
            updateDisplay();
            return;
        }

        if (label === '=') {
            calculateResult();
            return;
        }

        if (['+', '-', 'x'].includes(label)) {
            if (currentOperator !== null) {
                calculateResult();
            }
            
            storedValue = parseFloat(currentValue);
            currentOperator = label;
            shouldResetDisplay = true;
            return;
        }

        if (/\d/.test(label)) {
            if (shouldResetDisplay) {
                currentValue = label;
                shouldResetDisplay = false;
            } else {
                currentValue = currentValue === '0' ? label : currentValue + label;
            }
            updateDisplay();
        }
    }

    // Container dos botões
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    `;
    
    // Botões
    const buttonLabels = [
        'AC', '+/-', '%', '+',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
    ];

    buttonLabels.forEach(label => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.style.cssText = `
            padding: 20px;
            font-size: 1.5em;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            color: white;
            transition: filter 0.2s;
        `;

        // Cores dos botões
        if (['AC', '+/-', '%'].includes(label)) {
            btn.style.background = '#a6a6a6';
        } else if (['+', '-', 'x', '='].includes(label)) {
            btn.style.background = '#ff9500';
        } else {
            btn.style.background = '#505050';
        }

        // Botão 0 especial
        if (label === '0') {
            btn.style.gridColumn = '1 / span 2';
            btn.style.textAlign = 'left';
            btn.style.paddingLeft = '30px';
            btn.style.borderRadius = '30px';
        }

        // Botão = especial
        if (label === '=') {
            btn.style.gridColumn = '4';
            btn.style.gridRow = '5';
        }

        // Efeitos interativos
        btn.addEventListener('mouseover', () => btn.style.filter = 'brightness(1.2)');
        btn.addEventListener('mouseout', () => btn.style.filter = 'none');
        
        // Evento de clique
        btn.addEventListener('click', () => handleButtonClick(label));

        buttonsContainer.appendChild(btn);
    });

    calc.appendChild(buttonsContainer);
});