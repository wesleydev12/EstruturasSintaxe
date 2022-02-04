// AULA 140 

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}



const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: false},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

let produtoCaro = produto => produto.preco >= 500

let produtoFragil = produto => produto.fragil === true

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(resultado)