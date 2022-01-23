// Resolução do problema da aula anterior 106

function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.50))
console.log(criarProduto('Mouse Hp', 99.50))
console.log(criarProduto('Tv60 Samsung', 3549.90))