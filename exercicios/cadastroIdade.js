const { question } = require("readline-sync")

function cadastrarIdades(lista) {
  for (let i = 0; i < 5; i++) {

    let texto = question("inserir idade: ").trim()

    if (texto === "") {
      console.log("Nao deixe o campo vazio")
      continue
    }

    let idade = Number(texto)

    if (!Number.isInteger(idade) || idade <= 0) {
      console.log("Valor invalido, tente novamente.")
      continue
    }
    lista.push(idade);
  }
}

function consultarIdadesIndice(lista) {

  while (true) {
    let texto = question("Selecione o indice para consultar: ").trim();

    if (texto === "") {
      console.log("Nao deixe o campo vazio")
      continue
    }
    let indice = Number(texto)

    if (!Number.isInteger(indice)) {
      console.log("Digite numeros validos!:")
      continue
    }
    if (indice < 0 || indice > lista.length - 1) {
      console.log(`Digite apenas indice de 0 ate ${lista.length - 1}`)
      continue
    }
    console.log(lista[indice])
    break;
  }
}



const idades = []

while (true) {

  console.clear()
  console.log("1- Cadastrar 5 idades em um array")
  console.log("2- Mostrar todas as idades cadastradas")
  console.log("3- Consultar idade pela posicao")
  console.log("4- Sair")
  let opcao = Number(question("Inserir opcao: "))

  if (opcao === 1) {
    cadastrarIdades(idades)
    question("Pressione ENTER para continuar...")
  }

  if (opcao === 2) {
    console.log(idades)
    question("Pressione ENTER para continuar...")
  }

  if (opcao === 3) {
    consultarIdadesIndice(idades)
    question("Pressione ENTER para continuar...")
  }

  if (opcao === 4) {
    console.log("Programa encerrado")
    break;

  }

}
