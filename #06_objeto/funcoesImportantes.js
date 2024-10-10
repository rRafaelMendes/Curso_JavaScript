//
const pessoa = {
    nome: 'Renata',
    idade: 10,
    peso: 100
}
// O objeto é uma coleção de chaves(keys) e valores(value)

console.log('Chaves(keys):', Object.keys(pessoa))
console.log('Valores(value):', Object.values(pessoa))
//podemos também usar o método entries para acesar cada registro de chave e valor
console.log('Registros(entries):', Object.entries(pessoa))
// a partir dor forEach vamos percorer cada elemento(e) do array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//Usando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`Para cada chave: ${chave}: um valor: ${valor}`)
})

//Método .defineProperty()

Object.defineProperty(pessoa, 'dataNascimento', {
    //define se é uma própriedade que pode ser listada 
    enumerable: true,
    //define se a propriedade pode ser alterada
    writable: false,
    //definindo o valor da variável 
    value: '01/01/2000'

})
pessoa.dataNascimento = '01/01/2001'//veja que a data de aniversário não foi alterada 
console.log(pessoa)
console.log(Object.keys(pessoa))//veja que aqui a proriedade dataNascimento aparace porque o 'enumerable' permite que ele seja enumerado
console.log(Object.values(pessoa))

// Object.assing (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2, c: 3}// veja que o parametro c ficou com o valor do ultimo valor atribuido
const o2 = {c: 8, d: 10}
const obj = Object.assign(dest, o1, o2)
console.log(`O método Object.assign concatenou os outros objetos resultando no objeto:`, obj)

Object.freeze(obj)// o freeze congela o objeto e ele nao pode mais ser alterado a apartir dessa linha.
obj.c = 12034
