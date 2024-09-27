// Função em JavaScript é First-Class Object
// Higher-order function

// Criar uma função de forma literal.

function funcaoUm() { }

// Armazenar uma variável em uma função

const funcaoDois = function () { }

// Armazenar uma função em um array.

const array = [function(a, b) { return a + b }, funcaoUm, funcaoDois]
console.log(array[0](2, 3))

// Armazenar uma função em um atributo de objeto.

const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

// Passar uma função como parametro para outra função.

function run(fun) {
    fun()
}
run(function () { console.log("Executando...")})

// Uma função pode retornar/conter uma função.

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)