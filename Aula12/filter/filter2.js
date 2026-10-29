const livros = [
    {titulo: "Javascript", disponivel:true},
    {titulo: "Python", disponivel:false},
    {titulo: "Banco de Dados", disponivel:true},
    {titulo: "Rede de Computadores", disponivel:false},
]

const livrosDisponiveis = livros.filter(livro =>{
    return livro.disponivel === true
})

console.log(livrosDisponiveis);

console.log("===== Livros disponiveis ====");
livrosDisponiveis.forEach(livro => {
    console.log(livro.titulo);
    
    
});