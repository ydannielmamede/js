// Desenvolva um programa que receba uma quantidade inteira de segundos e converta esse 
// valor em horas, minutos e segundos restantes.
// Exemplo: para uma entrada de 3672 segundos, o programa deverá apresentar 1 hora, 1 
// minuto e 12 segundos.
// Requisitos:
// • Utilizar variáveis.
// • Utilizar operadores aritméticos.
// • Utilizar divisão e resto da divisão.
// • Apresentar o resultado em uma mensagem organizada.


const { question } = require("readline-sync");

let horas;
let minutos;
let segundos;
let resto;


let entrada = Number(question("Inserir quantidade de segundos: "))

horas = (entrada  - (entrada % 3600)) / 3600
resto = entrada % 3600

minutos = (resto - (resto % 60)) /60
segundos = resto % 60


console.log(`Horas: ${horas}\nMinutos: ${minutos}\nSegundos: ${segundos}`);
