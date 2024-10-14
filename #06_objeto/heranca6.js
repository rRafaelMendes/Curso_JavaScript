function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate breve', 345)
console.log(aula1, aula2)


// criando um função que simula o 'new'
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'Pao de Batata', 789)
const aula4 = novo(Aula, 'Tudo que precisa ser dito', 567)
console.log(aula3, aula4)