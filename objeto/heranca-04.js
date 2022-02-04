// AULA 124

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = MeuObjeto.prototype
const obj2 = MeuObjeto.prototype
console.log(obj1.__proto__ === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Boa noite meu nom é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

/*
 Uma vez que eu crio dois objeto diferentes a partir de uma mesma função contrutora.
 Os protótipos desses objetos apontam pro mesmo objeto por padrão?
 TRUE
*/

console.log(MeuObjeto.prototype === obj1.__proto__)

// Resumindo o conteúdo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
// MeuObjeto é uma função, tem o atributo __proto__ e aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(MeuObjeto.prototype.__proto__)

MeuObjeto.prototype.__proto__.nome = 'Wesley'
console.log(MeuObjeto.prototype.__proto__)
