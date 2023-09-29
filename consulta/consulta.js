document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    const consultaForm = document.getElementById("consultaForm");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarPaciente();
    });

    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault();
        agendarConsulta();
    });

    function cadastrarPaciente() {
        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("dataNascimento").value;

        console.log("Cadastro de Paciente:");
        console.log("Nome:", nome);
        console.log("Endereço:", endereco);
        console.log("Telefone:", telefone);
        console.log("Data de Nascimento:", dataNascimento);

        cadastroForm.reset();
    }

    function agendarConsulta() {
        const medico = document.getElementById("medico").value;
        const dataConsulta = document.getElementById("dataConsulta").value;
        const horarioConsulta = document.getElementById("horarioConsulta").value;
        const motivoConsulta = document.getElementById("motivoConsulta").value;

        console.log("Agendamento de Consulta:");
        console.log("Médico:", medico);
        console.log("Data da Consulta:", dataConsulta);
        console.log("Horário da Consulta:", horarioConsulta);
        console.log("Motivo da Consulta:", motivoConsulta);

        consultaForm.reset();
    }
});


