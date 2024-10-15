const numeros = [1, 2, 3, 4, 5]
/*
Vamos criar uma novo array usando map() que vai retornar o array com o dobro do valores dentro dele.
Ex: array1 = [1, 2, 3]
    arrayResultado = [2, 4, 6]
*/

let resultado = numeros.map(function(e){
    return e * 2
})

// é importante observar que o array principal nao é modificado e sim é criando um novo array
console.log("Array Resultado: " + resultado + " Array Principal: " + numeros)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)