const produtos = [{ nome: "Mouse", categoria: "Periféricos", precos: 50 },
{ nome: "Teclado", categoria: "Periféricos", precos: 50 },
{ nome: "Monitor", categoria: "Monitores", precos: 850 },
{ nome: "Headset", categoria: "Áudio", precos: 180 },
{ nome: "Webcam", categoria: "Acessórios", precos: 150 },
];

produtos.forEach((produto,i) => {
    console.log(`${i} ${produto.nome}`);
});


console.log(produtos.find(produto => {return produto.precos > 500} ))