console.log(Math.ceil(6.1))
//função que arredonca pra cima
console.log(Math.floor(5.9))


const obj1 = {}
obj1.nome = "Fusion"
obj1.marca = "Ford"
console.log("Seu carro é um " + obj1.nome + " e a marca é " + obj1.marca + "!")

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log("Exec...")
    }
}
const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()