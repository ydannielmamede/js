// Atividade 42 — Sistema de controle de biblioteca
// Uma pequena biblioteca deseja organizar seu catálogo de livros e controlar os empréstimos.

const { questionInt, question } = require("readline-sync");

// O sistema deverá começar com os seguintes dados:
// Desenvolva um menu com as seguintes funcionalidades:
// 1. Listar todos os livros.
// 2. Pesquisar um livro pelo título.
// 3. Realizar um empréstimo.
// 4. Registrar uma devolução.
// 5. Consultar quantos livros estão disponíveis.
// 6. Encerrar o sistema.
// Regras do sistema:
// • Um livro emprestado não pode ser emprestado novamente.
// • Um livro disponível não pode ser devolvido sem que tenha sido emprestado.
// • A pesquisa deverá informar quando o título não estiver cadastrado.
// • A listagem deverá mostrar o título e a situação de cada livro.
// • As opções inválidas deverão receber uma mensagem de erro.
// O sistema deve funcionar continuamente até o usuário escolher encerrar.
// Restrição: resolva a atividade usando arrays paralelos, condicionais e repetições, sem objetos e 
// sem funções. Essa restrição ajuda a consolidar os conteúdos anteriores.
let livros = [
    "O Hobbit",
    "Dom Casmurro",
    "A Revolução dos Bichos",
    "O Pequeno Príncipe"
];
let emprestados = [false, true, false, false];

let opcao;
while (true) {
    console.clear()
    console.log("1. Listar todos os livros.");
    console.log("2. Pesquisar um livro pelo título.");
    console.log("3. Realizar um empréstimo.");
    console.log("4. Registrar uma devolução.");
    console.log("5. Consultar quantos livros estão disponíveis.");
    console.log("6. Encerrar o sistema.");

    opcao = questionInt("Inserir opcao: ")

    if (opcao === 1) {
        for (const livro of livros) {
            console.log(livro);
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 2) {
        let titulo = question("Inserir titulo: ")

        for (let i = 0; i < livros.length; i++) {
            if (titulo === livros[i]) {
                console.log(`Livro(s) encontrado(s): ${livros[i]}`);
            }
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 3) {
        console.log("Livros disponiveis para emprestimo: ");
        for (let i = 0; i < livros.length; i++) {
            if (emprestados[i] === false) {
                console.log(`${i} ${livros[i]}`);
            }
        }
        while (true) {
            let indiceLivro = questionInt("Digite o indice do livro que deseja emprestar: ")
            if (indiceLivro < 0 || indiceLivro > livros.length - 1) {
                console.log("Livro indisponivel, tente novamente");
                continue
            }
            emprestados[indiceLivro] = true
            console.log(`Livro: ${indiceLivro} emprestado com sucesso`);
            break
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 4) {
        console.log("Livros disponiveis para devolução: ");
        for (let i = 0; i < livros.length; i++) {
            if (emprestados[i] === true) {
                console.log(`${i} ${livros[i]}`);
            }
        }
        while (true) {
            let indiceLivro = questionInt("Digite o indice do livro que deseja fazer a devolução: ")
            if (indiceLivro < 0 || indiceLivro > livros.length - 1) {
                console.log("Livro indisponivel, tente novamente");
                continue
            }
            emprestados[indiceLivro] = false
            console.log(`Livro: ${indiceLivro} devolvido com sucesso`);
            break
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 5) {
        let contador = 0
        for (let i = 0; i < livros.length; i++) {
            if (emprestados[i] === false) {
                contador++
            }
        }
        console.log(`Quantidade de livros disponiveis: ${contador}`);
        question("Pressione ENTER para continuar...")
    }else if (opcao === 6) {
        console.log("Encerrando programa...");
        break

    }else{
        console.log("Opção inválida, tente novamente.");
        question("Pressione ENTER para continuar...")
        continue
    }
}