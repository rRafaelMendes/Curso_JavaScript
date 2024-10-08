function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: "Notebook",
    preco: 1899, 
    desc: 0.1,
    getPreco
}
//como a variável nao foi definida no escopo global ele resulta em um NaN
console.log(getPreco())


//depois de definir a variável em um escopo global 
global.preco = 1500
global.desc = 0.25
console.log(getPreco())
console.log(produto.getPreco())

//call e Apply

const carro = {preco: 50000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//com o call é possivel mudar os parametros

console.log(getPreco.call(carro, 0.15, "$"))
// no apply tem que usar um array para passar os parametros
console.log(getPreco.apply(carro, [0.15, "&"]))