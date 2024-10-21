const filhos = ['Pedro', 'Arthur']
const filhas = ['Sofie', 'Marie']
const todos = filhos.concat(filhas)
console.log(todos)
// o método .concat() não altera o nenhum dos arrays. É criando um novo array com a concatenação.

console.log([-1, 0].concat([1, 2], [3, 4], 5, 6, [[7, 8],9], [[[10]]]))
console.log([-1, 0].concat([1, 2], [3, 4], 5, 6, [[7, 8],9], [[[10]]]).length)