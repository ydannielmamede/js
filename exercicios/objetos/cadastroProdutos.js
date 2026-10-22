const { question } = require("readline-sync");

const exibirMenu = () => {
  console.clear()
  console.log("1 - Exibir todos os produtos")
  console.log("2 - Buscar produtos pelo id")
  console.log("3 - Listar produtos com estoque maior que zero")
  console.log("4 - Calcular o valor total do estoque, multiplicando o pteco pela quantidade disponivel de cada produto")
  console.log()
}
const exibiTodosProdutos = lista => {
  for (let i = 0; i < lista.length; i++) {
    console.log(`Nome: ${lista.nome}; preco: ${lista.preco}; Estoque: ${lista.estoque}`)
  }
}
const buscarProdutoId = lista => {

  while (true) {
    let opcao = question("Inserir indice: ");

    if (opcao === "") {
      console.log("Nao deixe o campo vazio.");
      question("Pressione ENTER para continuar...");
      continue
    }

    let indice = Number(opcao);

    if (indice < 0 || indice > lista.length) {
      console.log(`Selecione numeros de 0 ate ${lista.length - 1}`);
      question("Pressione ENTER para continuar...");
      continue
    }
    if (!Number.isInteger(indice)) {
      console.log("Opcao invalidade, tente novamente");
      question("Pressione ENTER para continuar...");
      continue
    }
    console.log(lista[indice]);
    break;
  }
}

const produtos = [
  { id: 1, nome: "Teclado", preco: 120, estoque: 5 },
  { id: 2, nome: "Mouse", preco: 60, estoque: 0 },
  { id: 3, nome: "Monitor", preco: 900, estoque: 3 }
];



