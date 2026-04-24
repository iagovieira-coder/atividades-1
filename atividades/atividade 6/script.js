function calcular(operacao) {
    // 1. Pega os valores dos inputs
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);
    const display = document.getElementById('resultado');

    // 2. Validação básica
    if (isNaN(v1) || isNaN(v2)) {
        display.innerHTML = "Digite os dois números!";
        return;
    }

    let resultadoFinal;

    // 3. Verifica qual sinal foi clicado
    if (operacao === '+') {
        resultadoFinal = v1 + v2;
    } else if (operacao === '-') {
        resultadoFinal = v1 - v2;
    } else if (operacao === '*') {
        resultadoFinal = v1 * v2;
    } else if (operacao === '/') {
        if (v2 === 0) {
            resultadoFinal = "Erro (div. por 0)";
        } else {
            resultadoFinal = v1 / v2;
        }
    }

    // 4. Mostra o resultado (com até 2 casas decimais)
    display.innerHTML = typeof resultadoFinal === 'number' 
        ? resultadoFinal.toLocaleString('pt-BR') 
        : resultadoFinal;
}