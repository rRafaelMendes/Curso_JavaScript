function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma("a", "b", "c"))
/* 
O objeto arguments é uma variável local disponível dentro de todas a funçoes. Você pode referenciar os argumentos de uma função usando o objeto arguments. Esse objeto contém um registro de cada argumento fornecido para a função, com o índice do primeiro registro começando em 0.
*/
