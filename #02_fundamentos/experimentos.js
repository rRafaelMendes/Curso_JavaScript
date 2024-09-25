let a = 3

global.b = 123

this.c = 456
this.d = true
this.e = "teste"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando uma variável maluca: sem var e let
abc = 4 //não é recomendado
console.log(global.abc)