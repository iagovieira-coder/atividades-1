function cadastrarUsuario() {
    // 1. Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    
    const display = document.getElementById('resultado');

    // 2. Validação simples: verifica se todos os campos estão preenchidos
    if (nome === "" || idade === "" || email === "") {
        alert("Por favor, preencha todos os campos antes de continuar!");
        return;
    }

    // 3. Torna a caixa de resultado visível
    display.style.display = "block";

    // 4. Exibe os dados nos parágrafos correspondentes
    document.getElementById('exibeNome').innerHTML = `<strong>Nome:</strong> ${nome}`;
    document.getElementById('exibeIdade').innerHTML = `<strong>Idade:</strong> ${idade} anos`;
    document.getElementById('exibeEmail').innerHTML = `<strong>E-mail:</strong> ${email}`;
}