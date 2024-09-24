{
    {
        {
            {
                {
                    {
                        {
                            var sera = "Será?????"
                            console.log(sera)
                        }
                    }
                }
            }
        }
    }
}
console.log(sera)
// Isso mostra que mesmo estando dento de um bloco de código(que não seja uma função) a variável será visível.

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)//erro
//Já nesse caso, a variável foi definida dentro de uma funçao o que deixa ela inacessível fora do bloco de código em que ela é definida.
