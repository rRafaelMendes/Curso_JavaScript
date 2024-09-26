function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}
let opcao = -1

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log("Opçao escolhida foi ${opcao}.")
}
console.log("Até a próxima")