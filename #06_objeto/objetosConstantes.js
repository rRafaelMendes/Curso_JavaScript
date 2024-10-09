const pessoa = {nome: 'Kaio'}
pessoa.nome = 'Pedro'
console.log(pessoa)
/*
Porque a constante muda de valor?
Na verdade não é a constante que muda e o conteudo que está indexado aquele endereço de memória.
const pessoa -> endereço de memória => {Objeto}
*/
// se eu tentar mudar a constante ai teremos um erro
//pessoa = {nome: 'Maria'} TypeError: Assignment to constant variable.

//mas a partrir desse método nem mesmo o conteudo do objeto pessoa pode ser alterado
Object.freeze(pessoa)
pessoa.nome = "Marieta"
pessoa.end = "Rua Amelia"
delete pessoa.nome
//veja que nada foi alteradp dentro do objeto

console.log(pessoa.nome)
console.log(pessoa)