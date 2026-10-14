const { question } = require("readline-sync");

const vendas = [150, 80, 250, 45, 320, 120, 60];

do {
    console.clear()
    console.log("1. Registrar uma nova venda.");
    console.log("2. Exibir todas as vendas registradas");
    console.log("3. Consultar uma venda pela posição.");
    console.log("4. Alterar o valor de uma venda.");
    console.log("5. Cancelar uma venda.");
    console.log("6. Exibir o relatório de vendas.");
    console.log("7. Sair do sistema.");
    let opcao = Number(question("Digite uma opcao: "))


    if (opcao === 1) {
        let valorVenda = Number(question("Inserir valor da venda: "))
        if (valorVenda > 0) {
            vendas.push(valorVenda)
            console.log("Venda adicionada com sucesso");
            question("Pressione ENTER para continuar...")

        }
    } else if (opcao === 2) {
        for (let i = 0; i < vendas.length; i++) {
            console.log(`Valor ${vendas[i]}, indice ${i}`);
            if (vendas[0] === undefined) {
                console.log("Nenhuma venda registrada");
                question("Pressione ENTER para continuar...")
            }
        }

    } else if (opcao === 3) {
        let consultaIndice = Number(question("Inserir o valor do indice: "))

        if (consultaIndice >= 0 && consultaIndice < vendas.length) {
            console.log(`Valor da venda no indice ${consultaIndice}: ${vendas[consultaIndice]}`);
            question("Pressione ENTER para continuar...")
        } else {
            console.log(`Valor Invalido, tente novamente valores entre 0 e ${vendas.length - 1}`);
            question("Pressione ENTER para continuar...")
        }
    }else if (opcao === 4) {
        let indiceSubstituicao = Number(question("Inserir o valor do indice: "))
        let valorSubstituicao = Number(question("Inserir novo valor: "))
        
    }

} while (opcao !== 7);
