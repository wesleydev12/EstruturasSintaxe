// AULA 133

// SIMULAÇÃO DE UM ARRAY PARA OBJETO

const quaseArray = { 0: 'Lia', 1: 'Wesley', 2: 'Dayane'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)