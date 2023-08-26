const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
// a) Organize o array na ordem inversa e transforme em uma única string
// separada por vírgulas de forma q seja impresso:

let frutasInversas = ""

function inverso(frutas) {
    let frutasInversas = frutas.reverse().join(", ")
    console.log(frutasInversas)

}

inverso(frutas)

//b) Remova o primeiro e último item do array original e adicione a fruta Melão ao novo array
//['Maçã', 'Abacaxi', 'Pêra', 'Melão']

frutas.splice(0, 1)
frutas.splice(frutas.length - 1, 1, "Melão")
console.log(frutas)

