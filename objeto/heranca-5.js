// AULA 125

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Todos são function e tem um atributo .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Wesley de Sousa'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a', 'b', 'c'].first())