// Atividade 18 — Registro de distâncias
// Crie um programa que permita registrar as distâncias percorridas em diferentes trechos de 
// uma viagem.
// O usuário deverá informar as distâncias em quilômetros, uma por vez. A digitação do valor 0 
// encerrará o registro e não deverá ser somada.
// Ao final, apresente:
// • Quantos trechos foram registrados.
// • A distância total percorrida.
// • A maior distância informada.
// Requisitos: utilize while ou while (true), uma variável acumuladora e uma variável contadora. 

const { question } = require("readline-sync");

// Trate valores negativos como inválidos e não os inclua nos cálculos.

let contador = 0;
let soma = 0;
let maiorDistancia = 0;


while (true) {

    distancia = Number(question("Digite a distância: "))
    if (distancia === 0) {
        break
    }
    if (maiorDistancia < distancia) {
        maiorDistancia = distancia
    }
    soma += distancia
    contador++
}
console.log(`Quantidade de trechos registrados: ${contador}`);
console.log(`Distância total percorrida: ${soma}`);
console.log(`Maior distância informada: ${maiorDistancia}`);


