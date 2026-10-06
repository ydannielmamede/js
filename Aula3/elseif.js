const { question } = require("readline-sync");

const NOTA = parseFloat(question("Nota do Aluno: ").replace(",", "."));
const NOTA_APROVACAO = 7
const NOTA_RECUPERACAO = 5

if (isNaN(nota)) {
    console.log("Digite apenas números");
} else if (nota < 0 || nota > 10) {
    console.log("Digite números entre 0 e 10");
} else if (nota >= NOTA_APROVACAO) {
    console.log("Aprovado");
} else if (nota >= NOTA_RECUPERACAO) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}