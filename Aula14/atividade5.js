const { question, questionInt, questionFloat } = require("readline-sync")
let pedidos = []
let pedidosJSON = ""
let pedidosRecuperados = []

function cadastrarPedidos() {
    const numero = pedidos.length +1
    const cliente = question("Nome do cliente: ")

    const produtos = []

    let continuar = "s";

    while (continuar === "s") {
        console.log("\n--- Produto ---");
        const nome = question("Nome do produto: ")
        const quantidade = questionInt("Quantidade: ")
        const preco = questionFloat("Preço unitário: ")

        const produto = {
            nome: nome,
            quantidade: quantidade,
            preco: preco
        };
        produtos.push(produto)
        continuar = question("\nDeseja adicionar outro produto? (s/n)")
    }
    let total = 0
    const totalProdutos = produtos.reduce((total,produto) => {
         return total + produto.preco * produto.quantidade
    },0)
    
    const novoPedido = {
        numero: numero,
        cliente: cliente,
        produtos: produtos,
        total: total,
        status: "Em preparo"
    }
    
    pedidos.push(novoPedido)
    console.log("\nPedido cadastrado com sucesso!");
    console.log(`Numero do pedido: ${numero}`);
    console.log("Total:");
}
function listarPedidos() {
    try {
        if (pedidos.length === 0) {
            throw new Error("Lista vazia");
        }
        pedidos.forEach( pedido => {
            console.log(``);
            

        })


    } catch (error) {
        console.log(`Error: ${error.message}`);
        
        
    }

}

let opcao

while (true) {
    console.clear()
    console.log("========== LANCHONETE DELIVERY ========== ")
    console.log("1 - Cadastrar pedido ")
    console.log("2 - Listar pedidos")
    console.log("3 - Exibir pedidos em JSON")
    console.log("4 - Recuperar pedidos do JSON")
    console.log("5 - Listar pedidos recuperados")
    console.log("6 - Sair ")

    opcao = questionInt("Escolha uma opção: ")

    switch (opcao) {
        case 1:
            cadastrarPedidos()
            break;
        case 2:
            listarPedidos()
            break
    
        default:
            break;
    }
    question("Pressione ENTER para continuar...")
}