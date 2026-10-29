const { questionInt, question } = require("readline-sync");

const produtos = [
    { nome: "Mouse", categoria: "Periféricos", preco: 50, estoque: 4 },
    { nome: "Teclado", categoria: "Periféricos", preco: 120, estoque: 10 },
    { nome: "Monitor", categoria: "Monitores", preco: 800, estoque: 2 },
    { nome: "Webcam", categoria: "Acessórios", preco: 150, estoque: 6 },
    { nome: "Headset", categoria: "Áudio", preco: 180, estoque: 1 },
]

let opcao

while (true) {
    console.log("1 - Localizar um produto específico pelo nome");
    console.log("2 - Produtos com estoque baixo (<5)");
    console.log("3 - Verificar se existe algum proguto sem estoque");
    console.log("4 - Verificar se todos os produtos possuem estoque");
    console.log("5 - Lista com valores e nomes dos produtos");
    console.log("6 - Calcular o valor total do estoque");
    console.log("7 - Encerrar Programa");

    opcao = questionInt("Selecionar opção: ")

    if (opcao === 1) {
        const nomeProduto = question("Inserir nome do produto: ")

        const encontrarProduto = produtos.find(pr)
        
    }
}