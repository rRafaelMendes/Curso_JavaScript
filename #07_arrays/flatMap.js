// flatMap

const escola = [{
    nome: 'Turma 1º A',
    alunos: [{
        nome: 'Renato',
        nota: 5.3
    }, {
        nome: 'João',
        nota: 7.9
    }]
}, {
    nome: 'Turma 1º B',
    alunos: [{
        nome: 'Joaquina',
        nota: 9
    }, {
        nome: 'Rebeca',
        nota: 8.6
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


Array.prototype.flapMap2 = function(callBack) {
    return Array.prototype.concat.apply([], this.map(callBack))
}

const notas2 = escola.flapMap2(getNotasDaTurma)
console.log(notas2)

