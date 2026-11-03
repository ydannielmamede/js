const { questionInt, question } = require("readline-sync");
const livros = [
    {
        titulo: "JavaScript para Iniciantes",
        autor: "Carlos Silva",
        categoria: "Programação",
        disponivel: true
    },
    {
        titulo: "Python Básico",
        autor: "Ana Souza",
        categoria: "Programação",
        disponivel: true
    },
    {
        titulo: "Banco de Dados",
        autor: "Pedro Santos",
        categoria: "Tecnologia",
        disponivel: false
    }
];

// Desenvolva as funções abaixo: 

function cadastrarLivro() {

    try {
        const titulo = question("Titulo do livro: ").trim().toLowerCase()
        if (titulo === "") {
            throw new Error("O Titulo não pode ficar vazio");
        }
        const livroExiste = livros.some(livro => livro.titulo.trim().toLowerCase() === titulo)
        if (livroExiste) {
            throw new Error("Livro ja existe, nao foi possivel cadastrar");
        }

        const autor = question("Autor do livro: ").trim().toLowerCase()
        if (autor === "") {
            throw new Error("O Autor não pode ficar vazio");
        }

        const categoria = question("Categoria do livro: ").trim().toLowerCase()
        if (categoria === "") {
            throw new Error("A categoria não pode ficar vazia");
            
            
        }
        livros.push({
            titulo: titulo,
            autor: autor,
            categoria: categoria,
            disponivel: true
        })
        console.log("Livro cadastrado com sucesso");

    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}
function listarLivros() {
    const livrosOrdenados = [...livros].sort((a,b) => a.titulo.localeCompare(b.titulo))
    livrosOrdenados.forEach(livro => {
        console.log(livro.titulo);
    })
}
function consultarLivro() {
    try {
        const inputTitulo = question("Nome do livro: ").trim().toLowerCase()

        const localizarLivro = livros.find(livro => livro.titulo.trim().toLowerCase() === inputTitulo)

        if (localizarLivro) {
            console.log(`Livro encontrado: ${localizarLivro.titulo}`);
        } else {
            throw new Error("Livro nao encontrado");
        }

    }
    catch (error) {
        console.log(`Error ${error.message}`);
    }

}
function emprestarLivro() {
    try {
        livros.forEach((livro, i) => {
            const status = livro.disponivel ? "Disponivel" : "Emprestado"
            console.log(`${i} - [${status}] ${livro.titulo}`);
        });
        const inputIndice = questionInt("Inserir indice do livro para fazer emprestimo: ")

        if (inputIndice < 0 || inputIndice >= livros.length) {
            throw new Error("Não foi possivel encontrar o livro pelo indice");
        }
        if (livros[inputIndice].disponivel === false) {
            throw new Error("Livro Não disponivel para emprestimo");
        }
        livros[inputIndice].disponivel = false
        console.log("Livro emprestado com sucesso");
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}
function devolverLivro() {
    try {
        livros.forEach((livro, i) => {
            const status = livro.disponivel ? "Disponivel" : "Emprestado"
            console.log(`${i} - [${status}] ${livro.titulo}`);
        });
        const inputIndice = questionInt("Inserir indice do livro para fazer devolução: ")

        if (inputIndice < 0 || inputIndice >= livros.length) {
            throw new Error("Não foi possivel encontrar o livro pelo indice");
        }
        if (livros[inputIndice].disponivel === true) {
            throw new Error("Livro Não disponivel para devolução");
        }
        livros[inputIndice].disponivel = true
        console.log("Livro devolvido com sucesso");
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}
function listarLivrosDisponiveis() {
    try {
        const livrosDisponiveis = livros.filter(livro => livro.disponivel === true)
        if (livrosDisponiveis.length === 0) {
            throw new Error("Lista vazia");
        }
        console.log("\n===== Livros Disponiveis =====");
        
        livrosDisponiveis.forEach(livro => {
            console.log(livro.titulo);
        });
        console.log();
        
    } catch (error) {
        console.log(error.message);
    }
}

let opcao
while (opcao !== 7) {
    console.clear()
    console.log("1 - Cadastrar livros");
    console.log("2 - Listar todos os livros");
    console.log("3 - Consultar livro");
    console.log("4 - Realizar empréstimo");
    console.log("5 - Realizar devolução");
    console.log("6 - Listar livros disponíveis");
    console.log("7 - Sair");

    opcao = questionInt("Inserir opcao: ")


    switch (opcao) {
        case 1:
            cadastrarLivro()
            break;
        case 2:
            listarLivros()
            break
        case 3:
            consultarLivro()
            break
        case 4:
            emprestarLivro()
            break
        case 5:
            devolverLivro()
            break
        case 6:
            listarLivrosDisponiveis(livros)
            break
        case 7:
            console.log("Encerrando programa...");
            break
        default:
            console.log("Opcao nao disponível, tente novamente");
            break;
    }
    question("Pressione ENTER para continuar...")
}
