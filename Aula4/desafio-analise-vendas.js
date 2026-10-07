const { question } = require("readline-sync");

const quantidadeVendas = Number(question("Quantas vendas deseja cadastrar? "))
let valorVenda;
let totalVendido = 0
let maiorVenda = 0;
let menorVenda = 0;
let media;
let contadorVendas = 0

let vendasAcima500 = 0
let vendasAbaixo100 = 0

if (quantidadeVendas > 0) {

    for (let i = 1; i <= quantidadeVendas; i++) {
        contadorVendas++
        valorVenda = Number(question(`Digite o valor da venda ${i} `))

        if (valorVenda > 0) {

            totalVendido = totalVendido + valorVenda

            if (valorVenda > maiorVenda) {
                maiorVenda = valorVenda
            }

            if (menorVenda === 0 || valorVenda < menorVenda) {
                menorVenda = valorVenda
            }

            if (valorVenda > 500) {
                vendasAcima500++
            }

            if (valorVenda < 100) {
                vendasAbaixo100++
            }

        } else {
            console.log("O valor deve ser maior que 0");

        }
    }
    media = totalVendido / quantidadeVendas
    console.log(`Total vendido: ${totalVendido}`);
    console.log(`Maior venda: ${maiorVenda}`);
    console.log(`Menor venda: ${menorVenda}`);
    console.log(`Media: ${media}`);
    console.log(`Vendas acima de R$500: ${vendasAcima500}`);
    console.log(`Vendas abaixo de R$100: ${vendasAbaixo100}`);
}


