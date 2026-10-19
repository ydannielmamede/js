const { question } = require("readline-sync");

function cadastrarLivro() {
    let codigoLivro = question("Inserir código do livro: ");

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] === codigoLivro) {
            console.log("Codigo ja existe");
            return
        }
    }
    let tituloLivro = question("Inserir título do livro: ").trim()

    if (tituloLivro === "") {
        console.log("Campo vazio, tente novamente");
        return;
    }

    let autorLivro = question("Inserir autor do livro: ");
    let categoriaLivro = question("Inserir categoria do livro: ");
    let anoPublicacaoLivro = Number(question("Inserir ano de publicação do livro: "));
    codigos.push(codigoLivro);
    titulos.push(tituloLivro);
    autores.push(autorLivro);
    categorias.push(categoriaLivro);
    anoPublicacoes.push(anoPublicacaoLivro);
    situacoes.push("disponivel");

    return console.log("Livro cadastrado com sucesso");

}

function exibirLivroESituacao(titulo, situacao) {
    for (let i = 0; i < titulo.length; i++) {
        console.log(`Livro ${titulo[i]} está com a situação ${situacao[i]}`);
    }
}

function emprestarLivro(codigo, situacao) {
    console.log(`Produtos disponíveis para empréstimo:}`);
    for (let i = 0; i < codigo.length; i++) {
        if (situacao[i] === "disponivel") {
            console.log(` ${i} ${titulos[i]}`);
        }
    }
    let indiceLivro = Number(question("Selecione o indice o livro: "))
    situacao[indiceLivro] = "emprestado"
}
function devolverLivro(codigo, situacao) {
    console.log(`Produtos atualmente emprestados:`);
    for (let i = 0; i < codigo.length; i++) {
        if (situacao[i] === "emprestado") {
            console.log(` ${i} ${titulos[i]}`);
        }
    }
    let indiceLivro = Number(question("Selecione o indice o livro: "))
    situacao[indiceLivro] = "disponivel"
}

function listarLivrosDisponiveis(titulo, situacao) {
    console.log(`Produtos disponíveis para empréstimo:`);
    for (let i = 0; i < titulo.length; i++) {
        if (situacao[i] === "disponivel") {
            console.log(`${titulos[i]}`);
        }
    }

}

function exibirRelatorio(situacao) {
    let quantidadeLivros = 0;
    let quantidadeLivrosDisponiveis = 0;
    let quantidadeLivrosEmprestados = 0;

    quantidadeLivros = titulos.length

    for (let i = 0; i < situacoes.length; i++) {
        if (situacao[i] === "emprestado") {
            quantidadeLivrosEmprestados++
        } else {
            quantidadeLivrosDisponiveis++
        }
    }

    console.log(`Quantidade de livros: ${quantidadeLivros}`);
    console.log(`Quantidade de livros disponíveis: ${quantidadeLivrosDisponiveis}`);
    console.log(`Quantidade de livros emprestados: ${quantidadeLivrosEmprestados}`);

}

const codigos = [];
const titulos = ["teste1", "teste", "teste3"];
const autores = [];
const categorias = [];
const anoPublicacoes = [];
const situacoes = ["disponivel", "disponivel", "disponivel"]


let opcao;

while (opcao !== 8) {
    console.clear()
    console.log("1 - Cadastrar livro: título, auto, categoria e ano de publicação.");
    console.log("2 - Listar livros: exibir todos os livros cadastrados e suas respectivas situações.");
    console.log("3 - Pesquisar livro: localizar livros pelo título ou parte dele.");
    console.log("4 - Emprestar livro: alterar a situação de um livro disponível para emprestado.");
    console.log("5 - Devolver livro: alterar a situação de um livro emprestado para disponível.");
    console.log("6 - Listar livros disponíveis: exibir os livros que podem ser emprestados.");
    console.log("7 - Exibir relatório: apresentar a quantidade total de livros, disponíveis e emprestados.");
    console.log("8 - Sair: encerrar o programa.");

    opcao = Number(question("Escolher opção: "))

    if (opcao <= 0 || opcao > 8) {
        console.log("Tente apenas numeros de 1 ate 8");
        question("Pressione Enter para continuar...")
        continue
    }
    if (!Number.isInteger(opcao)) {
        console.log("Digite apenas números");
        question("Pressione Enter para continuar...")
    }

    switch (opcao) {
        case 1:
            cadastrarLivro()
            question("Pressione Enter para continuar...")
            break;
        case 2:
            exibirLivroESituacao(titulos, situacoes)
            question("Pressione Enter para continuar...")
            break;
        case 3:
            let pesquisaTitulo = question("Inserir título do livro: ")

            for (let i = 0; i < titulos.length; i++) {
                if (titulos.includes(pesquisaTitulo)) {
                    console.log(titulos[i]);
                }
            }
            question("Pressione Enter para continuar...")
            break;
        case 4:
            emprestarLivro(codigos, situacoes)
            question("Pressione Enter para continuar...")
            break;
        case 5:
            devolverLivro(codigos, situacoes)
            question("Pressione Enter para continuar...")
            break;
        case 6:
            listarLivrosDisponiveis(titulos, situacoes)
            question("Pressione Enter para continuar...")
            break;
        case 7:
            exibirRelatorio(situacoes)
            question("Pressione Enter para continuar...")
            break;
        case 8:
            console.log("Programa encerrado");
        default:
            console.log("Opção indispinível, tente novamente");
            break;
    }

}