const produtos  = [
    {nome: "Mouse", preco:50, promocao:false},
    {nome: "Teclado", preco:120, promocao:true},
    {nome: "Monitor", preco:850, promocao:false},
]

const existePromocao = produtos.some(produto => produto.promocao === true )

console.log(existePromocao);
