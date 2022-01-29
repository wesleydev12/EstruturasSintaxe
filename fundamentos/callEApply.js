// duas formas de se chamar, executar uma função

// Função a partir de um object
// a diferença entre o "call & apply" é exatamente a forma que eu passo os parametros na hora de invocar uma função a partir dos dois métodos
// PARAMETROS É OQUE ESTÁ DENTRO DOS PARENTESES A BAIXO
function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome} ${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.nome = 'Dell'

console.log(getPreco())
console.log(produto.getPreco(0.2))
console.log(produto.getPreco(' ',`U$`))

const car = {
    nome: 'Onix',
    preco: 49990, 
    desc: 0.20
}

console.log(getPreco.call(car))
console.log(getPreco.apply(car))

// duas formas de chamar call e apply

console.log(getPreco.call(car, 0.17, '$'))
console.log(getPreco.apply(car, [0.3, 'U$']))