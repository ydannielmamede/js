const { question } = require("readline-sync");

let opcao;

do {
    console.clear(); // limpa a tela

    console.log("===== SISTEMA =====");
    console.log("1 - Cadastrar");
    console.log("2 - Consultar");
    console.log("3 - Relatório");
    console.log("4 - Sair");

    opcao = Number(question("Digite uma opcao: "));

    console.clear(); // limpa após a escolha

    switch (opcao) {
        case 1:
            console.log("Cadastro realizado!");
            question("\nPressione ENTER para voltar...");
            break;

        case 2:
            console.log("Consulta realizada!");
            question("\nPressione ENTER para voltar...");
            break;

        case 3:
            console.log("Relatório feito!");
            question("\nPressione ENTER para voltar...");
            break;

        case 4:
            console.log("Saindo do programa...");
            break;

        default:
            console.log("Digite uma opção válida (1-4)");
            question("\nPressione ENTER para continuar...");
            break;
    }

} while (opcao !== 4);