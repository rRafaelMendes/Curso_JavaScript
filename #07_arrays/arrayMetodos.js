const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //.pop() remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')// .push() adiciona o elemento no ultimo lugar do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamiltonm') // inclui o elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//removendo
pilotos.splice(3, 1) //remove 1 elemento depois do indice 3 que no caso é 'Massa'
console.log(pilotos)

pilotos.sort()
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)