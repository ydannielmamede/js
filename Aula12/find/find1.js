const livros = [{ codigo: 101, titulo: "Javascript para Iniciantes", disponivel: true },
{ codigo: 102, titulo: "Lógica de programação", disponivel: false },
{ codigo: 103, titulo: "Banco de Dados", disponivel: true }]

const livro = livros.find(livro => livro.codigo === 102)

if (livro) {
    console.log("Livro:", livro.titulo);
    console.log("Disponível:", livro.disponivel);
} else {
    console.log("Livro não encontrado.");

}
