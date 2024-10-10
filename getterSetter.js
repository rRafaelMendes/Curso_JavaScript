const sequencia = {
    _valor: 1, //convenção
    get valor() { return this._valor++},
    /*
    O getter, com a sintaxe get é associado a uma função que será chamada quando a propriedade em questão for acessada e solicitada de forma dinâmica. É possível utilizá-la para retornar o status de uma variável interna, sem utilizar métodos de forma explícita
    */
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
    /*
    Geralmente usados junto com os getters, os setters são utilizados para definirem valores para uma propriedade específica.
    */
}
console.log(sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)