/*
## 01) Crie uma função que dado dois valores ( parâmetros ) mostre no console a soma,
subtração, multiplicação e divisão desses valores
*/

const exe = function(a, b) {
    return {
        soma: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b
    }
}

console.log(exe(1, 2))


/*
## 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function classificarTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(1, 1, 1))
console.log(classificarTriangulo(1, 2, 1))
console.log(classificarTriangulo(2, 1, 1))
console.log(classificarTriangulo(1, 1, 2))
console.log(classificarTriangulo(1, 2, 3))


/*
## 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function baseExpoente(z, x){
    let resultado = z ** x
    return resultado
}
console.log(baseExpoente(2, 8))


/*
## 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao (dividendo, divisor){
    console.log("Resultado: " + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}
divisao(11, 4)

/*
## 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function valor2(){
    this.bombom = 0.30000000000000004
    return `R$ ${this.bombom[2]}`
}

console.log(valor2(0.3)) // TENTEI FAZER

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}
formatarValorDecimal(0.1 + 0.2)

/*
## 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples (capitalInicial, taxa, tempo) {
    const resultadoSimples = `R$ ${capitalInicial + (capitalInicial * taxa * tempo)}`
    return  resultadoSimples
}
function jurosCompostos (capitalInicial, taxa, tempo) {
    const resultadoComposto = `R$ ${capitalInicial * (1 + taxa) ** tempo}`
    return resultadoComposto
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))