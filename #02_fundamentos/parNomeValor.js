// par nome/valor
const saudacao = "Opa" //contexto léxico"

function exec() {
    const saudacao = "OOOOOhaaa" // contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Rafael",
    idade: 43,
    peso: 94,
    endereco: {
        logradouro: "Rua do tolos",
        numero: 0
    }
}
console.log(saudacao)
console.log(exec())
console.log("Meu nome é " + cliente.nome + ", tenho " + cliente.idade + " anos. Moro na " + cliente.endereco.logradouro + ", número " + cliente.endereco.numero )