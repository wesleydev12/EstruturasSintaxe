// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())


// O local onde a function dentro() foi definida, ela vao procurar pelo
// x(y) onde estiver mais perto, por que o x(y) tambem foi criado dentro de onde a function dentro foi criada
// exemplo a baixo

const y = 'Globo2'
function dentro1() {
    return y
}
function fora2() {
    const y = 'Local2'
    console.log(dentro1())
    return y
}

const minhaFuncao2 = fora2
console.log(minhaFuncao2())