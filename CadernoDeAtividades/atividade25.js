// Atividade 25 — Analisando temperaturas
// Uma estação meteorológica registrou as seguintes temperaturas:
let temperaturas = [28, 31, 29, 34, 27, 33, 30];
// Desenvolva um programa que percorra o array e calcule:
// • A maior temperatura.
// • A menor temperatura.
// • A soma de todas as temperaturas.
// • A média aritmética.
// • A quantidade de temperaturas acima de 30 °C.
// Utilize variáveis auxiliares e estruturas de repetição. Não utilize funções prontas como 
// Math.max() ou Math.min() para encontrar os extremos.

let maiorTemperatura = temperaturas[0];
let menorTemperatura = temperaturas[0];
let soma = 0;
let media = 0;
let quantidadeMaior30 = 0;

for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i]

    if (temperaturas[i] > maiorTemperatura) {
        maiorTemperatura = temperaturas[i]
    }
    if (temperaturas[i] < menorTemperatura) {
        menorTemperatura = temperaturas[i]
    }
    if (temperaturas[i] > 30) {
        quantidadeMaior30++
    }
    
}

media = (soma / temperaturas.length).toFixed(2)

console.log(`Maior temperatura: ${maiorTemperatura}`);
console.log(`Menor temperatura: ${menorTemperatura}`);
console.log(`Soma de todas as temperaturas: ${soma}`);
console.log(`Media aritmética: ${media}`);
console.log(`Quantidade de temperaturas acima de 30º: ${quantidadeMaior30}`);