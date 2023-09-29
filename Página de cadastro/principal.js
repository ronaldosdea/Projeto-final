document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        // Validar os campos
        if (!nome || !email || !telefone) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Salvar os dados temporariamente (pode ser substituído por um servidor ou banco de dados real)
        const paciente = {
            nome,
            email,
            telefone,
        };

        // Redirecionar para a página principal com os dados do paciente como parâmetros da URL
        const queryString = `?nome=${encodeURIComponent(paciente.nome)}&email=${encodeURIComponent(paciente.email)}&telefone=${encodeURIComponent(paciente.telefone)}`;
        window.location.href = `http://127.0.0.1:5500/index.html?${queryString}`;
    });
});
