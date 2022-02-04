const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

 // DESAFIO 1: TODOS OS ALUNOS SÃO BOLSISTAS ?

 const todosBolsistas = (resultado, bolsista) => resultado && bolsista
 console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// DESAFIO 2: ALGUM ALUNO É BOLSISTA ?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
















/*
const bolsistas = alunosBolsa => alunosBolsa.bolsista
const resultado2 = alunos.map(bolsistas)

console.log(resultado2)

const bolsistas2 = function(alunosBolsa) {
    if(alunosBolsa.bolsista === true) {
        return true
    }
}
const resultado3 = alunos.map(bolsistas2)
console.log(resultado3)
*/

/* const bolsistas = alunos.map(a => a.bolsista)
console.log(bolsistas)
const resultado2 = alunos.map(a => a.bolsista).reduce(function() {
    if(this.bolsista === true) {
        return this 
    }
})

console.log(resultado2)
*/

/*console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // o ZERO ta sendo o segundo atributo do reduce */