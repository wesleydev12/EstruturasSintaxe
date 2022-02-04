// AULA 126

function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 124)
const aula2 = new Aula('Até Breve', 425)

console.log(aula1, aula2)

// OQUE ACONTECE SEM USAR O new aula !

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)

console.log(aula3)