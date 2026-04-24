function classificarIdade() {
    // 1. Pega o valor da idade
    const idadeInput = document.getElementById('idade');
    const idade = parseInt(idadeInput.value);
    const display = document.getElementById('resultado');

    // 2. Validação: se o campo estiver vazio ou for número negativo
    if (idadeInput.value === "" || idade < 0) {
        display.innerHTML = "❌ Por favor, digite uma idade válida!";
        display.style.color = "red";
        return;
    }

    let categoria = "";
    display.style.color = "#333";

    // 3. Lógica de classificação
    if (idade <= 12) {
        categoria = "Você é uma Criança 👶";
    } else if (idade <= 17) {
        categoria = "Você é um Adolescente 👦👧";
    } else if (idade <= 59) {
        categoria = "Você é um Adulto 👨‍💼👩‍💼";
    } else {
        categoria = "Você é um Idoso 👵👴";
    }

    // 4. Mostra o resultado
    display.innerHTML = `Resultado: <strong>${categoria}</strong>`;
}