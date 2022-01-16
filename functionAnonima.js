// Oque é uma função anonima ?
// é uma função sem NOME

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function () {
        console.log('Opa!')
    }
}

pessoa.falar()  

// Você acessa essa function anonima a partir de um atributo do object que você definiu

// A FORMA A BAIXO TAMBEM É VALIDO DO EXEMPLO DADO NA LINHA 20

const pessoa = {
    falar() {
        console.log('Opa!')
    }
}

pessoa.falar()