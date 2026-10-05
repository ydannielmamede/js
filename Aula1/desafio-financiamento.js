const { question } = require("readline-sync");

let nome = question("Qual o nome do cliente? ")
let idade = parseInt(question("Qual a idade? "))
let salarioMensal = parseFloat(question("Qual o salário mensal?"))
let valorEntrada = parseFloat(question("Qual o valor da entrada? "))
let quantidadeParcelas = parseInt(question("Qual a quantidade de parcelas desejadas? "))
let possuiHabilitacao = question("O cliente possui habilitação? sim/nao ")

let valorVeiculo = parseFloat(60000);
let valorFinanciado = parseFloat(0);

let entradaMinima = valorVeiculo *20/100;

let comprometimentoMaximo = salarioMensal * 30/100;

if (idade >=18 && possuiHabilitacao === "sim") {
    valorFinanciado = valorVeiculo - valorEntrada
if (entradaMinima > valorEntrada) {
    console.log("Entrada insuficiente.");
    console.log(`A entrada mínima deve ser de R$${entradaMinima}`);
}if (quantidadeParcelas <= comprometimentoMaximo) {
    
}else{
    console.log("Financiamento não aprovado");
    
}



} else {
    console.log("Cliente não atende aos requisitos básicos");
}






