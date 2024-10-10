const a = 1
const b = 2 
const c = 3

const obj1 = {a: a, b: b, c: c} //Antes do ECMAScript 2015
const obj2 = { a, b, c}//Depois do ECMAScript 2015
console.log(obj1, obj2)

//Criando um atributo usando uma string

const nomeAttr = 'nota'
const valorAttr = 7.45

const obj3 = {}

obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //function expression
    },
    //mais usual
    funcao2() {
        //function expression
    }
}
console.log(obj5)