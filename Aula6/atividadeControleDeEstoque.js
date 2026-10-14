console.clear()

const produtos = [
    "Teclado",
    "Mouse",
    "Monitor",
    "Notebook",
    "Webcam"
];
const quantidades = [12, 3, 0, 7, 2];

let reposicao = 0;

//1. Exibir cada produto com sua quantidade em estoque.

for (let i = 0; i < produtos.length; i++) {
    console.log(`produto: ${produtos[i]}, estoque ${quantidades[i]}`);
}

//2. Identificar produtos sem estoque.

for (let i = 0; i < quantidades.length; i++) {

    if (quantidades[i] === 0) {
        console.log("\nAviso!!");
        
        console.log(`produto: ${produtos[i]}, está com o estoque zerado!`);
        reposicao++
    }
}
//3. Identificar produtos com estoque baixo, considerando quantidades maiores que zero e menores ou iguais a 3.

console.log("\nProdutos com estoque baixo: ")

for (let i = 0; i < quantidades.length; i++) {

    if (quantidades[i] > 0 && quantidades[i] <= 3) {
        console.log(`produto: ${produtos[i]} apresenta baixa quantidade de estoque!`);
        reposicao++
    }
}

//4. Calcular ou exibir a quantidade total de unidades diponíveis.
let contadorUnidades = 0;

for (let i = 0; i < quantidades.length; i++) {
    contadorUnidades += quantidades[i];
}

console.log(`Estoque total de produtos = ${contadorUnidades}`);

//5. Contar quantos produtos precisam de reposição, considerando tanto os que estão sem estoque quato os que possuem estoque baixo.

console.log(`\nQuantidades de produtos que precisam de reposicao: ${reposicao}`);

