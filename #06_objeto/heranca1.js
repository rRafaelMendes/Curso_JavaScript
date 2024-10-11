//POO: prototype 
//Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. 
const ferrari = {
    modelo: 'F40',
    cor: 'Vermelho'
}

const volvo = {
    modelo: 'XC90',
    cor: 'Branco'
}
/*
Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.
*/
console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)