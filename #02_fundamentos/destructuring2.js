//Desestruturando usando a extrutura de um array
const [a] = [20]
console.log(a)

const [a1, , a3, , a5, a6 = 0] = [10, 3, 5, 4]
/*
A const a1 do array recebe 10
A const vazia entre a1 e a3 do array recebe 3
A const a3 recebe 5
A const vazia entra a3 e a5 recebe 4
A const a5 não está definida
A const a6 recebeu 0
*/
console.log(a1, a3, a5, a6)

const [, [, nota]] = [[,10, 15], [9, 6, 8]]
console.log(nota)