const { question } = require("readline-sync");

function cadastrarLivro() {
    let codigoLivro = Number(question("Inserir código do livro: "));
    let tituloLivro = question("Inserir título do livro: ");
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
    console.log("6 - Listar livros disponíveis: exibit os livros que podem ser emprestados.");
    console.log("7 - Exibir relatório: apresentar a quantidade total de livros, disponíveis e emprestados.");
    console.log("8 - Sair: encerrar o programa.");

    opcao = Number(question("Escolher opção: "))

    switch (opcao) {
        case 1:
            cadastrarLivro()
            question("Pressione Enter para continuar...")
            break;
        case 2:
            exibirLivroESituacao(titulos, situacoes)
            question("Pressione Enter para continuar...")
            break
        case 3:

            let pesquisaTitulo = question("Inserir título do livro: ")

            for (let i = 0; i < titulos.length; i++) {
                if (titulos.includes(pesquisaTitulo)) {
                    console.log(titulos[i]);
                }else {
                    console.log("Nenhuma ocorrencia encontrada.");
                }
            }

            question("Pressione Enter para continuar...")
            break

        default:
            break;
    }









}