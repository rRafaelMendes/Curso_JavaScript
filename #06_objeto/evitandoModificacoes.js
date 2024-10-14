//Object.preventExtensions, um modo de previnir que seu objeto seja extendido.

const produto = Object.preventExtensions({
    nome: 'Doce de Leite', preco: '12.00', tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Bolacha'
produto.descricao = 'Bolacha salgada'
delete produto.tag
console.log(produto) //temos um objeto que pode ser modificado mas não podemos adiciona atributos 

// Object.seal

const pessoa = { nome: 'Diana', idade: 30}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 34
pessoa.nome = 'João'
console.log(pessoa) //vemos que não foi adicionado o atributo .sobrenome, não foi deletado o atributo .nome, porem conseguimos alterar os seus valores desses atributos

// Object.freeze = selado + valores constantes
