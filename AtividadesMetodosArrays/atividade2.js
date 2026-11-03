const { questionInt, question } = require("readline-sync");

// Atividade 2 – Sistema de Tarefas
const tarefas = [
  {
    titulo: "Criar tela de login",
    responsavel: "Ana",
    prioridade: 1,
    concluida: true,
    horas: 4
  },
  {
    titulo: "Criar banco de dados",
    responsavel: "Carlos",
    prioridade: 1,
    concluida: true,
    horas: 6
  },
  {
    titulo: "Implementar cadastro",
    responsavel: "Ana",
    prioridade: 2,
    concluida: false,
    horas: 8
  },
  {
    titulo: "Realizar testes",
    responsavel: "Marina",
    prioridade: 1,
    concluida: false,
    horas: 5
  },
  {
    titulo: "Escrever documentação",
    responsavel: "Carlos",
    prioridade: 3,
    concluida: false,
    horas: 3
  }
];
let opcao

while (true){ 
  console.log("1 - Encontrar uma tarefa pelo titulo")
  console.log("2 - Tarefas pendentes")
  console.log("3 - verificar se existe alguma pendência")
  console.log("4 - Verificar se todas as tarefas foram concluídas")
  console.log("5 - Criar uma lista resumida para um painel")
  console.log("6 - Calcular quantas hotas foram previstas no projeto")
  console.log("7 - Ordernar as tarefas pro prioridade")
  console.log("8 - Gerar relatório completo das tarefas")
  console.log("9 - Encerrar programa.")

  opcao = questionInt("Selecionar opcao: ")

  if (opcao === 9) {
    console.log("Encerrando programa...")
    break
  }

  switch (opcao) {
    case 1:
      let inputTarefa = question("Inserir nome da tarefa: ").trim().toLowerCase()
      if (inputTarefa === "") {
        console.log("Nao deixar o campo vazio")
        break
      }
      const encontrarTarefa = tarefas.find(tarefa => tarefa.titulo.trim().toLowerCase() === inputTarefa)
      if (encontrarTarefa) {
        console.log(`tarefa encontrada: ${encontrarTarefa.titulo}`)
      }else{
        console.log("Tarefa nao encontrada")
      }

      break;

    case 2:
      const tarefasPendentes = tarefas.filter(tarefa => tarefa.concluida === false)

      if (tarefasPendentes.length > 0) {
        console.log("===== Tarefa(s) Pendente(s) =====")
        tarefasPendentes.forEach(tarefa => {
          console.log(tarefa.titulo)
        });
      }
      break

    case 3:
      const existeTarefaPendente = tarefas.some(tarefa => tarefa.concluida === false)      

      console.log(existeTarefaPendente? `Existe tarefa pendente? ${existeTarefaPendente}`: `Existe tarefa pendente? ${existeTarefaPendente}`)
      break

    case 4:
        const todasTarefasConcluidas = tarefas.every(tarefa => tarefa.concluida === true)

      console.log(todasTarefasConcluidas? `Todas as tarefas foram concluidas? ${todasTarefasConcluidas}`: `Todas as tarefas foram concluidas? ${todasTarefasConcluidas}`)
      break
    case 5:
        const listaResumida = tarefas.map(tarefa =>{
          return{
            titulo: tarefa.titulo,
            responsavel: tarefa.responsavel,
            concluida: tarefa.concluida
          }
        })
      console.log(listaResumida)

      break
    case 6:
        const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida === true)

      const tarefasConcluidasPercentual = (tarefasConcluidas.length / tarefas.length) * 100

      const tarefasConcluidasTotal = tarefasConcluidas.reduce((total,tarefa) => {
        return total + tarefa.horas
      }, 0)
      console.log(`Total de horas das tarefas concluidas: ${tarefasConcluidasTotal} horas`)
      console.log(`Percentual de tarefas concluidas: ${tarefasConcluidasPercentual}%`)
      break
    case 7:
      const ordenarPorPrioridade = [...tarefas].sort((a,b) => a.prioridade - b.prioridade)
      console.log(ordenarPorPrioridade)
      break
    case 8:
      console.log("=====================")
      tarefas.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.titulo}`)
        console.log(`Responsavel: ${tarefa.responsavel}`)
        console.log(`Prioridade: ${tarefa.prioridade}`)
        console.log(`concluída: ${tarefa.concluida}`)
        console.log(`Horas: ${tarefa.horas}`)
        console.log("=====================")
      })
      break

    default:
      console.log("Opcao indisponivel, tente novamente")
      break;

  } 
  question("Pressione ENTER para continuar...")
}

// Desenvolvimento Solicitado:
// 1. FIND: encontra uma tarefa pelo título
// 2. FILTER: seleciona somente as tarefas pendentes
// 3. SOME: verifica se ainda existe alguma pendência
// 4. EVERY: verifica se todas as tarefas foram concluídas
// 5. MAP: cria uma lista resumida para um painel
// 6. REDUCE: calcula quantas horas foram previstas no projeto
// • Calcular quantas horas correspondem às tarefas concluídas
// • Calcular o percentual de tarefas concluídas
// 7. SORT: ordena as tarefas por prioridade
// 8. FOREACH: gera um relatório completo das tarefas
