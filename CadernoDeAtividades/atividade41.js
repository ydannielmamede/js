// Atividade 41 — Sistema de reserva de salas
// Uma instituição de ensino precisa de um programa para controlar a reserva de suas salas de 
// estudo.
// O sistema deverá apresentar um menu com as opções:
// 1. Consultar salas.
// 2. Reservar uma sala.
// 3. Cancelar uma reserva.
// 4. Consultar quantidade de salas disponíveis.
// 5. Encerrar o sistema.

const { question, questionInt } = require("readline-sync");

// Para começar, considere estas salas:
let salas = ["Sala A", "Sala B", "Sala C", "Sala D"];
let reservadas = [false, true, false, false];
// Cada posição do array reservadas corresponde à sala na mesma posição do array salas. O valor 
// true indica que a sala está reservada, e false indica que está disponível.
// Requisitos:
// • Listar as salas com seus respectivos estados.
// • Permitir reservar apenas salas disponíveis.
// • Permitir cancelar apenas reservas existentes.
// • Validar a posição escolhida pelo usuário.
// • Contar e apresentar as salas disponíveis.
// • Manter o menu ativo até a escolha de encerramento.
// Conteúdos praticados: arrays, índices, operadores, condicionais, repetição, entrada de dados e 
// switch case.

const exibirMenu = () => {
    console.clear()
    console.log("1. Consultar salas.");
    console.log("2. Reservar uma sala");
    console.log("3. Cancelar uma reserva.");
    console.log("4. Consultar quantidade de salas disponíveis.");
    console.log("5. Encerrar o sistema.");
}
const consultarSalas = () => {
    for (let i = 0; i < salas.length; i++) {
        console.log(`Sala: ${salas[i]}; Reservada: ${reservadas[i]}`);
    }
}
const reservarSala = () => {
    console.log(`Salas disponiveis: `);
    for (let i = 0; i < salas.length; i++) {
        if (reservadas[i] === false) {
            console.log(`${i} - ${salas[i]}`);
        }
    }
    while (true) {
        let reserva = questionInt("Qual sala reservar? (escolher pelo indice): ")
        
        if (reservadas[reserva] === true || reserva < 0 || reserva > salas.length) {
            console.log("Sala indisponivel, tente novamente.");
            continue
        }
        reservadas[reserva] = true
        console.log("Reserva feita com sucesso!");
        break
    }

}
const cancelarReserva = () => {
    console.log(`Salas reservadas: `);
    for (let i = 0; i < salas.length; i++) {
        if (reservadas[i] === true) {
            console.log(`${i} - ${salas[i]}`);
        }
    }
    while (true) {
        let cancelamento = questionInt("Qual sala cancelar a reserva? (escolher pelo indice): ")
        if (reservadas[cancelamento] === false || cancelamento < 0 || cancelamento > salas.length - 1) {
            console.log("Sala indisponivel, tente novamente.");
            continue
        }
        reservadas[cancelamento] = false
        console.log("Reserva feita com sucesso!");
        break
    }

}
const consultarSalasDisponiveis = () => {
    let contador = 0
    for (let i = 0; i < salas.length; i++) {
        if (reservadas[i] === false) {
            contador++
            k
        }
    }
    console.log(`Salas disponiveis: ${contador}`);
}

const main = () => {
    let opcao;
    do {
        exibirMenu();
        opcao = questionInt("Inserir opcao: ")

        switch (opcao) {
            case 1:
                consultarSalas()
                question("Pressione ENTER para continuar...")
                break;
            case 2:
                reservarSala()
                question("Pressione ENTER para continuar...")
                break;
            case 3:
                cancelarReserva()
                question("Pressione ENTER para continuar...")
                break;
            case 4:
                consultarSalasDisponiveis()
                question("Pressione ENTER para continuar...")
                break;
            case 5:
                console.log("Encerrando programa...");
                break;
            default:
                console.log("Opcão invalida, tente novamente.");
                question("Pressione ENTER para continuar...")
                break;
        }

    } while (opcao !== 5);
}

main()
