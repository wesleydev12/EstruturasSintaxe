console.log(soma(3, 4))
// posso chamar a função antes da mesma ser declarada. EXp linha 1
// function declaration
function soma(x, y) {
    return x + y
}

// não posso chamar a funçao antes de ser declarada
// ou seja, primeiro eu tenho que declarar a funçao e depois da linha que ela foi criada eu posso ultiliza-la
// function expression
// pegando uma função normal e atribuindo a uma const ou uma let
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))


// não posso chamar a funçao antes de ser declarada
// ou seja, primeiro eu tenho que declarar a funçao e depois da linha que ela foi criada eu posso ultiliza-la
// named function expression
// não é muito ultilizada essa forma de escrever uma função
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))