// Atividade 44 — Painel de monitoramento de ambiente
// Uma equipe de suporte deseja monitorar as temperaturas registradas em diferentes salas de 
// um laboratório.
// Considere os dados iniciais:

const { questionInt, question, questionFloat } = require("readline-sync");

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

    console.clear()
    console.log("1. Apresentar as temperaturas de todas as salas.");
    console.log("2. Registrar uma nova temperatura para uma sala.");
    console.log("3. Identificar a sala com a maior temperatura.");
    console.log("4. Calcular a temperatura média das salas.");
    console.log("5. Contar quantas salas estão com temperatura acima de 27 °C.");
    console.log("6. Informar se alguma sala ultrapassou 30 °C.");
    console.log("7. Encerra programa!.");

    opcao = questionInt("Selecione uma opção: ")

    if (opcao === 1) {
        console.log("===== Temperaturas =====");
        for (let i = 0; i < temperaturas.length; i++) {
            console.log(`${salas[i]} - ${temperaturas[i]}`);
        }
        console.log("========================");
        question("Pressione ENTER para continuar...")

    } else if (opcao === 2) {

        while (true) {
            
        
        let nomeSala = question("Nome da sala: ")
        if (nomeSala === "") {
            console.log("Campo vazio, tente novamente.")
            continue
            
        }
        let temperaturaNova = questionFloat("Nova temperatura: ")

        temperaturas.push(temperaturaNova)
        salas.push(nomeSala)
        console.log("Nova sala e temperatura registrada com sucesso!")
        question("Pressione ENTER para continuar...")
            break
}
    } else if (opcao === 3) {
        let maiorTemp = 0;
        let indice = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > maiorTemp) {
                maiorTemp = temperaturas[i]
                indice = i
            }
        }
        console.log(`A maior temperatura pertence a ${salas[indice]}: ${maiorTemp}`)
        question("Pressione ENTER para continuar...")

    } else if (opcao === 4) {
        let soma = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            soma += temperaturas[i]
        }
        let media = soma / temperaturas.length
        console.log(`Média das temperaturas: ${media.toFixed(2)}`);
        question("Pressione ENTER para continuar...")

    } else if (opcao === 5) {
        let contadorMaior27 = 0;
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > 27) {
                contadorMaior27++
            }
        }
        if (contadorMaior27 === 0) {
            console.log("Nenhuma temperatura acima de 27");
        } else {
            console.log(`Foi encontrado ${contadorMaior27} sala(s) com temperatura maior que 27!`);
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 6) {
        let tempMaior30 = 0
        for (let i = 0; i < temperaturas.length; i++) {
            if (temperaturas[i] > 30) {
                console.log(`Temperatura na sala ${salas[i]} ultrapassou 30Cº`);
                tempMaior30++
            }
        } if (tempMaior30 === 0) {
            console.log("Nenhuma sala registra temperatura maior que 30.")
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 7) {
        console.log("Encerrando programa...");
        break
    } else {
        console.log("Opção inválida, tente novamente");
        question("Pressione ENTER para continuar...")
    }
}
