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
  console.clear()
  console.log("1 - Localizar um produto específico pelo nome");
  console.log("2 - Produtos com estoque baixo (<5)");
  console.log("3 - Verificar se existe algum proguto sem estoque");
  console.log("4 - Verificar se todos os produtos possuem estoque");
  console.log("5 - Lista com valores e nomes dos produtos");
  console.log("6 - Calcular o valor total do estoque");
  console.log("7 - Encerrar Programa");

  opcao = questionInt("Selecionar opção: ")

  if (opcao === 1) {
    const nomeProduto = question("Inserir nome do produto: ").trim().toLocaleLowerCase()

    const encontrarProduto = produtos.find(produto => produto.nome.trim().toLocaleLowerCase() === nomeProduto)

    if (encontrarProduto) {
      console.log(`Produto encontrado: ${encontrarProduto.nome}`)

    }else{
      console.log("Produto nao encontrado")
    }

  }else if (opcao === 2) {

    const estoqueBaixo = produtos.filter(produto => produto.estoque < 5)
    console.log("===== Produtos com estoque baixo =====\n")
    estoqueBaixo.forEach(produto => {
      console.log(`Produto: ${produto.nome} - Estoque: ${produto.estoque}`)
    });

  }else if (opcao === 3) {

    const estoqueBaixo = produtos.some(produto => produto.estoque === 0)
    console.log(`Existe algum produto sem estoque? ${estoqueBaixo}`)

  }else if (opcao === 4) {

    const possuiEstoque = produtos.every(produto => produto.estoque > 0)
    console.log(`Todos os produtos possuem algum estoque? ${possuiEstoque}`)
    
  }else if (opcao === 5) {
    const listaValoresNomes = produtos.map(produto =>{  return {nome:produto.nome, preco: produto.preco }})

    listaValoresNomes.forEach(produto => {
    console.log(`Produto: ${produto.nome} - Preco: ${produto.preco}`)
    });
  }else if (opcao === 6) {

    const valorTotal = produtos.reduce((incremento,produto) => {
      return incremento + produto.preco * produto.estoque
    }, 0)
    console.log(`Valor total do estoque: ${valorTotal}`)
    
  }else if (opcao === 7) {
    console.log("Encerrando programa...")
    break
  }else{
    console.log("Opção invalida, tente novamente")
  }
  question("\nPressione ENTER para continuar...")
}
