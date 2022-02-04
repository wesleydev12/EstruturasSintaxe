// AULA 141

// é uma função que serve para transformar um array em un único elemento
// array -> array / array -> numero / array -> string


const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // o ZERO ta sendo o segundo atributo do reduce

console.log(resultado)

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