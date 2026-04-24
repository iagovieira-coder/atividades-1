let intervalo; // Variável global para controlar o tempo

function iniciarContagem() {
    // 1. Limpa qualquer contagem que já esteja rodando
    clearInterval(intervalo);

    // 2. Pega o valor inicial
    let valor = parseInt(document.getElementById('numeroInicio').value);
    const display = document.getElementById('resultado');

    // 3. Validação
    if (isNaN(valor) || valor < 0) {
        alert("Por favor, digite um número maior ou igual a zero.");
        return;
    }

    // 4. Mostra o número inicial imediatamente
    display.innerText = valor;

    // 5. Inicia o intervalo (1000ms = 1 segundo)
    intervalo = setInterval(function() {
        valor--; // Diminui 1

        if (valor >= 0) {
            display.innerText = valor;
        } else {
            // Quando chegar a zero, para o contador
            clearInterval(intervalo);
            display.innerText = "FIM! 🚀";
        }
    }, 1000);
}