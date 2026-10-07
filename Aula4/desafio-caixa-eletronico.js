const { question } = require("readline-sync");

let opcao;
let saldoAtual = 0;
let quantidadeSaque;
let valorDeposito;

while (opcao !== 4) {
    console.clear()
    console.log("===== CAIXA ELETRONICO =====");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar Dinheiro");
    console.log("3 - Sacar dinheiro");
    console.log("4 - Sair");

    opcao = Number(question("\ndigite uma opcao: "))

    switch (opcao) {
        case 1:
            console.log(`Saldo atual: ${saldoAtual}`);
            question("\nPressione enter para voltar")
            break;
        case 2:
            valorDeposito = Number(question("Qual o valor do deposito? "))
            saldoAtual = saldoAtual + valorDeposito
            console.log(`Foi efetuado um deposito de ${valorDeposito}`);
            question("\nPressione enter para voltar")
            break
        case 3:
            quantidadeSaque = Number(question("qual a quantidade do valor a sacar? "))
            if (quantidadeSaque < saldoAtual && quantidadeSaque > 0) {
                saldoAtual = saldoAtual - quantidadeSaque;
                console.log(`Saque realizado! saldo atual ${saldoAtual}`);
                question("\nPressione enter para voltar")
            } else if (quantidadeSaque > saldoAtual) {
                console.log("Saldo insuficiente");
                question("\nPressione enter para voltar")

            } else if (quantidadeSaque <= 0) {
                console.log("digite um valor valido para saque");
                question("\nPressione enter para voltar")
            }
            break
        case 4:
            console.log("Programa encerrado");

            break
        default:
            console.log("Digite uma opocao valida");
            break;
    }
}