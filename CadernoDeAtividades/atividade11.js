// Atividade 11 — Criando um calculador de frete
// Uma loja virtual utiliza a seguinte regra para calcular o frete:
// • Compras com valor inferior a R$ 100,00: frete de R$ 20,00.
// • Compras de R$ 100,00 até R$ 249,99: frete de R$ 12,00.
// • Compras a partir de R$ 250,00: frete grátis.
// • Valor de compra negativo: entrada inválida.
// Crie um programa que receba o valor da compra, calcule o frete e apresente o valor final, 
// incluindo a compra e o frete.
// Teste valores próximos dos limites: 99.99, 100, 249.99 e 250.

const { question } = require("readline-sync");

let valorCompra = Number(question("Inserir valor da compra: "))

if (valorCompra < 100) {
    console.log("Frete de 20 R$");
}else if (valorCompra >= 100&& valorCompra < 250) {
    console.log("Frete de 12 R$");
}else if (valorCompra >= 250) {
    console.log("Frete grátis");
}
