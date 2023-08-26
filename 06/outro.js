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
    console.log(usuarios.join())

}

encontrarDono(usuarios, "Naninha")