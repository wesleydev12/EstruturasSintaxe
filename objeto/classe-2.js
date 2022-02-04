// AULA 130
// COMO FUNCIONA A HERANÇA DENTRO DAS CLASSES

// COMO APONTAR UM CLASSE PARA OUTRA CLASSE COMO PROTOTIPO

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor' ) {
        super(sobrenome) // chamar a funcao construtora da class Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Sousa')
    }
}

const filho = new Filho
console.log(filho)