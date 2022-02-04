// AULA 131

// O ARRAY É UMA ESTRUTURA DE INDEX QUE COMEÇA DO ZERO
// [0, 1, 2, 3, 4 ...]
// O ARRAY É UM OBJETO, ESTRUTURA DINÂMICA
console.log(typeof Array, typeof new Array, typeof [])

// NÃO É RECOMENDÁVEL FAZER DESSA FORA, EXEMPLO:
 let aprovados = new Array('Bia', 'Junior', 'Ana')
console.log(aprovados)
// MELHOR FORMA DE SE FAZER UM ARRAY, EXEMPLO:

let cortes = ['Degrade', 'Social', 'Militar', aprovados]

console.log(cortes)
console.log(cortes[0])
console.log(cortes[3])
console.log(cortes[1])

// FORMA DE ADCIONAR UM NOVO ELEMENTO A UM ARRAY
// EXEMPLO:
// DESSA MANEIRA É MAIS COMUM PARA TROCAR ALGUM INDICE DENTRO DO ARRAY

cortes[4] = 'Corte na tesoura'
console.log(cortes[4])

// OUTRA FORMA DE ADCIONAR UM NOVO ELEMENTO NA ULTIMA POSIÇÃO DO ARRAY
// EXEMPLO:

let preco = function(valor) {
    this.valor = valor
    return valor
}

cortes.push(preco)

console.log('Posso adcionar functions dentro do array', cortes)

// MODO DE SABER QUANTOS ELEMENTOS TEM DENTRO DO ARRAY

console.log(cortes.length)

// MESMO SE EU COLOCAR UM ELEMENTO PULANDO DO NUMERO 6 AO 15 OU OUTRO QUALQUER, ELE VAI CONTABILIZAR TODOS OS ELEMENTOS(INDICE) ENTRE OS QUE FORAM CRIADOS. 
// EXEMPLO:

cortes[15] = 'Navalhado'
console.log('EXEMPLO dos indices criados:' ,cortes.length)

// 

console.log('Vendo os elementos que estão vazios', cortes)

// MÉTODO QUE ALTERA O ARRAY EM ORDEM
// DEIXANDO MAIS AJUSTADO E EM ORDEM

cortes.sort()
console.log(cortes)

// EXISTEM VARIAS FORMAS DE SE DELETAR UM ELEMENTO DE DENTRO DE UM ARRAY
// EXEMPLO:
// ELE DELETA E DEIXA A POSIÇÃO DELE COM undefined
delete cortes[4]
console.log('Mostrando como fica undefined quando o elemento é deletado:', cortes[4])

// ORGANIZANDO O ARRAY NOVAMENTE
// FUNCÃO SPLICE
// serve para adcionar elementos no determinado indice, remover elementos do array e REMOVER E ADCIONAR ELEMENTOS AO MESMO TEMPO
// O PRIMEIRO PARAMENTRO DENTRO () VAI INDICAR O ÍNDICE AO QUAL NÓS QUEREMOS TRABALHAR.
// O SEGUNDO PARAMENTRO DENTRO () VAI INDICAR POR ONDE COMEÇAR A DELETAR OS ÍNDICES DO ARRAY
// EXEMPLO ABAIXO:
cortes = ['Fade', 'Social', 'Corte na tesoura']

cortes.splice(1, 2)
console.log('Mostrando o splice deletando', cortes)

// AGORA VAMOS ADCIONAR ELEMENTOS DENTRO DO ARRAY USANDO O SPLICE
// VAMOS DELETAR A PARTIR DO INDICE 1 ELE VAI EXCLUIR DOIS ELEMENTOS E ADCIONAR DOIS NOVOS
// EXEMPLO ABAIXO:
cortes = ['Fade', 'Social', 'Corte na tesoura']
cortes.splice(1, 2, 'elemento1', 'elemento2')
console.log('Deletenado dois elementos e adcionando dois novos dentro do array usando splice():', cortes)
cortes = ['Fade', 'Social', 'Corte na tesoura']
cortes.splice(1, 0, 'elemento1', 'elemento2')
console.log('Adcionando mais dois elementos a partir do índice 1, sem excluir nenhum elemento do array:', cortes)