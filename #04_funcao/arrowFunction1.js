let dobro = function(a) {
    return 2 * a
}
console.log(dobro(1))

dobro2 = (a) => {
    return 2 * a
}
console.log(dobro2(2))

dobro3 = a => 2 * a //return impricito

console.log(dobro3(4))

let ola = function () {
    return "Olá"

}
hello = () => "Hello"
ola = _ =>("Olá") //Possui um parametro
console.log(hello())
console.log(ola())