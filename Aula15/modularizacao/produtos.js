import { perguntarNumeroFLoat, perguntarNumeroInt, perguntarTexto } from "./entrada.js";

export const produtos = []

export function cadastrarProdutos() {
    console.log("--- CADASTRO DE PRODUTOR ---");
    const nome = perguntarTexto("Nome: ")
    const preco = perguntarNumeroFLoat("Preco: ")
    const quantidade = perguntarNumeroInt("Quantidade: ")

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }
    produtos.push(produto)
}

export function listarProdutos() {
    console.log("\n--- PRODUTOS CADASTRADOS ---");
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return
    }
    produtos.forEach(produto => {
        console.log("\nNome:",produto.nome);
        console.log("\nPreço:",produto.preco);
        console.log("\nQuantidade:",produto.quantidade);
    })
}

export function buscarProduto() {
    const nome = perguntarTexto("\n Digite o nome do produto: ")

    const produtoEncontrado = produtos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase())

    if (produtoEncontrado) {
        console.log("\nProduto encontrado!");
        console.log(produtoEncontrado);
    }else{
        console.log("\nProduto nao encontrado");
    }
    
}