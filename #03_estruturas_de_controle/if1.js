function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}
soBoaNoticia(6.9)
soBoaNoticia(7)
soBoaNoticia(7.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0) //unico numero que vai ser false
seForVerdadeEuFalo(-1) //verdade
seForVerdadeEuFalo(" ") //verdade
seForVerdadeEuFalo("?") //verdade
seForVerdadeEuFalo([]) //verdade
seForVerdadeEuFalo({}) //verdade
seForVerdadeEuFalo([1, 2]) //verdade