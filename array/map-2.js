// AULA 137

//                     D E S A F I O
// Mostrar apenas o preco de dentro do objeto.


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

/*
    ## 1) Chamar o Jason.parse para transformar as strings em objeto
    ## 2) Receber um objeto como uma entrada e vai retornar apenas o preço
*/

const paraObjeto = json => JSON.parse(json) // transformando texto JSON para um objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
// criei uma constante chamada resultado = carrinho(paraObjeto) para transformar toda a string em um objeto para poder depois então pegar só o preco
// com a contante apenasPreco que recebe uma função

console.log(resultado)












const clientesBarbearia = [
    '{"nome": "Paulo", "servico": "Barba e Degrade", "valor": 50.00}',
    '{"nome": "Claudio", "servico": "Degrade", "valor": 30.00}',
    '{"nome": "Eduardo", "servico": "Barba e Social", "valor": 50.00}',
    '{"nome": "Geovani", "servico": "Luzes e Degrade", "valor": 70.00}',
    '{"nome": "Luiz", "servico": "Inteligente e Barba e Degrade", "valor": 110.00}'
]

const clientesObjeto = json => JSON.parse(json)
const nomeCliente = cliente => cliente.nome
const servicoCliente = cliente => cliente.servico
const valorCliente = cliente => `R$: ${cliente.valor},00`

const resultadoCliente = clientesBarbearia.map(clientesObjeto).map(nomeCliente)
const resultadoServico = clientesBarbearia.map(clientesObjeto).map(servicoCliente)
const resultadoPreco = clientesBarbearia.map(clientesObjeto).map(valorCliente)
console.log(resultadoCliente)
console.log(resultadoServico)
console.log(resultadoPreco)