const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Bia'
filha1.corCabelo = 'loiro'
console.log(filha1)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Dayane', writable: false, enumerable:true},
    corCabelo: { value: 'castanho', writable: false, enumerable: true}
})

console.log(filha2)

const filha3 = Object.create(pai, {
    nome: {value: 'Fernando', writable: false, enumerable: true},
    corCabelo: {value: 'castanho claro', writable: false, enumerable: true},
    idade: {value: 17, writable: false, enumerable: true }
})

console.log(filha3)
console.log(pai)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}.`)

console.log(Object.keys(filha2))
console.log(Object.keys(filha3))


/*
    Filha2.ela te aquela propriedade, ela pertence a ela ? Logo após passo o nome da chave
    Se caso a propriedade pertença a Filha2, console.log(o nome da propriedade) se não ( : ) colocar um template string e o nome da propriedade (key)
*/
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herança: ${key}`)
}