// oque é uma function Factory ?
// é uma função que retorna um objeto

// em vez de criar vários objetos com os mesmos parametros
// EX a baixo

const prod1 = {
    nome: '...',
    preco: 45,
    tamanho: '...'
}
const prod2 = {
    nome: '...',
    preco: 45,
    tamanho: '...'
}


// criaremos uma function factory

// Factory simples
// Dentro de uma function você retorna um objeto

function criarPessoa() {
    return {
        nome: 'Wesley',
        idade: '30',
        altura: '1,75'
    }
}

/* TENTATIVAS DE ACERTAR O CONTEUDO DA AULA 2 DE FACTORY */


function criarProduto(nome, preco) {
    return nome + preco
}

console.log(criarProduto('Oi ', 450))


const criarProduto1 = function(nome1, preco1) {
    const precoDesconto = function(x, y) {
        return preco1 % 10
    }
    return {
        nome: nome1,
        preco: preco1
    }
}

console.log(criarProduto1('Whal', 883.87))
console.log(criarProduto1('Vulcan', 529.99))