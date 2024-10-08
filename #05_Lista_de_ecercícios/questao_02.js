
const tiposDeTrinagulos = function(a, b, c) {

    if (a == b | a == c) {
        console.log(`Triangulo Isóscele`)
    }

    if (a = b = c) {
        console.log(`Triangulo equilátero`)
    }

    /*if ((a /= b)&&( b /= c )&&(c /=a)) {
        console.log(`Triangulo Escaleno`)
    }*/

}
tiposDeTrinagulos(1, 2, 3)
tiposDeTrinagulos(1, 1, 2)
tiposDeTrinagulos(1, 1, 1)