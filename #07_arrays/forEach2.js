Array.prototype.forEach2 = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}

const aprovados = ['João', 'Pedro', 'Joaquim', 'Rafael']


aprovados.forEach2(function(nome, indice, array) {
    console.log(`Com função: ${indice + 1}) ${nome}`)
    console.log(nome, indice, array)
})
