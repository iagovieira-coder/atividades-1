function calcularMedia() {
    // 1. Pegando as 3 notas e convertendo para números decimais
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const display = document.getElementById('resultado');

    // 2. Validação: verifica se todos os campos foram preenchidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        display.innerHTML = "⚠️ Por favor, preencha as três notas!";
        display.style.color = "orange";
        return;
    }

    // 3. Cálculo da média
    const media = (n1 + n2 + n3) / 3;
    
    let status = "";
    let corStatus = "";

    // 4. Lógica de aprovação (Média 7)
    if (media >= 7) {
        status = "APROVADO! 🎉";
        corStatus = "green";
    } else {
        status = "REPROVADO. ❌";
        corStatus = "red";
    }

    // 5. Exibição formatada
    display.style.color = "#333";
    display.innerHTML = `
        Média Final: <strong>${media.toFixed(1)}</strong><br>
        Status: <span style="color: ${corStatus}; font-weight: bold;">${status}</span>
    `;
}