function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}
console.log(area(2, 5))
console.log(area(8, 5))
console.log(area(4.1, 5))
console.log(area())
console.log(area(1))
console.log(area(1, 3, 6, 45, 45))