document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("confirm-email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();
    let username = document.getElementById("username").value.trim();
    let name = document.getElementById("name").value.trim();
    let birthdate = document.getElementById("birthdate").value;
    let city = document.getElementById("city").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (email === "" || confirmEmail === "" || password === "" || confirmPassword === "" ||
        username === "" || name === "" || birthdate === "" || city === "") {
        errorMessage.textContent = "Preencha todos os campos!";
        return;
    }

    if (email !== confirmEmail) {
        errorMessage.textContent = "Os e-mails não coincidem!";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem!";
        return;
    }

    errorMessage.textContent = "";
    alert("Cadastro realizado com sucesso!"); // Apenas um alerta por enquanto
});
document.getElementById("birthdate").addEventListener("input", function(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }
    if (value.length > 5) {
        value = value.substring(0, 5) + "/" + value.substring(5, 9);
    }
    
    input.value = value;
});

// Validação da data no envio do formulário
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário se houver erro

    let birthdate = document.getElementById("birthdate").value;
    let errorMessage = document.getElementById("error-message");

    if (!validarData(birthdate)) {
        errorMessage.textContent = "Data de nascimento inválida! Use o formato dd/mm/aaaa.";
        return;
    }

    errorMessage.textContent = "";
    alert("Cadastro realizado com sucesso!");
});

// Função para validar a data de nascimento
function validarData(data) {
    let regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    let match = data.match(regexData);

    if (!match) return false; // Se não corresponder ao formato dd/mm/aaaa, retorna falso

    let dia = parseInt(match[1], 10);
    let mes = parseInt(match[2], 10);
    let ano = parseInt(match[3], 10);

    let dataValida = new Date(ano, mes - 1, dia);
    let hoje = new Date();
    let idadeMinima = 13; // Exemplo: impede cadastro de menores de 13 anos
    let dataMinima = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());

    // Verifica se a data realmente existe e se a idade é permitida
    return dataValida.getDate() === dia &&
           dataValida.getMonth() === mes - 1 &&
           dataValida.getFullYear() === ano &&
           dataValida <= dataMinima;
}