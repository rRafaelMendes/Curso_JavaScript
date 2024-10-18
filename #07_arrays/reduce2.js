const alunos = [
    { nome: 'Jão', nota: 5.2, bolsista: true },
    { nome: 'Pedro', nota: 5.5, bolsista: true },
    { nome: 'Maria', nota: 5.3, bolsista: true },
    { nome: 'Jão', nota: 5, bolsista: false }
]
// todos os alunos bolsistas ?
const alunoBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsista))

// algum aluno bolsista ?
const algumBolsista =  (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

