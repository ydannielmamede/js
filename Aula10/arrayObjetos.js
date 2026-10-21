function exibirLivro(livro) {
    console.log("===== DADOS DO LIVRO =====");
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.ano}`);
}

const meuLivro = [{
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899
},
{
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
}
]

    
// for (let i = 0; i < meuLivro.length; i++) {
//     console.log(meuLivro[i].titulo);
// }
console.log(meuLivro[0].titulo);
