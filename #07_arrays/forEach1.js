//Método forEach()
/*
Nesse método vemos que ele possui três parâmetros.
O nome -  que é o valor armazenado nesse parâmetro
O indice - que é a posição no array
O array - que é o o próprio array 
*/

const aprovados = ['João', 'Pedro', 'Joaquim', 'Rafael']

aprovados.forEach(function(nome, indice, array){
    console.log(`Com função: ${indice + 1}) ${nome}`)
    // Também no forEach() temos o parametro array.
    console.log(nome, indice, array)
})


//Método forEach() com arrow function
aprovados.forEach(nome => console.log(`Com arrow function: ${nome}`))


//Armazenando a função numa variável e passando a função como parametro.
const exibirAprovados = aprovado => console.log(`Usando função armazenada em uma variável: ${aprovado}`)
aprovados.forEach(exibirAprovados)

