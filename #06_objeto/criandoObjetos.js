// usando a notação literal de objetos
const obj1 = {}
console.log(obj1)
console.log(typeof obj1)

// Objeto em JavaScript
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)

    }
}

const p1 = new Produto('Caneta', 4.99, 0.20)
const p2 = new Produto('Apagador', 9.99, 0.15)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))


//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)

        }
    }
}

const f1 = criarFuncionario('João', 5999, 5)
const f2 = criarFuncionario('Maria', 4600, 1)
console.log(f1.getSalario(), f2.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)