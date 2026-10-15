const { question } = require("readline-sync");

const verificarMedia = nota => nota >= 7 ? "Aprovado" : "Reprovado"

do {
    console.clear()
    console.log("1- Calcular 3 notas.");
    console.log("2- Sair do programa.");
    opcao = Number(question("\nDigite uma opcao: "))


    if (opcao === 1) {
        const notas = []

        for (let i = 0; i < 3; i++) {
            while (true) {
                let inserirNota = Number(question(`Digite a ${i + 1} nota: `))

                if (isNaN(inserirNota)) {
                    console.log("Digite um numero valido de 0 ate 10");
                    continue
                } else if (inserirNota < 0 || inserirNota > 10) {
                    console.log("Valores invalidos, tente numeros de 0 ate 10");
                    continue
                }
                notas.push(inserirNota)
                break;
            }
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
        question("Pressione ENTER para continuar...")

    } else if (opcao === 2) {
        console.log("Programa encerrado ");

    }

} while (opcao !== 2);