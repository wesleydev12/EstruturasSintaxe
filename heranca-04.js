// AULA 124

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new Object
const obj2 = new Object
console.log(obj1.__proto__ === obj2.__proto__)

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