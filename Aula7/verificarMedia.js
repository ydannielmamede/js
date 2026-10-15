const { question } = require("readline-sync")
console.clear()

const verificarMedia = nota => nota >= 7? "Aprovado": "Reprovado"

const notas = []

for (let i = 0; i < 3; i++) {
    let inserirNota = Number(question(`Digite a ${i+1} nota:`))
    notas.push(inserirNota)
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

const media = soma / notas.length

const resultadoMedia = verificarMedia(media)

console.log("===== RESULTADO DO ALUNO =====");
console.log(`Notas: ${notas}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Situação: ${resultadoMedia}`);




