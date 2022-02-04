// AULA 129
// muito importante, oque é orientação a objeto ? pesquisar depois.

// UMA CLASSE É UMA FUNÇÃO

class obj1 {

}
console.log(typeof obj1)

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -200)
const contas = new CicloFinanceiro(6, 2022)

contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())


