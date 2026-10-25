// Atividade 43 — Organizador de tarefas
// Desenvolva um sistema de terminal para registrar tarefas pessoais.
// Cada tarefa terá um nome e uma situação: pendente ou concluída.
// Utilize dois arrays paralelos:

const { questionInt, question } = require("readline-sync");

// Crie um menu com estas opções:
// 1. Cadastrar tarefa.
// 2. Listar tarefas.
// 3. Marcar tarefa como concluída.
// 4. Listar somente tarefas pendentes.
// 5. Excluir tarefa.
// 6. Apresentar um resumo das tarefas.
// 7. Encerrar o sistema.


// Requisitos:
// • Cada tarefa deve ser cadastrada com uma descrição não vazia.
// • A situação inicial de uma nova tarefa deve ser pendente.
// • A listagem deve apresentar o número da tarefa, a descrição e a situação.
// • O usuário deve informar a posição da tarefa para concluí-la ou excluí-la.
// • As posições informadas devem ser validadas.
// • O resumo deve apresentar o total de tarefas, quantas estão concluídas e quantas 
// estão pendentes.
// A solução deverá utilizar arrays, operadores, condicionais, repetição e switch case.
let tarefas = [];
let concluidas = [];


let opcao;
while (true) {

    console.clear()
    console.log("1. Cadastrar tarefa.");
    console.log("2. Listar tarefas.");
    console.log("3. Marcar tarefa como concluída.");
    console.log("4. Listar somente tarefas pendentes.");
    console.log("5. Excluir tarefa.");
    console.log("6. Apresentar um resumo das tarefas.");
    console.log("7. Encerrar o sistema.");

    opcao = questionInt("Inserir opcao: ")

    if (opcao === 1) {
        while (true) {
            let tarefa = question("Inserir tarefa: ")
            if (tarefa === "") {
                console.log("Não deixar o campo vazio, tente novamente.");
                continue
            }
            tarefas.push(tarefa)
            concluidas.push("pendente")
            break
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 2) {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada!");
        } else {
            console.log("===== Lista de Tarefas =====");
            for (let i = 0; i < tarefas.length; i++) {
                console.log(tarefas[i]);
            }
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 3) {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada!");
        } else {
            console.log("Tarefas pendentes: ");
            for (let i = 0; i < tarefas.length; i++) {
                if (concluidas[i] === "pendente") {
                    console.log(`${i} - ${tarefas[i]}`);
                }
            }

            while (true) {
                let indiceConcluir = questionInt("Selecione o indice para concluir a terefa: ")
                if (indiceConcluir < 0 || indiceConcluir > tarefas.length - 1) {
                    console.log("Indice indisponivel, tente novamente.");
                    continue
                }
                concluidas[indiceConcluir] = "concluida"
                console.log("Tarefa concluida com sucesso!");
                break
            }
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 4) {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada!");
        } else {
            console.log("Tarefas pendentes: ");
            for (let i = 0; i < tarefas.length; i++) {
                if (concluidas[i] === "pendente") {
                    console.log(`${i} - ${tarefas[i]}`);
                }
            }
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 5) {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada!");
        } else {

            for (let i = 0; i < tarefas.length; i++) {
                console.log(`${i} - ${tarefas[i]}`);
            }

            while (true) {
                let indiceRemover = questionInt("Selecione o indice para remover uma tarefa: ")
                if (indiceRemover < 0 || indiceRemover > tarefas.length - 1) {
                    console.log("Indice indisponivel, tente novamente.");
                    continue
                }
                tarefas.pop(indiceRemover)
                concluidas.pop(indiceRemover)
                break
            }
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 6) {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada!");
        } else {
            let totalTarefas = 0;
            let totalConcluidas = 0;
            let pendentes = 0;

            for (let i = 0; i < tarefas.length; i++) {
                totalTarefas++
                if (concluidas[i] === "pendente") {
                    pendentes++
                } else {
                    totalConcluidas++
                }
            }
            console.log(`Total de tarefas: ${tarefas.length}\nTarefas Pendentes: ${pendentes}\nTotal concluidas: ${totalConcluidas}`);
        }
        question("Pressione ENTER para continuar...")
    } else if (opcao === 7) {
        console.log("Encerrando programa");
        break
    }else{
        console.log("Opção inválida,tente novamente");
        question("Pressione ENTER para continuar...")
        continue
    }
}