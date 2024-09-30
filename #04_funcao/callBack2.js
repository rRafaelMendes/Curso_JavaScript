const notas = [7.7, 5.5, 8.5, 3.4, 8.54, 6.99]

// Sem callBack
let notasBaixas1 = []
for(let i in notas) {
    if (notas[i] <= 7) {
        //push para add o elemento i no array notasBaixas
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callBack
//
notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7
})

console.log(notasBaixas2)

// callBack com Arrow Function

const notasBaixas3 = notas.filter (notas => notas <= 7 )
console.log(notasBaixas3)