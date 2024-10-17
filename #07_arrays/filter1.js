const produtos = [
    {nome: "Iphone 16 Pro", preco: 4999, fragil: true},
    {nome: "iPad Pro", preco: 3900, fragil: true},
    {nome: "MacBook Pro", preco: 7999, fragil: true},
    {nome: "Chaveiro Apple", preco: 59.90, fragil: false}
]
// constante para filtrar os produtos com preço menor que 4000
const maisBarato = produto => produto.preco < 4000

//constante para filtrar o produto que a fragilidade for verdadeira
const seEFragil = fragilidade => fragilidade.fragil

console.log(produtos.filter(maisBarato).filter(seEFragil))