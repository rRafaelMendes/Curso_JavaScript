// um array nada mais é do que um objeto

console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Miguel')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// o método sort() ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //veja que o elemento foi "substituido pelo undefined" mas o ordem do array se manteve.

aprovados = ['Bia', 'Carlos', 'Ana']
//aprovados.splice(0, 1)
//.splice remove os elementos do array a partir do indice(primeiro elemento) e a quantidade(segundo elemento)
aprovados.splice(0, 4)// removendo mais todos o elementos do array ele retorna um array vazio 
console.log(aprovados)