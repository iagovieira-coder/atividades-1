// Variáveis que precisam "viver" fora da função
let numeroSecreto;
let contadorTentativas = 0;

// Função para iniciar ou reiniciar o jogo
function reiniciarJogo() {
    // Math.random gera entre 0 e 0.99. Multiplicamos por 100 e somamos 1.
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    contadorTentativas = 0;
    
    document.getElementById('tentativas').innerText = "Tentativas: 0";
    document.getElementById('resultado').innerText = "Novo número sorteado! Tente a sorte.";
    document.getElementById('resultado').style.color = "#333";
    document.getElementById('chute').value = "";
}

function verificarChute() {
    const chute = parseInt(document.getElementById('chute').value);
    const display = document.getElementById('resultado');
    const displayTentativas = document.getElementById('tentativas');

    if (isNaN(chute) || chute < 1 || chute > 100) {
        display.innerText = "❌ Digite um número entre 1 e 100!";
        return;
    }

    contadorTentativas++;
    displayTentativas.innerText = `Tentativas: ${contadorTentativas}`;

    if (chute === numeroSecreto) {
        display.innerText = `🏆 PARABÉNS! Você acertou em ${contadorTentativas} tentativas!`;
        display.style.color = "green";
    } else if (chute < numeroSecreto) {
        display.innerText = "📈 O número é MAIOR!";
        display.style.color = "#d63031";
    } else {
        display.innerText = "📉 O número é MENOR!";
        display.style.color = "#d63031";
    }
}

// Inicia o primeiro número assim que a página carrega
reiniciarJogo();