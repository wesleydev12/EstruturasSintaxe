// O this em uma função arrow é associado ao contexto ao qual a função foi escrita


let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


// o this aponta para o MÓDILO CORRENTE, o arquivo ao qual essa funcção foi definida. '( THIS === PARAM )'

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

// o BIND não arranca o direcionamento do this dentro de uma ARROW "linha18".
