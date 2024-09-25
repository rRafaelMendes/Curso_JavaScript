//Operadores Relacionais

//Retona verdadeiro caso os operadores sejam iguais
console.log("01)", "1" == 1)
//Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo
console.log("02)", "2" === 2)
//Retorna verdadeiro caso os operandos não sejam iguais.
console.log("03)", "3" != 3)
//Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
console.log("04)", "4" !== 4)
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
console.log("05)", 4 < 5)
//Retorna verdadeiro caso o operador da esquerda seja maior que o da direita
console.log("06)", 5 > 4)
//Retorna verdadeiro caso o operador da esqueda seja menor ou igual ao da direita
console.log("07)", 1 <= 2)
//Retorna verdadeiro caso o operador da esquerda seja maior ou igual ao da direita
console.log("08)", 9 >= 4)

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime)
console.log("12)", undefined == null)
console.log("13", undefined === null)