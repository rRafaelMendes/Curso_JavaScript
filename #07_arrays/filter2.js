Array.prototype.filter2 = function(callBack) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callBack(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: "Iphone 16 Pro", preco: 4999, fragil: true},
    {nome: "iPad Pro", preco: 3900, fragil: true},
    {nome: "MacBook Pro", preco: 7999, fragil: true},
    {nome: "Chaveiro Apple", preco: 59.90, fragil: false}
]

const caro = produto => produto.preco > 5000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))