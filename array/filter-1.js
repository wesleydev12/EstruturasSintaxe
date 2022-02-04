// AULA 139

// FILTRAR UM ARRAY


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return false // true
}))

let produtoCaro = produto => produto.preco >= 500

let produtoFragil = produto => produto.fragil === true

const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)