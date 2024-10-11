// Cadeia de protótipos (prototype chain
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) //demonsta bem como funciona o prototype, o objeto filho não possui o attr1 e ele é atribuido pelo método
console.log(filho.attr4)// passando um atributo que não foi definido retorna undefined

console.log(filho.attr0)//mostrando que ele encontra o atributo mesmo fora do objeto porque ele encontrou o atributo no 'Object.prototype'

console.log(filho.attr0, filho.attr1, filho.attr2, filho. attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtuel + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const ferrari = {
    modelo: 'Spider',
    velMax: 340
}
const porsche = {
    modelo: '911',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)//definindo a relação de protótipo

Object.setPrototypeOf(porsche, carro)//definindo a relação de protótipo

console.log(ferrari)
console.log(porsche)

porsche.aceleraMais(100)
console.log(porsche.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())