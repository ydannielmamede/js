
const listaPrecosComDesconto = lista => lista.map((produto) => produto.preco * 2)

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 1000 }
];

console.log(listaPrecosComDesconto(produtos))
