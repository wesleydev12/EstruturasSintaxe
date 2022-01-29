const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // antigamente

const obj2 = { a, b, c} // modo novo de fazer

console.log(obj1, obj2)


const nomeAtr = 'Nota'
const valorAtr = 7.5


// VERSÃO ANTIGA DE ESCREVER O CÓDIGO
const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

// VERSÃO MAIS NOVA 

const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

// COMO DEFINIER FUNÇÕES DENTRO DE UM OBJETO LITERAL

// FORMA ANTIGA DE ESCREVER O CÓDIGO

const obj5 = {
    funcao1: function() {

    }
}

// FORMA NOVA DE DEFINIR UMA UNÇÃO DENTRO DE UM OBJETO LITERAL

const obj6 = {
    funcao1() {
        
    }
}