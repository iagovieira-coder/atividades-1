function analisarTexto() {
    const texto = document.getElementById('meuTexto').value;
    const display = document.getElementById('resultado');

    // 1. Quantidade de Caracteres (incluindo espaços)
    const totalCaracteres = texto.length;

    // 2. Quantidade de Palavras
    // O trim() remove espaços inúteis no início/fim. 
    // O split(/\s+/) divide o texto sempre que encontrar um ou mais espaços/quebras de linha.
    const palavras = texto.trim().split(/\s+/);
    const totalPalavras = texto.trim() === "" ? 0 : palavras.length;

    // 3. Quantidade de Letras Maiúsculas
    // Usamos uma "Expressão Regular" [A-Z] para encontrar maiúsculas
    const maiusculas = texto.match(/[A-Z]/g);
    const totalMaiusculas = maiusculas ? maiusculas.length : 0;

    // 4. Exibir o resultado
    display.innerHTML = `
        🔹 <strong>Caracteres:</strong> ${totalCaracteres} <br>
        🔹 <strong>Palavras:</strong> ${totalPalavras} <br>
        🔹 <strong>Letras Maiúsculas:</strong> ${totalMaiusculas}
    `;
}