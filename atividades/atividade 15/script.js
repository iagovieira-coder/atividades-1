let tempoIniciado;
let intervalo;
let milissegundos = 0;

function iniciar() {
    // Evita criar vários intervalos se clicar no botão Iniciar várias vezes
    if (!intervalo) {
        intervalo = setInterval(contar, 10); // Atualiza a cada 10ms
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null; // Libera a variável para poder iniciar de novo
}

function reiniciar() {
    pausar();
    milissegundos = 0;
    document.getElementById('display').innerHTML = "00:00:00";
}

function contar() {
    milissegundos += 10;
    
    // Cálculos de tempo
    let data = new Date(milissegundos);
    let h = data.getUTCHours().toString().padStart(2, '0');
    let m = data.getUTCMinutes().toString().padStart(2, '0');
    let s = data.getUTCSeconds().toString().padStart(2, '0');
    // let ms = Math.floor(data.getUTCMilliseconds() / 10).toString().padStart(2, '0');

    // Exibe no formato HH:MM:SS
    document.getElementById('display').innerHTML = `${h}:${m}:${s}`;
}