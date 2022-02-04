// AULA 132

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log('1', pilotos)

// MÉTODO PARA REMOVES O ULTIMO ELEMENTO(ÍNDICE) DA ARRAY
// .pop()

pilotos.pop()
console.log('2', pilotos)

 // MÉTODO PARA ADCIONAR NO ULTIMO ÍNDICE DO ARRAY
 // .pop()

 pilotos.push('Verstappen')
 console.log('3', pilotos)

 // MÉTODO PARA REMOVER UM ELEMENTO DA PRIMEIRA[0] POSIÇÃO DO ARRAY

 pilotos.shift()
 console.log('4', pilotos)

 // MÉTODO PARA ADCIONAR UM NOVO ELEMENTO NO PRIMEIRO INDICE DO ARRAY

 pilotos.unshift('Rubinho Barriquelo')
 console.log('5', pilotos)

 // MÉTODO PARA DELETAR E ADCIONAR ELEMENTOS NO ARRAY
 // .splice()

 // vou adcionar a partir do indice [2], [0] não vou deletar nenhum elemento, e vou adcionar mais dois novos pilotos ao array
 //splice(2, 0, '...', '...')    <======

 pilotos.splice(2, 0, 'Bottas', 'Massa')

 console.log('6', pilotos)

 // REMOVENDO ELEMENTOS A PARTIR DO SPLICE
// SE EU COLOCAR pilotos.splice(1, 1) estou removendo o indice ao qual o primeiro parametro se refere
 pilotos.splice(2, 2) 
 console.log('6', pilotos)

 // MÉTODO QUE RETORNA UM NOVO ARRAY DE UM ARRAY
 // .slice()

 const algunsPilotos1 = pilotos.slice(2)
 // ESTOU CRIANDO UM NOVO ARRAY A PARTIR DO ÍNDICE[2] DA CONST pilotos 

 console.log('7', algunsPilotos1)

// ADCIONANDO NOVOS ELEMENTOS PARA O NOVO ARRAY algunsPilotos1

algunsPilotos1.splice(2, 0, 'Wesley') // se eu tivesse colocado .splice(1, 0, 'Wesley) o Wesley teria ido para detras do Vertappen
console.log('8', algunsPilotos1)

// PEGAR UMA PARTE DO ARRAY COM O MÉTODO SLICE
//.slice(1, 4) começando do índice [1] até o índice [4], só que o [4] não vai entrar.
// EXEMPLO

const algunsPilotos2 = pilotos.slice(1, 4)
console.log('9', algunsPilotos2)
console.log(algunsPilotos2.length)
