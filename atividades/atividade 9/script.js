function verificarSenha() {
    // 1. Captura o valor da senha
    const senha = document.getElementById('senha').value;
    const display = document.getElementById('resultado');

    // 2. Verifica o comprimento da senha usando .length
    const tamanho = senha.length;

    // 3. Lógica de decisão
    if (tamanho === 0) {
        display.innerHTML = "Por favor, digite algo!";
        display.style.backgroundColor = "#f8f9fa";
        display.style.color = "#333";
    } else if (tamanho < 6) {
        display.innerHTML = "Força: MUITO FRACA 🔴";
        display.style.backgroundColor = "#ffdce0";
        display.style.color = "#d93025";
    } else if (tamanho >= 6 && tamanho <= 8) {
        display.innerHTML = "Força: FRACA 🟠";
        display.style.backgroundColor = "#fff4e5";
        display.style.color = "#ef6c00";
    } else {
        display.innerHTML = "Força: FORTE 🟢";
        display.style.backgroundColor = "#e6f4ea";
        display.style.color = "#1e8e3e";
    }
}