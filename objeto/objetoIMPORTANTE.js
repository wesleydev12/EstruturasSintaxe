const pessoa1 = new Object
pessoa1.nome = 'Wesley'
pessoa1.sobrenome = 'Sousa'
pessoa1.idade = 30
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    const anoNascimento = dataAtual.getFullYear() - this.idade
    return (`${this.nome} tem ${this.idade}. Ou seja ele nasceu em ${anoNascimento}`)
}
console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNascimento())

// VER TODAS AS CHAVES DENTRO DE UM OBJETO:
// OQUE SÃO CHAVES DENTRO DE UM OBJETO EX:
// QUANDO AS FUNCTIONS ESTÃO DENTRO DE OBJETOS, SÃO CHAMADAS DE MÉTODO
/*
const OBJETO = {
    chave-nome = atributo
    chave-sobreNome = atributo
    metodo function
}
*/

for (const chave in pessoa1) {
    console.log('Chaves do Objeto pessoa1')
    console.log(chave)
}

// VER OS ATRIBUTOS DAS CHAVES

for (const attr in pessoa1) {
    console.log('Atributos das chaves')
    console.log(pessoa1[attr])
}

// Factory functions / Constructor function // Classes
