function verificarParImpar() {
    // 1. Pega o valor do input (usamos parseInt pois par/ímpar é para inteiros)
    const numInput = document.getElementById('numero');
    const numero = parseInt(numInput.value);
    const display = document.getElementById('resultado');

    // 2. Validação básica
    if (numInput.value === "") {
        display.innerHTML = "⚠️ Digite um número!";
        display.style.color = "orange";
        return;
    }

    // 3. A Lógica do Resto (%)
    // Se o resto da divisão por 2 for zero, é par.
    if (numero % 2 === 0) {
        display.innerHTML = `O número ${numero} é <span style="color: green;">PAR</span>`;
    } else {
        display.innerHTML = `O número ${numero} é <span style="color: blue;">ÍMPAR</span>`;
    }
}