Array.prototype.map2 = function(callBack) {
    const newArray = []
    for ( let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this))
    }
    return newArray

}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.40}',
    '{"nome": "Caderno", "preco": 30}',
    '{"nome": "Caneta", "preco": 3}',
    '{"nome": "Lápis", "preco": 2.50}'
]
// Retornar um array apenas com o precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)