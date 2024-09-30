const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}
// O contexto léxico é muito importante pra uma função por que quando ela for declarada, ela carrega o contexto no qual ela foi escrita.

function exec() {
    const valor = "Local"
    minhaFuncao()
}
exec()