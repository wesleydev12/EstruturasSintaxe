// obj notação literal EX:
// com chaves Ex: nome: & valores Ex: 'Rebeca'

const pessoa = {
    nome: 'Rebeca',
    idade: 18,
    altura: '1.81m'
}

console.log(Object.keys(pessoa)) // chaves dentro do objeto
console.log(Object.values(pessoa)) // valores dentro do objeto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // ela é uma propriedade que esta passiva a ser listada ?
    writable: false, //ela vai aceitar o valor ser modificado ? 
    value: '01/01/2019'
})

pessoa.dataNascimento = '02/02/2018'
console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Object.assign (ECMAScript 2015)

const destino = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obbj = Object.assign(destino, o1, o2) // priemrio parâmentro serve como destino para os outros parâmetros depois da PRIEMIRA vírgula.
                                
Object.freeze(obbj)
obbj.c = 1234
console.log(obbj)