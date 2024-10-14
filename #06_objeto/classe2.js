// Vamos criar 3 classes e ver a relação de herança entre elas

class Avo{
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)