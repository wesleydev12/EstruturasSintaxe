// AULA 138
//      IMPLEMENTAÇÃO DO .map

/*
 TODO O CÓDIGO A BAIXO EXEMPLIFICA COMO UM .map FUNCIONA
*/

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i  < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


Array.prototype.map3 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

Array.prototype.map4 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

Array.prototype.map5 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

Array.prototype.map6 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
}


Array.prototype.map7 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

Array.prototype.map8 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

Array.prototype.map9 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i], i, this))
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const criarObjeto = json => JSON.parse(json)
const soPreco = produto => produto.preco

const resultado = carrinho.map9(criarObjeto).map9(soPreco)

console.log(resultado)