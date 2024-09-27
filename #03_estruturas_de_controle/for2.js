const notas = [9.34, 4.78, 2.63, 7.89]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: `Renato`,
    sobrenome: `Mendes`,
    idade: 20,
    peso: 90
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}