const produtos = [
    {nome: "Mouse", estoque:10},
    {nome: "Teclado", estoque:5},
    {nome: "Monitor", estoque:3}
]

const todosDisponiveis = produtos.every(produto => produto.estoque > 0)

console.log(`Todos disponíveis? ${todosDisponiveis}`);
