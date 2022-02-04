// AULA 134

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(nome, indice, array)
})

aprovados.forEach(function(x, y) {
    console.log(`índice ${y + 1}: ${x}`)
})

const exibirAprovados = aprovados.forEach(function(x, y) {
    console.log(`índice ${y + 1}: ${x}`)
})

aprovados.forEach(x => console.log('aprovados.forEach', x))

const exibir = aprovado => {
    console.log('const EXIBIR', aprovado)
} 
aprovados.forEach(exibir)

