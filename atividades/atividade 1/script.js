function gerarTabuada() {
    // Pega o número do input
    const numero = document.getElementById('numDigitado').value;
    const divResultado = document.getElementById('resultado');

    // Limpa o resultado anterior
    divResultado.innerHTML = "";

    if (numero === "") {
        alert("Por favor, digite um número!");
        return;
    }

    // Cria a tabuada de 0 a 10
    let conteudo = `<h3>Tabuada do ${numero}</h3>`;
    for (let i = 0; i <= 10; i++) {
        conteudo += `${numero} x ${i} = ${numero * i} <br>`;
    }

    // Joga o texto na tela
    divResultado.innerHTML = conteudo;
}