const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];



function agendarPacientes(listaPacientes, paciente) {
    listaPacientes.splice(listaPacientes.length, 0, paciente)
    console.log(listaPacientes.join(", "))
}

agendarPacientes(pacientes, 'Vinicius')

function atenderPacientes(listaPacientes) {
    listaPacientes.splice(0, 1)
    console.log(listaPacientes.join(", "))
}
atenderPacientes(pacientes)

function cancelarAtendimento(listaPacientes, paciente) {
    listaPacientes.splice(listaPacientes.indexOf(paciente), 1)
    console.log(listaPacientes.join(", "))
}
cancelarAtendimento(pacientes, 'Pedro')
