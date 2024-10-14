// JavaScriptObjectNotation - JSON
const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj)) //quando eu transaformo a o obj em 'JSON' ele retorna o JSON sem a função porque o JSON é um formato de dados.

//gerando um objeto a partir de um JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))