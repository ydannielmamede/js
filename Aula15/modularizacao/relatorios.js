export function calcularEstoque(produtos) {
    let total = 0;

    produtos.forEach(produto => {
        total += produto.preco * produto.quantidade;
    });
    return total
}
export function quantidadeEstoque(produtos) {
    let quantidade = 0
    produtos.forEach(produto => {
        quantidade += produto.quantidade
    });
    return quantidade
}

