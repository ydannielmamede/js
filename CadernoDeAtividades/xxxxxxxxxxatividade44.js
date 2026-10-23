// Atividade 44 — Painel de monitoramento de ambiente
// Uma equipe de suporte deseja monitorar as temperaturas registradas em diferentes salas de 
// um laboratório.
// Considere os dados iniciais:

const { questionInt,question } = require("readline-sync");

// Desenvolva um programa que:
// 1. Apresente as temperaturas de todas as salas.
// 2. Permita registrar uma nova temperatura para uma sala.
// 3. Identifique a sala com a maior temperatura.
// 4. Calcule a temperatura média das salas.
// 5. Conte quantas salas estão com temperatura acima de 27 °C.
// 6. Informe se alguma sala ultrapassou 30 °C.
// 7. Encerre quando o usuário solicitar.


// Regras:
// • Os arrays devem manter as informações na mesma ordem.
// • Os índices devem ser validados.
// • A temperatura média deve ser calculada a partir dos valores atuais.
// • A maior temperatura deve ser encontrada por meio de uma repetição.
// • As alterações realizadas devem aparecer nas consultas seguintes.
// Desafio de organização: depois de concluir a versão inicial, separe os cálculos em funções e 
// compare as duas versões.
let salas = ["Laboratório 1", "Laboratório 2", "Laboratório 3"];
let temperaturas = [23.5, 29.8, 26.2];

let opcao
while (true) {

    console.log("1. Apresentar as temperaturas de todas as salas.");
    console.log("2. Registrar uma nova temperatura para uma sala.");
    console.log("3. Identifique a sala com a maior temperatura.");
    console.log("4. Calcule a temperatura média das salas.");
    console.log("5. Conte quantas salas estão com temperatura acima de 27 °C.");
    console.log("6. Informe se alguma sala ultrapassou 30 °C.");
    console.log("7. Encerre quando o usuário solicitar.");

    opcao = questionInt("Selecione uma opção: ")

    if (opcao === 1) {
        console.log("===== Temperaturas =====");
        for (let i = 0; i < temperaturas.length; i++) {
            console.log(`${i} - ${temperaturas[i]}`);
        }
        console.log("========================");
        
    } else if (opcao === 2) {
        let nomeSala = question("Nome da sala: ")

        let temperaturaNova = question("Nova temperatura: ")
        temperaturas.push(temperaturaNova)


    } else if (opcao === 3) {
        let maiorTemp = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > maiorTemp) {
                maiorTemp = temperaturas[i]
            }
        }

    } else if (opcao === 4) {
        let soma = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            soma += temperaturas[i]
        }
        let media = soma / temperaturas.length
        console.log(`Média das temperaturas: ${media}`);
    } else if (opcao === 5) {
        let contadorMaior27 = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > 27) {
                contadorMaior27++
            }
        }
        console.log(`${contadorMaior27} salas estão com temperatura maior que 27!`);
    } else if (opcao === 6) {
        let tempMaior30 = false
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > 30) {
                tempMaior30 = true
                console.log(`Temperatura na sala ${salas[i]} ultrapassou 30Cº`);
                break
            } else {
                console.log("Nenhuma sala ultrapassou 30 de temperatura");

            }
        }
    } else if (opcao === 7) {
        console.log("Encerrando programa...");
        break
    } else {
        console.log("Opção inválida, tente novamente");
    }
}