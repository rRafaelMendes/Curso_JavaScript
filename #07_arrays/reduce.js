const alunos = [
    { nome: 'Jão', nota: 5.2, bolsista: true },
    { nome: 'Pedro', nota: 5.5, bolsista: true },
    { nome: 'Maria', nota: 5.3, bolsista: true },
    { nome: 'Jão', nota: 5, bolsista: false },
]
console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acomulador, atual) {
    console.log(acomulador, atual)
    return acomulador + atual

}, 0)
console.log(resultado)