
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log("Velocidade do Uno: " + uno.getVelocidadeAtual())
//mudando as instancias da função Carro
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log("Velocidade da Ferrari: " + ferrari.getVelocidadeAtual())