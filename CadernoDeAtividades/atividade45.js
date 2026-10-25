// Atividade 45 — Catálogo de jogos 
// Uma comunidade de jogadores quer desenvolver um catálogo simples para organizar seus 
// jogos favoritos. 
// Cada jogo possui nome, gênero e quantidade de horas jogadas. 

const { questionInt, question } = require("readline-sync");

// Para esta atividade, utilize arrays separados: 
// Crie um sistema com estas opções: 
// 1. Cadastrar jogo. 
// 2. Listar jogos. 
// 3. Pesquisar jogo por nome. 
// 4. Atualizar horas jogadas. 
// 5. Apresentar o jogo com mais horas. 
// 6. Calcular o total de horas jogadas. 
// 7. Encerrar. 
// Requisitos: 
// • Cada jogo novo deve ser incluído nos três arrays, mantendo a correspondência das 
// posições. 
// • A pesquisa deve informar a posição do jogo encontrado. 
// • A atualização deve validar o índice e impedir a inclusão de horas negativas. 
// • A maior quantidade de horas e o total devem ser calculados pelo programa. 
// • A listagem deverá apresentar todas as informações de cada jogo. 
// Etapa de evolução: após concluir a primeira versão, reescreva o sistema utilizando um array de 
// objetos, com cada jogo representado por um objeto contendo as propriedades nome, genero 
// e horas. 
// Essa etapa permitirá comparar as duas formas de estruturar os mesmos dados.
    const perguntarTexto = mensagem =>{
        while (true) {
            const texto = question(mensagem).trim();

            if (texto !== "") {
                return texto;
            }

            console.log("Não deixe o campo vazio.");
        }
    }

let nomes = ["Minecraft", "Terraria", "Celeste"];
let generos = ["Sandbox", "Aventura", "Plataforma"];
let horas = [45, 20, 12];

let opcao;
while (true) {

  console.clear()
  console.log("1. Cadastrar jogo.");
  console.log("2. Listar jogos.");
  console.log("3. Pesquisar jogo por nome.");
  console.log("4. Atualizar horas jogadas.");
  console.log("5. Apresentar o jogo com mais horas.");
  console.log("6. Calcular o total de horas jogadas.");
  console.log("7. Encerrar.");

  opcao = questionInt("Inserir opção: ")

  if (opcao === 1) {

      let nome = perguntarTexto("Inserir nome do jogo: ")
      let genero = perguntarTexto("Inserir genero: ")
      let hora = questionInt("Inserir horas de jogo: ")
      if (hora === "") {
        console.log("Não deixar o campo vazio!");
        continue
      }
      hora = Number(hora)
      if (hora < 0 || !Number.isFinite(hora)) {
        console.log("Valor invalido, tente novamente.");
        continue
      }

      nomes.push(nome)
      generos.push(genero)
      horas.push(hora)
      console.log("Jogo adicionado na lista!");
      question("Pressione ENTER para continuar...")

  } else if (opcao === 2) {
    console.log("===================");
    for (let i = 0; i < nomes.length; i++) {
      console.log(`Nome: ${nomes[i]}`);
      console.log(`Gênero: ${generos[i]}`);
      console.log(`Horas: ${horas[i]}`);
      console.log("===================");
    }
    question("Pressione ENTER para continuar...")
  } else if (opcao === 3) {
    while (true) {

      let pesquisa = question("Inserir nome para pesquisar: ").trim()
      if (pesquisa === "") {
        console.log("Não deixar o campo vazio.");
        continue
      }
      for (let i = 0; i < nomes.length; i++) {
        if (pesquisa === nomes[i]) {
          console.log(`Jogo ${nomes[i]} encontrado na posição: ${i}`);
          break
        }
      }
      question("Pressione ENTER para continuar...")
      break
    }
  } else if (opcao === 4) {
    while (true) {
      console.log("===================");
      for (let i = 0; i < nomes.length; i++) {
        console.log(`Indice: ${i}`);
        console.log(`Nome: ${nomes[i]}`);
        console.log(`Horas: ${horas[i]}\n`);
        console.log("===================");
      }
      let indice = questionInt("Escolher indice para alterar as horas: ")

      if (indice < 0 || indice > nomes.length - 1 || !Number.isInteger(indice)) {
        console.log("Tente novamente");
        continue
      }
      let horasNovas = question("Inserir horas de jogo: ").trim()
      if (horasNovas === "") {
        console.log("Não deixar o campo vazio!");
        continue
      }
      horasNovas = Number(horasNovas)
      if (horasNovas < 0 || !Number.isFinite(horasNovas)) {
        console.log("Valor invalido, tente novamente.");
        continue
      }
      horas.splice(indice, 1, horasNovas)
      console.log("Horas atualizadas com sucesso!");
      question("Pressione ENTER para continuar...")
      break
    }
  } else if (opcao === 5) {

    let maiorHora = horas[0]
    let indice = 0;

    for (let i = 0; i < horas.length; i++) {
      if (horas[i] > maiorHora) {
        maiorHora = horas[i]
        indice = i
      }
    }
    console.log(`Maior hora jogada ${nomes[indice]}: ${maiorHora}`)
    question("Pressione ENTER para continuar...")
  } else if (opcao === 6) {

    let horasTotal = 0;

    for (let i = 0; i < horas.length; i++) {
      horasTotal += horas[i]
    }
    console.log(`Total de horas jogadas: ${horasTotal}`)
    question("Pressione ENTER para continuar...")
  } else if (opcao === 7) {
    console.log("Encerrando programa...")
    break
  }
}
