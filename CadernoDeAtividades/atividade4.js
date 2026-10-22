// O programa abaixo deveria calcular o custo total de uma viagem, mas apresenta problemas.
const distancia = 120;
const consumo = 12;
const precoCombustivel = 6.20;
let litros = distancia / consumo;
let custo = litros * precoCombustivel;
console.log("Litros necessários: " + litros);
console.log("Custo da viagem: R$ " + custo);
// Tarefas:
// • Identifique o problema relacionado ao tipo de dado de distancia.
// • Verifique se a operação utilizada para calcular o custo está correta.
// • Corrija o programa.
// • Apresente o consumo estimado em litros e o custo total da viagem.
// Considere que o veículo percorre 12 km por litro e que o preço do combustível é R$ 6,20 por 
// litro.