// AULA 128

// CRIANDO UM OBJETO E TRANSFORMANDO ELE EM JSON

// A principal diferença entre um objeto JavaScript padrão e um JSON é o fato do JSON ser na realidade: um texto.
// JSON É EM FORMATO DE DADOS

/*
Um JSON deve conter apenas informações que possam ser representadas em formato de texto. 
Algumas regras:

Não pode ter funções;
Não pode ter comentários;
Todo texto sempre tem aspas duplas;
As propriedades sempre tem aspas duplas.

*/

// UM OBJETO NORAML

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return this.a + this.b + this.c
    }
}

console.log(obj.soma())

// MUDAR ELE PARA FORMA JSON

console.log(JSON.stringify(obj))

// AGORA VOU PEGAR UM JSON E PASSAR PARA UM OBJETO

// console.log(JSON.parse("{a: 1, b: 2, c:3}"))  NÃO É O FROMATO VALIDO

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))   NÃO É O FORMATO VALIDO

//FORMATOS JSON VALIDOS

console.log(JSON.parse('{"a": 1, "b": 2, "c": 2}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))

{
	"nome": "ana",
	"idade": 30,
	"legal": true,
	"filhos": [{

	}]
}