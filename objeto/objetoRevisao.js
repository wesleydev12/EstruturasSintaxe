// Coleção dinâmica de pares chave/valor PODE ADCIONAR O ATRIBUTO DEPOIS DO ponto.
// Pode deletar com delete

const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.nome

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'RUA A',
            numero: 1190
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

console.log(carro)

// acessar os atributos

carro.proprietario.endereco.numero = 1000

console.log(carro)

// posso deletar com delete ex: delete carro.condutores