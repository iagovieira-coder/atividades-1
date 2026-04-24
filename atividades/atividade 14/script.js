function calcularDesconto() {
    const valor = parseFloat(document.getElementById('valorCompra').value);
    const display = document.getElementById('resultado');

    if (isNaN(valor) || valor <= 0) {
        display.innerHTML = "❌ Por favor, digite um valor válido.";
        return;
    }

    let percentual = 0;
    
    // Regras de desconto
    if (valor <= 100) {
        percentual = 0;
    } else if (valor <= 500) {
        percentual = 10;
    } else {
        percentual = 20;
    }

    // Cálculos
    const valorDesconto = valor * (percentual / 100);
    const valorFinal = valor - valorDesconto;

    // Exibição
    display.innerHTML = `
        <strong>Valor original:</strong> R$ ${valor.toFixed(2)} <br>
        <strong>Desconto (${percentual}%):</strong> R$ ${valorDesconto.toFixed(2)} <br>
        <hr>
        <strong>Total a pagar:</strong> <span style="color: green; font-size: 1.2em;">R$ ${valorFinal.toFixed(2)}</span>
    `;
}