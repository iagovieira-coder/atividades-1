function gerarTabuada() {
    // 1. Pegando os valores da tela
    const inputNumero = document.getElementById('numDigitado');
    const selectOperacao = document.getElementById('operacao');
    const divResultado = document.getElementById('resultado');

    const numero = Number(inputNumero.value);
    const operacao = selectOperacao.value;

    // 2. Validação: se o campo estiver vazio
    if (inputNumero.value === "") {
        divResultado.innerHTML = "❌ Erro: Digite um número!";
        divResultado.style.color = "red";
        return;
    }

    divResultado.style.color = "#333";
    let htmlGerado = `<strong>Tabuada de ${operacao} do ${numero}:</strong><br><br>`;

    // 3. Loop de 0 a 10
    for (let i = 0; i <= 10; i++) {
        let resultadoOp;
        let sinal;

        switch (operacao) {
            case "soma":
                resultadoOp = numero + i;
                sinal = "+";
                break;
            case "subtracao":
                resultadoOp = numero - i;
                sinal = "-";
                break;
            case "multiplicacao":
                resultadoOp = numero * i;
                sinal = "x";
                break;
            case "divisao":
                if (i === 0) {
                    resultadoOp = "Não existe div. por 0";
                } else {
                    resultadoOp = (numero / i).toFixed(2);
                }
                sinal = "÷";
                break;
        }

        htmlGerado += `${numero} ${sinal} ${i} = ${resultadoOp} <br>`;
    }

    // 4. Coloca o resultado final na div
    divResultado.innerHTML = htmlGerado;
}