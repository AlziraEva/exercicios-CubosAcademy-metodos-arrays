const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

// Supondo que estamos buscando o pet Max, ao encontrar, o sistema deverá imprimir 
//a mensagem O dono(a) do(a) Max é o(a) João, caso contrário, irá imprimrir 
//Que pena Max, não encontramos seu dono(a).

function encontrarDono(usuarios, pet) { //Crie uma função que facilite encontrar o dono de um pet específico.
    let encontrou = false
    let dono = ""
    for (let item of usuarios) {
        if (item.pets.includes(pet)) {
            dono = item.nome
            encontrou = true
        }
    }
    if (encontrou) {
        console.log(`O dono(a) do(a) ${pet} é o(a) ${dono}`)
    } else {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`)
    }
}

encontrarDono(usuarios, "Naninha")