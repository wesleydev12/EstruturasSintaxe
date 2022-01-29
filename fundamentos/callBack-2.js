const notas = [7.7, 2.5, 8.6, 6.9, 5.8, 10, 4.7]

// SEM CALLBACK

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log("Exemplo 1", notasBaixas)

let notasAltas = []
for (let i in notas) {
    if (notas[i] > 7) {
        notasAltas.push(notas[i]) // "PUSH" é uma função para trazer elementos de array para outro
    }
}

console.log("Exemplo 2", notasAltas)

// COM CALLBACK
//"FILTER" é uma função que vai filtrar os eleemntos do array em cima de um determinadO critério.
// Que vai ser um funcção CALLBACK QUE VAI RETORNAR true ou false
// SE A FUNÇÃO RETORNAR TRUE, SIGNIFICA QUE AQUELE ELEMENTO DEVE SER ADCIONADO NO ARRAY QUE ESTÁ SENDO GERADO
// SE A FUNÇÃO RETORNAR FALSO, QUER DIZER QUE AQUELE ELEMENTO NÃO VAI SER ADCIONADO NO ARRAY QUE ESTÁ SENDO GERADO


// COM CALLBACK

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log("Exemplo 3", notasBaixas2)

// CALLBACK COM ARROW para abreviar mais o código

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log("Exemplo 4", notasBaixas3)

// PODE FAZER ASSIM TAMBÉM
const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)

console.log("Exemplo 5", notasBaixas4)