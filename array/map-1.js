// AULA 136

/* mapear um array para um outro array com o mesmo tamanho
só que com os dados transformados.
Percorrer cada um dos elementos e o resultado final ultilizando o ".map"
vai ser um novo array do mesmo tamanho com os dados transformados

Podemos então ter um .map que pega um Object e transforma em um número, um objeto e transforma em uma string, pegar um array com vários
JSON e transfomar em um object

se um array tem 5 elementos o .map vai transformar em outro array só que com os dados transformados.

*/

const nums = [ 1, 2, 3, 4, 5]
// armazenar o array resultante em uma variável (x)
// e vamos passar uma função callback para o map
// essa funão dentro do .map() recebe tres parametros que é o próprio valor atual, pode recebr o índice e pode receber um array
// tem que passar uma função que recebe o elemento atual

// no exemplo abaixo vamos duplicar os valores dos indices do array NUMS

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)