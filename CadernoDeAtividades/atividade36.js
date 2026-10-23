// Atividade 36 — Criando um objeto
// Considere as informações de um livro:
// • Título: O Hobbit.
// • Autor: J. R. R. Tolkien.
// • Ano de publicação: 1937.
// • Disponível para empréstimo: verdadeiro.
// Crie um objeto chamado livro que armazene essas informações.
// Depois:
// a) Apresente o título.
// b) Apresente o nome do autor.
// c) Altere o ano de publicação para 1938.
// d) Altere a disponibilidade para false.
// e) Apresente uma mensagem com o título, o autor e a situação do empréstimo.
// Utilize a notação de ponto para acessar e modificar as propriedades'
livro = {
    titulo: "O Hobbit.",
    autor : "J.R.R. Tolkien.",
    ano: 1937,
    disponibilidade: true
}

console.log(`Titulo: ${livro.titulo}`);
console.log(`Auto: ${livro.autor}`);
console.log(`Ano de publicação: ${livro.ano}`);
livro.disponibilidade = false
console.log(`Disponibilidade: ${livro.disponibilidade}`);




