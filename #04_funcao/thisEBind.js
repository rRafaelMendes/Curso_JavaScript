// acessando o atributo de um objeto usando this.

const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar =  pessoa.falar

falar()

//.bind() você passa um objeto que no qual você quer que seja resolvido o this.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()