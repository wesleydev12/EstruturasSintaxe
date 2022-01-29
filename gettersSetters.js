// Encapsulamento
// MÉTODO get para LER o valor de uma variável
// MÉTODO set para ALTERAR o valor de uma variável

const sequencia = {
    _valor: 1, // Convenção, que essa variável é pretendida ser acessada apenas internamnete dentro desse obj sequencia.
    get valor() { return this._valor++ },   
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

// como chamar a função com GET e SET ?

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // if(valor > this_valor) por isso que nao vai ser 901
console.log(sequencia.valor, sequencia.valor)