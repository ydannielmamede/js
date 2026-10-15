const { question } = require("readline-sync");
const vendas = [150, 80, 250, 45, 320, 120, 60];

do {
  console.clear()
  console.log("1. Registrar uma nova venda.");
  console.log("2. Exibir todas as vendas registradas");
  console.log("3. Consultar uma venda pela posição.");
  console.log("4. Alterar o valor de uma venda.");
  console.log("5. Cancelar uma venda.");
  console.log("6. Exibir o relatório de vendas.");
  console.log("7. Sair do sistema.");
  opcao = Number(question("Digite uma opcao: "))
  console.log("\n")


  if (opcao === 1) {
    let valorVenda = Number(question("Inserir valor da venda: "))
    if (valorVenda > 0) {
      vendas.push(valorVenda)
      console.log("Venda adicionada com sucesso");
      question("\nPressione ENTER para continuar...")
    }
  } else if (opcao === 2) {
    for (let i = 0; i < vendas.length; i++) {
      console.log(`Valor ${vendas[i]}, indice ${i}`);
      if (vendas[0] === undefined) {
        console.log("Nenhuma venda registrada.");
      }
    }
    question("\nPressione ENTER para continuar...")
  } else if (opcao === 3) {
    let consultaIndice = Number(question("Inserir o valor do indice: "))

    if (consultaIndice >= 0 && consultaIndice < vendas.length) {
      console.log(`Valor da venda no indice ${consultaIndice}: ${vendas[consultaIndice]}`);
      question("\nPressione ENTER para continuar...")
    } else {
      console.log(`Valor Invalido, tente novamente valores entre 0 e ${vendas.length - 1}`);
      question("\nPressione ENTER para continuar...")
    }

  } else if (opcao === 4) {
    let indiceSubstituicao = Number(question("Inserir o valor do indice: "))
    let valorSubstituicao = Number(question("Inserir novo valor: "))

    if (valorSubstituicao > 0) {
      vendas.splice(indiceSubstituicao, 1, valorSubstituicao)
      console.log("valor alterado com sucesso")
      question("\nPressione ENTER para continuar...")
    } else {
      console.log("Valor invalido, tente usar valores numericos acima de 0")
      question("\nPressione ENTER para continuar...")
    }

  } else if (opcao === 5) {
    let indiceRemocao = Number(question("Inserir o valor do indice: "))
    console.log(`Item "${vendas[indiceRemocao]}" foi removido com sucesso`);
    vendas.splice(indiceRemocao, 1)
    question("\nPressione ENTER para continuar...")

  } else if (opcao === 6) {
    faturamentoTotal = 0;
    maiorValor = vendas[0]
    menorValor = vendas[0]
    contadorVendasMaior100 = 0;
    contadorVendasMenor100 = 0;

    console.log(`Quantidade total de vendas registradas: ${vendas.length}`);

    for (let i = 0; i < vendas.length; i++) {
      faturamentoTotal += vendas[i]
    }
    console.log(`Faturamento total: ${faturamentoTotal}`);
    console.log(`Valor medio das vendas: ${faturamentoTotal / vendas.length}`);

    for (let i = 0; i < vendas.length; i++) {
      if (vendas[i] > maiorValor) {
        maiorValor = vendas[i];
      } else if (vendas[i] < menorValor) {
        menorValor = vendas[i]
      }
    }

    console.log(`Maior valor de venda: ${maiorValor}`);
    console.log(`Menor valor de venda: ${menorValor}`);

    for (let i = 0; i < vendas.length; i++) {
      if (vendas[i] >= 100) {
        contadorVendasMaior100++
      } else {
        contadorVendasMenor100++
      }
    }
    console.log(`Quantidade de vendas iguais ou superiores a R$100: ${contadorVendasMaior100}`);
    console.log(`Quantidade de vendas menores que R$100: ${contadorVendasMenor100}`);
    if (faturamentoTotal >= 1000) {
      console.log("O faturamento total atingiu a meta de R$1000")
    } else {
      console.log("O faturamento total NAO atingiu a meta de R$1000")
    }
    question("\nPressione ENTER para continuar...")
  } else if (opcao === 7) {
    console.log("Programa encerrado")
    question("\nPressione ENTER para continuar...")
    break;
  }

} while (opcao !== 7) 
