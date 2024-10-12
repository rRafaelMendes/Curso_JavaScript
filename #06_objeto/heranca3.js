const pai = { noem: 'Pedro', corCabelo: 'preto' }

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))
//como saber se o atributo veio por herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}