function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log("Final")
}
//teste1(5)
//teste1(8)

function teste2(num) {
    if(num > 7); {/* usar esse ; na estrutura de controle delimita a condição até àquele ponto.*/ 
        console.log(num)
    }
}
teste2(6)
teste2(8)