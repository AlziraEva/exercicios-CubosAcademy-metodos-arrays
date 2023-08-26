const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


//A função deverá encontrar o carro na posição informada no segundo parâmetro e 
//capturar 3 carros subsequentes incluindo o que foi encontrado na posição informada.
//A função deve imprimir o resultado.
//Corola - Fusca - Chevete

function carros(nomes, posicao) {

    const nomesCopia = nomes.splice(posicao, 3).join(" - ")
    console.log(nomesCopia)

}

carros(nomes, posicao)