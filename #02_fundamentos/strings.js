const nome = "Renat0"
//consiste em ler a string e retornar o valor no índice fornecido.
console.log(nome.charAt(4))
console.log(nome.charAt(7))
/*
O método charCodeAt() retorna um número inteiro que é representado na tabelas ASCII
*/
console.log(nome.charCodeAt(5))


// Mostra "Re"
console.log(nome.substring(0, 2));

// Mostra "na"
console.log(nome.substring(2, 4));

// Mostra "at"
console.log(nome.substring(4, 6));

// Mostra "Renat0"
console.log(nome.substring(0))
console.log(nome.replace(0, 'o'))

console.log("Sr. ".concat(nome.replace(0, 'o')).concat(" Mendes"))

console.log("Renato|Rafael|Neto|Bosco|Mateus".split("|"))