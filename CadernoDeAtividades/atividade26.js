// Atividade 26 — Removendo elementos por posição
// Considere o array:

const { question } = require("readline-sync");

let tarefas = [
 "Estudar JavaScript",
 "Praticar arrays",
 "Revisar funções",
 "Estudar objetos",
 "Resolver exercícios"
];
// Crie um programa que:
// 1. Apresente as tarefas cadastradas.
// 2. Solicite o índice da tarefa que deverá ser removida.
// 3. Verifique se o índice é válido.
// 4. Remova a tarefa selecionada.
// 5. Apresente o array atualizado.
// Utilize splice() para remover o elemento. Não permita a remoção quando o índice informado 
// estiver fora do intervalo válido


for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}

while (true) {
    
    let indice = Number(question("Inserir indice da terefa a ser removida: "))

    if (indice < 0 || indice > tarefas.length - 1) {
        console.log("Indice invalido, tente novamente");
        continue
    }
    tarefas.splice(indice,1)
    break
}