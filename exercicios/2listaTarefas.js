const { question } = require("readline-sync")

const tarefas = [];

while (opcao !== 4) {
  console.clear()
  console.log("1 - Adicionar tarefa");
  console.log("2 - Exibir tarefas");
  console.log("3 - Remover tarefa");
  console.log("4 - Consultar tarefa especifica");
  console.log("5 - Encerrar programa");

  let opcao = Number(question(("Inserir opcao: ")));

  if (opcao === 1) {
    let tarefa = question("Inserir nome da tarefa: ").trim();

    if (tarefa === "") {
      console.log("Nao deixe este campo vazio, tente novamente.")
      question("Pressione ENTER para continuar...")
      continue
    }
    tarefas.push(tarefa);
  } else if (opcao === 2) {
    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa para exibir")
    } else {
      for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i + 1} ${tarefas[i]} `)
      }
    }
    question("Pressione ENTER para continuar...")

  } else if ( ) {

  }

}
