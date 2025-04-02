document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.textContent = "Preencha todos os campos!";
    } else {
        errorMessage.textContent = "";
        alert("Login realizado com sucesso!"); // Apenas um alerta por enquanto
    }
});

// Função para os botões de "Esqueci minha senha" e "Cadastre-se"
document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirecionando para recuperação de senha...");
});

document.getElementById("register").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirecionando para cadastro...");
});

