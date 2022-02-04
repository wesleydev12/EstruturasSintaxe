// AULA 127
// testes 
// Objecet.preventExtensions (ele vai previnir que o object seja extendido, não vai dar para adcionar novos atributos no objeto)

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extesível:', Object.isExtensible(produto))
// Object.isExtensible(exemplo) me mostra se o objeto foi criado com 'preventExtensions' ou não.

produto.nome = 'Borracha' // pode alterar
produto.descricao = 'Borracha escolar branca' // não pode acrescentar
delete produto.tag // pode deletar
console.log(produto)

// Object.seal (seal = selar)

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
// Oque acontece quando usamos Object.seal(exemplo) ?
// Você não consegue adcionar novos atributos, não da para excluir atributos do objeto
// Mas consigo modificar os valores dos atributos do objeto

console.log('Selado', Object.isSealed(pessoa))
//isSealed serve para ver se o objeto está selado

pessoa.sobreNome = 'Silvia' // não da para adcionar novos atributos
delete pessoa.nome //não da para deletar atributos
pessoa.idade = 29 // SIM consigo mudar os valores dos atributos
console.log(pessoa)

// Object.freeze = selado + valores constantes
// não da para fazer nada só deletar os atributos