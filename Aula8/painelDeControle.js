const { question } = require("readline-sync");

let produtos = ['Mouse','Teclado','Monitor']
let opcao = 0;

function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

while (opcao !== 3) {
    console.log("\n1 - Listar produtos");
    console.log("2 - Quantidade de produtos ");
    console.log("3 - Sair");
    opcao = Number(question("Escolha: "))
    
    switch (opcao) {
        case 1:
            listarProdutos(produtos)
            break;
        case 2:
            console.log(`Quantidade: ${produtos.length}`);
            break;
        case 3:
            console.log("Encerrando...");
            break;
        default:
            console.log("Opcao invalida!");
            break;
    }
    

    
}