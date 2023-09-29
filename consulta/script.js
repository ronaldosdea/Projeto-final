document.addEventListener("DOMContentLoaded", function () {
    // Capturar o formulário de cadastro
    const cadastroForm = document.getElementById("cadastroForm");

    // Capturar o formulário de consulta
    const consultaForm = document.getElementById("consultaForm");

    // Adicionar evento de envio para o formulário de cadastro
    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("dataNascimento").value;

        // Implementar lógica para cadastrar o paciente (pode ser um AJAX para o servidor)
        console.log("Cadastro de Paciente:");
        console.log("Nome:", nome);
        console.log("Endereço:", endereco);
        console.log("Telefone:", telefone);
        console.log("Data de Nascimento:", dataNascimento);

        // Limpar o formulário após o cadastro
        cadastroForm.reset();
    });

    // Adicionar evento de envio para o formulário de consulta
    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const medico = document.getElementById("medico").value;
        const dataConsulta = document.getElementById("dataConsulta").value;
        const horarioConsulta = document.getElementById("horarioConsulta").value;
        const motivoConsulta = document.getElementById("motivoConsulta").value;

        // Implementar lógica para agendar a consulta (pode ser um AJAX para o servidor)
        console.log("Agendamento de Consulta:");
        console.log("Médico:", medico);
        console.log("Data da Consulta:", dataConsulta);
        console.log("Horário da Consulta:", horarioConsulta);
        console.log("Motivo da Consulta:", motivoConsulta);

        // Limpar o formulário após o agendamento
        consultaForm.reset();
    });
});
