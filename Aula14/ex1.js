const produto ={
    nome: "Notebook",
    preco: 3500,
    disponivel: true,
}

console.log("Objeto original:");
console.log(produto);

console.log(typeof produto);

//serializacao
const produtoTexto = JSON.stringify(produto)

console.log("Objeto convertido: ");
console.log(produtoTexto);

console.log(typeof produtoTexto);
