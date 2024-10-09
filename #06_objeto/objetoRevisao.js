// Coleção dinâmica de pares chave/valor

const produto = new Object


//definindo atributos dentro do objeto

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 300 
console.log(produto)


//deletando atributos do objeto

delete produto.preco
delete produto['marca do produto']
console.log(produto)
// um objetos pode ter varios atributos inclusive outros objetos, arrays, funções...
const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 30,
        endereco: {
            logradouro: 'Rua Abc',
            numero: 403
        }
    },
    condutores: [{
        nome: 'Pedro',
        idade: 30
    }, {
        nome: 'Rita',
        idade: 28
    }],


    calcularValorDoSeguro: function () {
        //...
    }

}
//posso manipular o objeto com o uso do .

carro.proprietario.endereco.numero = 13054
//ou cochetes
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores) //o atributo não está mais presente então ele retornua undefined 
console.log(carro.proprietario.length) //o atributo não está mais presente então ele retornua undefined 