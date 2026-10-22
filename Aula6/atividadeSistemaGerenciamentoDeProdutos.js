const { question } = require("readline-sync");

let produtos = [
  "Teclado",
  "Mouse",
  "Monitor",
  "Notebook",
  "Impressora"
];

do {
  console.clear()
  console.log("1. Listar todos os produtos, exibindo índice e nome.");
  console.log("2. Adicionar um produto ao final da lista");
  console.log("3. Adicionar um produto no início");
  console.log("4. Remover o último produto");
  console.log("5. Consultar um produto por índice.");
  console.log("6. Substituir um produto em uma posição informada");
  console.log("7. Remover um produto de uma posição informada");
  console.log("8. Encerrar o programa.");

  opcao = Number(question("Digite uma opcao: "))

  if (opcao === 1) {
    for (let i = 0; i < produtos.length; i++) {
      console.log(`Indice: ${i}, produto: ${produtos[i]}`);
    }
    question("Pressione ENTER para continuar...")
  } else if (opcao === 2) {
    let adicionarProdutoFinal = question("Inserir nome do produto para adicionar ao final da lista: ")
    produtos.push(adicionarProdutoFinal);
    question("Pressione ENTER para continuar...")
  } else if (opcao === 3) {
    let adicionarProdutoInicio = question("Inserir nome do produto para adicionar ao inicio da lista: ")
    produtos.unshift(adicionarProdutoInicio);
    question("Pressione ENTER para continuar...")
  } else if (opcao === 4) {
    produtos.pop()
    console.log("O ultimo produto da lista foi removido.");
    question("Pressione ENTER para continuar...")
  } else if (opcao === 5) {
    let consultaPorIndice = Number(question(`Insira um indice de 0 ate ${produtos.length - 1} para consultar: `))
    if (consultaPorIndice > 0 && consultaPorIndice < produtos.length) {
      console.log(`Indice ${consultaPorIndice} pertence ao produto: ${produtos[consultaPorIndice]}`);
      question("Pressione ENTER para continuar...")
    } else {
      console.log("Produto não encontrado tente novamente.");
      question("Pressione ENTER para continuar...")
    }
  } else if (opcao === 6) {
    let posicao = Number(question(`Insira a posicao do produto pelo indice de 0 ate ${produtos.length - 1} para fazer a substituicao: `))
    let novoNomeProduto = question("Qual o nome do novo produto? ")
    produtos.splice(posicao, 1, novoNomeProduto)
    question("Pressione ENTER para continuar...")
  } else if (opcao === 7) {
    let posicao = Number(question(`Insira a posicao do produto pelo indice de 0 ate ${produtos.length - 1} para fazer a remocao: `))
    produtos.splice(posicao, 1)
    question("Pressione ENTER para continuar...")
  } else if (opcao === 8) {
    console.log("Programa encerrado");
    break
  }


} while (opcao !== 8)
