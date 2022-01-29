const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 210,
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(MeuObjeto.__proto__)