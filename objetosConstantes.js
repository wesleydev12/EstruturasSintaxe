// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> { ... }
// pessoa = { nome: 'Ana' }

// congelando o objeto pessoa, uma fez que esta congelado não consigo mais mecher nesse objeto.
// mesmo que eu mude o nome, ele vai ignorar isso. EXEMPLO A BAIXO:

Object.freeze(pessoa)

pessoa.nome = 'Maria'  // não da pra alterar o objeto
pessoa.end = 'Rua C' // não da pra adcionar
delete pessoa.nome  // não da pra deletar

console.log(pessoa.nome)
console.log(pessoa)

// se eu quiser já passar um objeto com freeze

const pessaoConstante = Object.freeze({ nome: 'Joao' })

console.log(pessaoConstante)

