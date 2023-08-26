const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function automatizar(listaPacientes, operacao, nomePaciente) {
    if (operacao === "agendar") {  // o paciente em questão deverá ser adicionado ao final da lista
        listaPacientes.splice(listaPacientes.length, 0, nomePaciente)
    } else {                        //o próximo (primeiro) paciente da fila deverá ser removido e 
        listaPacientes.splice(0, 1)                           //não é obrigatório informar o nome do paciente na função.

    }
    console.log(listaPacientes.join(','))
}

automatizar(pacientes, 'agendar', 'José')
automatizar(pacientes, 'atender')
