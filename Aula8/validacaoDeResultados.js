const entrada = require('readline-sync')

function verificarResultado(nota) {

    if (nota >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

let nota = Number(entrada.question("Digite a nota: "))
let resultado = verificarResultado(nota)

console.log(`Resultado: ${resultado}`);
