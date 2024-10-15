const carrinho = [
    '{"nome": "Borracha", "preco": 3.40}',
    '{"nome": "Caderno", "preco": 30}',
    '{"nome": "Caneta", "preco": 3}',
    '{"nome": "Lápis", "preco": 2.50}'
]
// Retornar um array apenas com o precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)