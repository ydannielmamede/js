import {question, questionInt} from "readline-sync";
import { buscarProduto, cadastrarProdutos, listarProdutos, produtos } from "./produtos.js";
import { calcularEstoque, quantidadeEstoque } from "./relatorios.js";



while(true) {
    console.clear()
    console.log("\n ===== SISTEMA DE ESTOQUE =====");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto");
    console.log("4 - Valor total do estoque");
    console.log("5 - Quantidade total de itens");
    console.log("6 - Sair");

    const opcao = questionInt("\n Escolha uma opcao: ")

    switch (opcao) {
        case 1:
            cadastrarProdutos()
            break;
        case 2:
            listarProdutos()
            break
        case 3:
            buscarProduto()
            break
        case 4:
            const total = calcularEstoque(produtos)
            console.log("\nValor total do estoque: R$", total.toFixed(2));
            break
        case 5:
            const quantidade = quantidadeEstoque(
                produtos
            )
            console.log("\nQuantidade total de itens: ", quantidade);
            break
        case 6:
            console.log("\nEncerrando o sistema...");
            process.exit()
        default:
            console.log("\nOpçao inválida!");
    }
    question("\nPressione Enter para continuar...")
}