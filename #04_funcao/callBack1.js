/*
Callback nada mais é do que passar
 uma função que vai ser chamada 
 quando algum evento acontecer

 O evento nesse caso é cada um dos elementos percorrdos no array.
*/
const Fabricantes = ["Mercedes-Bens", "Audi", "BMW", "Chevrolet", "BYD", "Fiat", "Ford"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

Fabricantes.forEach(imprimir)
Fabricantes.forEach(fabricante => console.log(fabricante))