// Atividade 35 — Construindo um menu com funções
// Uma aplicação de organização pessoal deverá permitir que o usuário:
// 1. Consulte uma mensagem de boas-vindas.
// 2. Converta minutos em segundos.
// 3. Verifique se um número é par.
// 4. Encerre a aplicação. Implemente o sistema utilizando readline-sync, switch case, repetição e funções.
// Regras:
// • Crie uma função para cada operação principal.
// • O menu deverá permanecer ativo até que o usuário escolha encerrar.
// • As funções responsáveis por cálculos deverão retornar os resultados.
// • A função principal de cada operação deverá ser chamada a partir do menu.
// • Trate opções inválidas.
// O objetivo é separar as responsabilidades em funções, evitando escrever todo o programa 
// dentro de um único bloco de código.

const { question } = require("readline-sync")


const exibirMenu = () => {
  console.clear()
  console.log("1 - Consulter uma mensagem de boas vindas.");
  console.log("2 - Converta minutos em segundos.");
  console.log("3 - Verifique se um número é par");
  console.log("4 - Encerre a aplicação.");
}
const pausar = () => question("Pressione ENTER para continuar...")
const minutosEmSegundos = numero => numero * 60;
const ehPar = numero => numero % 2 === 0;

//1.
const mensagemBoasVindas = () => {
  console.log("Seja Bem-vindo!!");
  pausar();
}

//2.
const converterMinutosEmSegundos = () => {
  while (true) {
    let minutos = question("Digite o tempo e minutos: ").trim()
    if (minutos === "") {
      pausar();
      continue
    }
    minutos = Number(minutos)
    if (minutos <= 0) {
      console.log("Digite apenas valoes positivos e maiores que 0.")
      pausar();
      continue
    }
    if (!Number.isInteger(minutos)) {
      console.log("Digite apenas numeros inteiros")
      pausar();
      continue
    }
    const segundos = minutosEmSegundos(minutos)
    console.log(`Minutos: ${minutos}; segundos: ${segundos}`)
    pausar();
    break
  }
}
//3.
const verificarPar = () => {
  while (true) {
    let numero = question("Digite um numero: ").trim()

    if (numero === "") {
      console.log("Nao deixe o campo vazio.")
      pausar();
      continue
    }

    numero = Number(numero)

    if (!Number.isInteger(numero)) {
      console.log("Digite apenas numeros inteiros.")
      pausar();
      continue
    }
    console.log(ehPar(numero) ? "Numero Par!!" : "Numero Impar!!");
    pausar();
    break;
  }
}
const main = () => {
  let opcao;

  do {
    exibirMenu()
    opcao = question("Digite uma opcao: ").trim();

    switch (opcao) {
      case "1":
        mensagemBoasVindas()
        break;
      case "2":
        converterMinutosEmSegundos();
        break;
      case "3":
        verificarPar();
        break;
      case "4":
        console.log("Encerrando programa...")
        break;

      default:
        console.log("Digite uma opcao válida!")
        pausar();
        break;
    }

  } while (opcao !== "4");
}

main();
