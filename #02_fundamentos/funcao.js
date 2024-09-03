//Função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)

}
imprimirSoma(2,5)
imprimirSoma(5)
imprimirSoma(2, 5, 7, 9, 2, 15)
imprimirSoma()


//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(33, 58))
console.log(soma(2))