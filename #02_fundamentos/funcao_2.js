//Armazenando uma função em uma variável 
const imprimirSoma = function (a, b) {   
    console.log(a + b)
}

imprimirSoma(25,45)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(12, 13))


// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(10, 17))
