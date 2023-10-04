
document.addEventListener("DOMContentLoaded", function () {
    // Capturar o formulário de cadastro de funcionário
    const funcionarioForm = document.getElementById("funcionarioForm");

    // Adicionar evento de envio para o formulário de cadastro de funcionário
    funcionarioForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById("nome").value;
        const cargo = document.getElementById("cargo").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("dataNascimento").value;

        // Implementar lógica para cadastrar o funcionário (pode ser um AJAX para o servidor)
        console.log("Cadastro de Funcionário:");
        console.log("Nome:", nome);
        console.log("Cargo:", cargo);
        console.log("E-mail:", email);
        console.log("Telefone:", telefone);
        console.log("Data de Nascimento:", dataNascimento);
         
      
        // Limpar o formulário após o cadastro
        funcionarioForm.reset();
      
        const modal = document.getElementById("modal");
         modal.style.display = "block";

         const closeButton = document.querySelector(".close");
         closeButton.addEventListener("click", function() {
          modal.style.display = "none";


          elemento.innerHTML = ` console.log("Cadastro de Funcionário:");
            console.log("Nome:", nome);
            console.log("Cargo:", cargo);
            console.log("E-mail:", email);
            console.log("Telefone:", telefone);
            console.log("Data de Nascimento:", dataNascimento); `;
       });
       
    });
});