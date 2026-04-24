function calcularIMC() {
    // 1. Captura os elementos e valores
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const display = document.getElementById('resultado');

    // 2. Validação simples
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        display.innerHTML = "❌ Por favor, insira valores válidos para peso e altura.";
        display.style.color = "red";
        return;
    }

    // 3. Cálculo do IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);
    let rotulo = "";
    let cor = "";

    // 4. Verificação dos parâmetros
    if (imc < 18.5) {
        rotulo = "Abaixo do peso";
        cor = "#17a2b8"; // Azul claro
    } else if (imc >= 18.5 && imc <= 24.9) {
        rotulo = "Peso normal";
        cor = "#28a745"; // Verde
    } else if (imc >= 25.0 && imc <= 29.9) {
        rotulo = "Sobrepeso";
        cor = "#ffc107"; // Amarelo
    } else {
        rotulo = "Obesidade";
        cor = "#dc3545"; // Vermelho
    }

    // 5. Exibição do resultado
    display.style.color = "black";
    display.innerHTML = `
        Seu IMC é: <strong>${imc.toFixed(2)}</strong><br>
        Classificação: <span style="color: ${cor}; font-weight: bold;">${rotulo}</span>
    `;
}