// O THIS É UMA FORMA DE REFERENCIAR O OBJETO ATUAL DAQUELA EXECUÇÃO

// FUNÇÃO BIND

const pessoa = {
    saudacao: 'Bom dia!',
    saudacao2: 'Boa noite!',
    falar() {
        console.log(this.saudacao) // SEM O this eu não conseguiria acessar saudação dentro do OBJECT pessoa.
    },
    chamar() {
        console.log(this.saudacao2)
    }               
}
pessoa.falar()
pessoa.chamar()

const falar = pessoa.falar
const falar2 = pessoa.chamar
// CONFLITO ENTRE PARADIGMAS. CHOQUE DE INFORMAÇÕES.

const falarDePessoa = pessoa.falar.bind(pessoa)
const falarDePessoa2 = pessoa.chamar.bind(pessoa)

falarDePessoa()
falarDePessoa2()