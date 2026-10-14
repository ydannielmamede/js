const vendas = [120, 45, 300, 80, 250, 35, 500];

//1. Percorra todas as vendas utilizando for.
for (const venda of vendas) {
    console.log(venda);
}

//2. Exiba cada valor de venda.
console.log("\n");
console.log(vendas);

//3. Calcule o faturamento total.

let faturamento = 0;
vendas.forEach(venda => {faturamento+=venda;return faturamento})
console.log(`\nFaturamento total: ${faturamento}`);

//4. Conte quantas vendas foram iguais ou superiores a R$100.

let vendas100 = 0;
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] >= 100) {
        vendas100++
    }
}
console.log(`Quantidade de vendas maiores ou iguais a R$100: ${vendas100}`);

//5. Identifique a maior venda registrada.
let maiorVenda  = vendas[0]

for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
    }
}
console.log(`Maior venda = ${maiorVenda}`);

//6. Calcule o valor total das vendas abaixo de R$100.
let vendasMenor100 = 0;
for (let i = 0; i < vendas.length; i++) {
    if (vendas[i] < 100) {
        vendasMenor100++
    }
}
console.log(`Quantidade de vendas menores a R$100: ${vendas100}`);

//7. Exiba uma mensagem informando se o faturamento total foi igual ou superior a R$1.000

if (faturamento > 1000) {
    console.log(`Faturamento ultrapassou R$1000 reais!!.`);
    
    
}