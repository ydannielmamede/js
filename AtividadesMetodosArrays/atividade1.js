const { question, questionInt } = require("readline-sync");

const livros = [
    {
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        categoria: "Programacao",
        ano: 2022,
        disponivel: true,
        paginas: 700
    },
    {
        titulo: "Clean Code",
        autor: "Robert Martin",
        categoria: "Programacao",
        ano: 2009,
        disponivel: false,
        paginas: 425
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        disponivel: true,
        paginas: 310
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1949,
        disponivel: false,
        paginas: 328
    },
    {
        titulo: "A Revolucao dos Bichos",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1945,
        disponivel: true,
        paginas: 152
    }
];

let opcao;

while (true) {
    console.clear()
    console.log("1 - Localizar livro pelo titulo");
    console.log("2 - Lista somente os livros disponíveis");
    console.log("3 - Encontrar todos os livros de um determinado autor");
    console.log("4 - Verificar se existe algum livro indisponível");
    console.log("5 - Verificar se todos os livros estão disponíveis");
    console.log("6 - Exibir uma lista com apenas livros e autores");
    console.log("7 - Calcular a quantidade total de páginas do catálogo");
    console.log("8 - Ordenar livros pelo ano de publicação");
    console.log("9 - Gerar um relatório completo");
    console.log("10 - Emprestar titulo");
    console.log("11 - Encerrar programa");


    opcao = questionInt("\nSelecionar uma opcao: ")
    console.log();

    if (opcao === 1) {
        const inputLivro = question("Inserir título: ").trim().toLowerCase()
        const localizarLivro = livros.find(livro => livro.titulo.trim().toLowerCase() === inputLivro)

        if (localizarLivro) {
            console.log(`Livro encontrado: ${localizarLivro.titulo}`);
        } else {
            console.log("Livro nao encontrado, tente novamente");

        }
    } else if (opcao === 2) {
        const livrosDisponiveis = livros.filter(livro => livro.disponivel === true)

        if (livrosDisponiveis.length > 0) {
            console.log("===== Livros disponíveis =====");
            livrosDisponiveis.forEach(livro => {
                console.log(livro.titulo);
            });
        } else {
            console.log("Não há livros disponiveis");
        }
    } else if (opcao === 3) {
        const inputAutor = question("Inserir nome do autor: ").trim().toLowerCase()

        const livrosAutor = livros.filter(livro => livro.autor.trim().toLowerCase() === inputAutor)

        if (livrosAutor) {
            livrosAutor.forEach(livro => {
                console.log(`${livro.titulo}`);
            });
        } else {
            console.log("Autor nao encontrado, tente novamente");
        }
    } else if (opcao === 4) {
        const livroDisponivel = livros.some(livro => livro.disponivel === false)
        console.log(`Existe algum livro indisponivel? ${livroDisponivel}`);

    } else if (opcao === 5) {
        const todosLivrosDisponivel = livros.every(livro => livro.disponivel === true)
        console.log(`Todos os livros estão disponíveis? ${todosLivrosDisponivel}`);

    } else if (opcao === 6) {
        const listaAutoresTitulos = livros.map(livro => {
            return {
                titulo: livro.titulo,
                autor: livro.autor
            }
        })
        console.log(listaAutoresTitulos);

    } else if (opcao === 7) {
        const quantidadePaginas = livros.reduce((paginas, livro) => {
            return paginas + livro.paginas
        }, 0)
        console.log(`Total de paginas somadas: ${quantidadePaginas}`);

    } else if (opcao === 8) {
        const ordenarLivrosAno = livros.sort((a, b) => a.ano - b.ano)
        ordenarLivrosAno.forEach(livro => {
            console.log(`${livro.titulo} - ${livro.ano}`);
        });

    } else if (opcao === 9) {
        console.log("=============================");
        livros.forEach(livro => {
            console.log(`Titulo: ${livro.titulo}`);
            console.log(`Autor: ${livro.autor}`);
            console.log(`Categoria: ${livro.categoria}`);
            console.log(`Ano: ${livro.ano}`);
            console.log(`Disponibilidade: ${livro.disponivel}`);
            console.log(`Páginas: ${livro.paginas}`);
            console.log("=============================");
        })

    } else if (opcao === 10) {
        const livrosDisponiveis = livros.filter(livro => livro.disponivel === true)
        if (livrosDisponiveis.length > 0) {
            console.log("===== Livros disponíveis =====");
            livrosDisponiveis.forEach((livro, i) => {
                console.log(`${i} - ${livro.titulo} `);
            });
        } else {
            console.log("Não há livros dispníveis");
        }
        const escolherIndice = questionInt("Selecionar o indice para fazer emprestimo: ")
        livrosDisponiveis[escolherIndice].disponivel = false
        console.log("Livro emprestado com sucesso.");

        livros.forEach(livro => {
            console.log(livro.disponivel);
        });
    } else if (opcao === 11) {
        console.log("Encerrando programa...");
        break
    }
    question("\nPressione ENTER para continuar...")
}
// Desenvolvimento solicitado:
// 1. Utilize find() para localizar um livro pelo título informado pelo usuário.
// 2. Utilize filter() para listar somente os livros disponíveis.
// 3. Utilize filter() para encontrar todos os livros de um determinado autor.
// 4. Utilize some() para verificar se existe algum livro indisponível.
// 5. Utilize every() para verificar se todos os livros estão disponíveis.
// 6. Utilize map() para criar uma lista contendo apenas título e autor.
// 7. Utilize reduce() para calcular a quantidade total de páginas do catálogo.
// 8. Utilize sort() para ordenar os livros pelo ano de publicação.
// 9. Utilize forEach() para gerar um relatório completo.
//  Desafio adicional:
// Criar uma funcionalidade para emprestar um livro. Quando o usuário informar o título, o
// sistema deverá localizar o livro e alterar sua propriedade disponivel para false.