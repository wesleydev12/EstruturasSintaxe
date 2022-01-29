// ESTRATÉGIA 1 PARA GERAR VALOR PADRÃO   ainda hoje é ultilizado !
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(1), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// ESTRATÉGIA PARA GERAR VALOR PADRÃO
function soma2(a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a * b * c
}

console.log(soma2(1), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))


//
//
//
//
//
// VALOR PADRÃO DO ES2015  TRAS MENOS BUGS !
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(1), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))