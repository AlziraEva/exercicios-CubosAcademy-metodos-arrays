const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Rafa', 'Rubiana', 'Erick', 'Marcelo', 'Catarins', 'Talita', 'ronaldo', 'ruti', 'raquel', 'lazaro', 'vitor'];
const tamanhoDoGrupo = 4;

//A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o
// numero passado no segundo parâmetro. Caso não seja possível separar em grupos iguais, 
//o último grupo será o restante dos nomes. A função deve imprimir o resultado da divisão
// dos grupos.

function divisao(nomes, tamanho) {
    let indiceGrupo = 1
    for (i = 0; i < nomes.length; i += tamanho) {
        const grupo = nomes.splice(i, i + tamanho)
        console.log(`Grupo ${indiceGrupo}: ${grupo.join(", ")}.`)
        indiceGrupo++
    }

}
divisao(nomes, tamanhoDoGrupo)