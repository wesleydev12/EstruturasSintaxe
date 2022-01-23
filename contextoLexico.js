const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()  

// quando uma funçao é declarada dentro de JS, ela tem consciencia o local onde foi definida. 
// minhaFuncao foi definida no escopo GLOBAL então quando ela foi exectuada dentro de exec por que ela procurou o escopo onde ela foi definida.