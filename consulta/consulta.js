document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroForm");
    const consultaForm = document.getElementById("consultaForm");

    let paciente = null; // Variável para armazenar os dados do paciente

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarPaciente();
    });

    function cadastrarPaciente() {
        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("dataNascimento").value;

        paciente = {
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

        // Habilitar o formulário de agendamento de consulta após o cadastro do paciente
        consultaForm.classList.remove("disabled");
    }

    consultaForm.addEventListener("submit", function (event) {
        event.preventDefault();
        agendarConsulta();
    });

    function agendarConsulta() {
        if (paciente) {
            const medico = document.getElementById("medico").value;
            const dataConsulta = document.getElementById("dataConsulta").value;
            const horarioConsulta = document.getElementById("horarioConsulta").value;
            const motivoConsulta = document.getElementById("motivoConsulta").value;

            console.log("Agendamento de Consulta:");
            console.log("Paciente:", paciente.nome);
            console.log("Médico:", medico);
            console.log("Data da Consulta:", dataConsulta);
            console.log("Horário da Consulta:", horarioConsulta);
            console.log("Motivo da Consulta:", motivoConsulta);

            consultaForm.reset();

            window.location.href = "https://ronaldosdea.github.io/Projeto-final/"; 
        } else {
            alert("Por favor, complete o cadastro antes de agendar uma consulta.");
        }
    }
});
