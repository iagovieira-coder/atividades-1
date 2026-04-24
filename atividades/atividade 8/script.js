function converterMoeda() {
    // 1. Captura os valores de entrada
    const reais = parseFloat(document.getElementById('valorReal').value);
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const display = document.getElementById('resultado');

    // 2. Validação: verifica se os números são válidos
    if (isNaN(reais) || isNaN(cotacao) || cotacao <= 0) {
        display.innerHTML = "⚠️ Informe valores válidos!";
        display.style.color = "red";
        return;
    }

    // 3. Cálculo da conversão
    const dolar = reais / cotacao;

    // 4. Formatação para moeda (padrão Americano US$)
    const valorFormatado = dolar.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });

    // 5. Exibe o resultado
    display.style.color = "#155724";
    display.innerHTML = `Com R$ ${reais.toFixed(2)} você terá:<br>${valorFormatado}`;
}