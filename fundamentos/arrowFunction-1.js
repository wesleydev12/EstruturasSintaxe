// MANEIRAS DE SINTAXE PARA UMA FUNCTION ! ! !

let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

//
//
//

let ola = function () {
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())