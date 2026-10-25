// Atividade 27 — Criando um sistema de favoritos 
// Desenvolva um pequeno sistema para gerenciar uma lista de filmes favoritos. 
    // O programa deverá apresentar um menu com as seguintes opções: 
// 1. Adicionar filme. 
    // 2. Listar filmes. 
    // 3. Remover filme por posição. 
    // 4. Pesquisar filme. 
    // 5. Encerrar o programa. 
    // Requisitos técnicos: 
// • Utilize um array para armazenar os títulos. 
    // • Utilize switch case para tratar as opções. 
    // • Utilize uma estrutura de repetição para manter o menu ativo. 
    // • Verifique se a lista está vazia antes de listar ou remover elementos. 
    // • Não permita adicionar títulos vazios. 
    // • Informe quando uma pesquisa não encontrar o filme. 
    // A atividade deve ser implementada sem objetos e sem funções, para concentrar a prática nos 
// arrays, condicionais e repetições.

    const { question, questionInt } = require("readline-sync");

const filmes = []

let opcao
while (opcao !== 5) {

    console.clear()
    console.log("1 - Adicionar filme");
    console.log("2 - Listar filmes");
    console.log("3 - Remover filme por posição");
    console.log("4 - Pesquisar filme");
    console.log("5 - Encerrar programa");

    opcao = Number(question("Inserir opcao: "))

    if (opcao === 1) {
        while (true) {
            let nomeFilme = question("Nome do filme: ").trim()
            if (nomeFilme === "") {
                console.log("Nao deixar o campo vazio");
                question("Pressione ENTER para continuar...")
                continue
            }
            filmes.push(nomeFilme)

            console.log("Filme adicionado com sucesso");
            question("Pressione ENTER para continuar...")
            break

        }

    } else if (opcao === 2) {
        while (true) {
            if (filmes.length === 0) {
                console.log("Lista vazia, tente adicionar novos filmes.");
                question("Pressione ENTER para continuar...")
                break
            }

            for (let i = 0; i < filmes.length; i++) {
                console.log(`${i} - ${filmes[i]}`);

            }
            question("Pressione ENTER para continuar...")
            break
        }
    } else if (opcao === 3) {
        while (true) {
            if (filmes.length === 0) {
                console.log("Lista vazia, tente adicionar novos filmes.");
                question("Pressione ENTER para continuar...")
                break
            }

            for (let i = 0; i < filmes.length; i++) {
                console.log(`${i} - ${filmes[i]}`);
            }
            let indice = questionInt("Escolher indice para remover o filme: ")
            if (indice === "") {
                console.log("Campo vazio, tente novamente.");
                question("Pressione ENTER para continuar...")
                continue
            }

            indice = Number(indice)
            if (!Number.isInteger(indice) || indice < 0 || indice >= filmes.length) {
                console.log("Indice indisponivel, tente novamente.");
                question("Pressione ENTER para continuar...")
                continue
            }
            filmes.splice(indice, 1)
            console.log("Filme removido com sucesso")
            question("Pressione ENTER para continuar...")
            break;
        }

    } else if (opcao === 4) {
        while (true) {
            if (filmes.length === 0) {
                console.log("Lista vazia, tente adicionar novos filmes.");
                question("Pressione ENTER para continuar...")
                break
            }
            let pesquisarFilme = question("Pesquisar nome do filme: ").trim()
            if (pesquisarFilme === "") {
                console.log("Nao deixar o campo vazio");
                question("Pressione ENTER para continuar...")
                continue
            }
            for (let i = 0; i < filmes.length; i++) {
                if (pesquisarFilme === filmes[i]) {
                    console.log(`Filme encontrado ${filmes[i]}`);
                    question("Pressione ENTER para continuar...")
                    break
                }
            }
            break
        }
    } else if (opcao === 5) {
        console.log("Encerrando programa..");
    }
}
