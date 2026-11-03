// Atividade 3 — Sistema de gerenciamento de clínica veterinária
// Contexto: Uma clínica veterinária deseja organizar seus atendimentos, animais cadastrados,
  // responsáveis e situações das consultas.

  const { questionInt, question } = require("readline-sync");

const realizarConsulta = (lista,nome) => {
  const encontrarConsulta = lista.find(consulta => consulta.animal.trim().toLowerCase() === nome.trim().toLowerCase())
  if (encontrarConsulta) {
    encontrarConsulta.realizada = true
    return true
  }else{
    return false
  }
}

// Estrutura inicial:
const consultas = [
  {
    animal: "Thor",
    especie: "Cachorro",
    tutor: "Marcos",
    veterinario: "Dra. Ana",
    procedimento: "Consulta",
    valor: 120,
    realizada: true
  },
  {
    animal: "Luna",
    especie: "Gato",
    tutor: "Carla",
    veterinario: "Dr. Pedro",
    procedimento: "Vacina",
    valor: 90,
    realizada: true
  },
  {
    animal: "Bob",
    especie: "Cachorro",
    tutor: "Marcos",
    veterinario: "Dra. Ana",
    procedimento: "Exame",
    valor: 180,
    realizada: false
  },
  {
    animal: "Mel",
    especie: "Gato",
    tutor: "Juliana",
    veterinario: "Dr. Pedro",
    procedimento: "Consulta",
    valor: 120,
    realizada: false
  },
  {
    animal: "Max",
    especie: "Cachorro",
    tutor: "Roberto",
    veterinario: "Dra. Ana",
    procedimento: "Vacina",
    valor: 90,
    realizada: true
  }
];
let opcao
while (true) {
  console.clear()
  console.log("1 - Buscar pelo nome do animal")
  console.log("2 - Filtrar consultas de determinado veterinario")
  console.log("3 - Filtrar consultas ainda nao realizadas")
  console.log("4 - Filtrar consultas de animais de uma determinada espécie")
  console.log("5 - Verificar se existem consultas pendentes")
  console.log("6 - Verificar se todas as consultas foram realizadas")
  console.log("7 - Gerar relacao contendo animal, tutor e procedimento")
  console.log("8 - Calcular o valor total dos procedimentos cadastrados")
  console.log("9 - Contar quantas consultas foram realizadas")
  console.log("10 - Ordenar consultas pelo nome do animal")
  console.log("11 - Gerar relatório por veterinario")
  console.log("12 - Realizar Consulta")

  opcao = questionInt("Inserir opcao: ")

  switch (opcao) {
    case 1:
      const inputNomeAnimal = question("Iserir nome do animal: ").trim().toLowerCase()

      const fichaAnimal = consultas.find(consulta => consulta.animal.trim().toLowerCase() === inputNomeAnimal)

      if (fichaAnimal) {
        console.log(fichaAnimal)
      }else{
        console.log("Animal nao encontrado, tente novamente")
      }

      break;
    case 2:
      const inputVeterinario = question("Inserir nome do veterinário: ").trim().toLowerCase()
      const listasVeterinario = consultas.filter(consulta => consulta.veterinario.trim().toLowerCase() === inputVeterinario)
      if (listasVeterinario.length > 0) {
        console.log(listasVeterinario)
      }else{
        console.log("Veterinario nao encontrado")
      }
      break
    case 3:
      const consultasNaoRealizadas = consultas.filter(consultas => consultas.realizada === false)
      if (consultasNaoRealizadas.length > 0) {
        console.log(consultasNaoRealizadas)
      }else{
        console.log("Nenhuma consulta pendente")
      }
      break
    case 4:
      const inputEspecie = question("Inserir nome da espécie: ").trim().toLowerCase()
      const listaEspecie = consultas.filter(consulta => consulta.especie.trim().toLowerCase() === inputEspecie)
      console.log(listaEspecie)
      break
    case 5:
      const existeConsultaPendente = consultas.some(consulta => consulta.realizada === false)
      console.log(`Existe consultas pendentes? ${existeConsultaPendente}`)
      break
    case 6:
        const todasConsultasRealizadas = consultas.every(consulta => consulta.realizada === true)
      console.log(`Todas a consultas foram realizadas? ${todasConsultasRealizadas}`)
      break
    case 7:
        const novaRelacao = consultas.map(consulta => {
          return{
            animal : consulta.animal,
            tutor : consulta.tutor,
            procedimento : consulta.procedimento
          }
        })
      console.log(novaRelacao)
      break
    case 8:
      const valorTotalProcedimentosCadastrados = consultas.reduce((total,consulta) => {
        return total + consulta.valor
      }, 0 )
      console.log(`Valor total dos procedimentos cadastrados ${valorTotalProcedimentosCadastrados}`)
      break
    case 9:
      const consultasRealizadas = consultas.filter(consulta => consulta.realizada === true)
      console.log(`Quantidade de consultas realizadas ${consultasRealizadas.length}`)
      break
    case 10:
      const consultasOrdenadas = [...consultas].sort((a, b) => 
        a.animal.localeCompare(b.animal)
      );
      console.log(consultasOrdenadas);
      break;
    case 11:
      consultas.forEach(consulta => {
        const status = consulta.realizada? "Realizada" : "Pendente"
        console.log(`Veterinario: ${consulta.veterinario} | Procedimento: ${consulta.procedimento} | Animal: ${consulta.animal} | Tutor: ${consulta.tutor} | Status: ${status}`)
      })
      break
    case 12:
      const inputAnimal = question("Digitar nome do animal: ").trim().toLowerCase()
      const statusConsulta = realizarConsulta(consultas,inputAnimal)

      if (statusConsulta) {
        console.log(`Consulta realizada para o animal: ${inputAnimal}`)
      }else{
        console.log("Animal nao encontrado para realizar a consulta")
      }
      break
    default:
      console.log("Opcao nao disponivel, tente novamente")
      break;
  }
  question("Pressione ENTER para continuar...")
}
// Desenvolvimento solicitado:
// 1. Encontrar uma consulta pelo nome do animal.
  // 2. Filtrar todas as consultas de determinado veterinário.
  // 3. Filtrar consultas ainda não realizadas.
  // 4. Filtrar consultas de animais de uma determinada espécie.
  // 5. Verificar se existem consultas pendentes.
  // 6. Verificar se todas as consultas foram realizadas.
  // 7. Utilizar map() para gerar uma relação contendo animal, tutor e procedimento.
  // 8. Utilizar reduce() para calcular o valor total dos procedimentos cadastrados.
  // 9. Utilizar reduce() para contar quantas consultas foram realizadas.
  // 10. Utilizar sort() para ordenar consultas pelo nome do animal.
  // 11. Gerar um relatório por veterinário utilizando forEach().
  //  Desafio adicional:
// Criar uma função para localizar uma consulta e alterar seu estado para realizada.
  // Criar também um relatório que mostre quantos atendimentos cada veterinário possui.
