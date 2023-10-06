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

        // Armazenar os dados no Local Storage
        const paciente = {
            nome,
            endereco,
            telefone,
            dataNascimento,
        };
        localStorage.setItem("paciente", JSON.stringify(paciente));

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

        // Redirecionar para a página principal com os dados do paciente como parâmetros da URL
        const paciente = JSON.parse(localStorage.getItem("paciente"));
    //     const queryString = `?nome=${encodeURIComponent(paciente.nome)}&endereco=${encodeURIComponent(paciente.endereco)}&telefone=${encodeURIComponent(paciente.telefone)}`;
    //     window.location.href = `http://127.0.0.1:5500/index.html${queryString}`;
     }
});

