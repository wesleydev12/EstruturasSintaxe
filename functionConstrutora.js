function Car(velocidadeMaxima = 200, delta = 5) {
    // atributo prvidado ( uqe pertence apenas ao escopo Car dessa função)
    let velocidadeAtual = 0

    // método público com THIS
    // se a velocidadeAtual + o delta ele for menor ou igual a velocidade máxima, eu posso tranquilamente acrescentar a velocidade atual com o valor de delta. LEITURA DE LINHA  11  /  12
    // caso contrario, caso seja maior velocidadeAtual + delta > velocidadeMaxima; eu posso inclusive colocar um ELSE. velocidadeAtual = velocidadeMaxima
    // Imaginando a situação de que a velocidadeMaxima está 199 como acrecentaríamos +5 do delta na velocidade podendo então ultrapassar a velocidade permitida de 200. Foi por isso que colocamos um ELSE igualando as duas velocidades.

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    // ao qual vai ser responsável por pegar a velocidade atual
    // permitindo o acesso a essa variavel a partir de uma função 
    
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Car 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Car(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())