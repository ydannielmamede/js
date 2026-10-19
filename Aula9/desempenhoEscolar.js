const { question } = require("readline-sync");

const notas = [];

const perguntarNomeAluno = () => {
    while (true) {
        const nome = question("Digite o nome do aluno: ").trim()

        if (nome === "") {
            console.log("Nao deixe o campo vazio!");
            continue
        }
        if (!isNaN(nome)) {
            console.log("Nao digite numeros.");
            continue
        }

        return nome;
    }
}

const inserirNota = () => {
    while (notas.length < 3) {
        let texto = question(`Digite a ${notas.length + 1}° nota: `).trim()

        if (texto === "") {
            console.log("Nao deixe o campo vazio.");
            continue
        }

        let nota = Number(texto)

        if (!Number.isFinite(nota)) {
            console.log("Digite apenas valores validos.");
            continue
        }

        if (nota < 0 || nota > 10) {
            console.log("Digite somente notas entre 0 e 10.");
            continue
        }

        notas.push(nota)
    }
}

const calcularMedia = () => {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    return (soma / notas.length).toFixed(2)

}


const situacaoFinal = media =>{
    if (media >= 7) {
        return ("Aprovado");
    }else if (media >= 5) {
        return ("Recuperacao");
    }else{
        return ("Reprovado");
    }
}



const mostrarResultado = () => {
    console.log("===== MEDIA FINAL =====");
    console.log(`Nome : ${nome}`);
    console.log(`Nota 1: ${notas[0]}`);
    console.log(`Nota 2: ${notas[1]}`);
    console.log(`Nota 3: ${notas[2]}`);
    console.log(`Media final: ${calcularMedia()}`);
    console.log(`Situação final: ${situacaoFinal(media)}`);
    
}

console.log("===== SISTEMA DE DESEMPENHO ESCOLAR =====");

const nome = perguntarNomeAluno()
inserirNota()
const media = calcularMedia()
mostrarResultado()

