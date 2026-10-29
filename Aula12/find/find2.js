const tarefas = [{ descricao: "Estudar Javascript", concluida: true },
{ descricao: "Criar o banco de dados", concluida: true },
{ descricao: "Testar a aplicação", concluida: false },
{ descricao: "Documentar o projeto", concluida: false },
]
const tarefaPendente = tarefas.find(tarefa => {
    return tarefa.concluida === false;
})

console.log(tarefaPendente)