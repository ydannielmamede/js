const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 }
];

const nomes = produtos.map(produto =>
  produto.nome
);

console.log(nomes);