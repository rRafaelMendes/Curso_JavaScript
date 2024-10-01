// IIFE -> Immediately Invoked Function Expression
// Ou seja, uma função que se auto invova
(function(){
    console.log("Sera executado na hora")
    console.log("Foge do escopo mais abrangente!")
})()
//Padrao muito usado para fugir do escopo global