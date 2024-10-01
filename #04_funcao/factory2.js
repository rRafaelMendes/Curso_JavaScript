function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: (preco * 0.1).toFixed(2)
    }
}
console.log(criarProduto("Notebook", 1999.99))
console.log(criarProduto("iPad", 1599.99))
