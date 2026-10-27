// Atividade 24 — Contando ocorrências

const { question } = require("readline-sync");

// Uma lista registra os tipos de equipamentos solicitados para manutenção:
let equipamentos = [
  "Mouse",
  "Teclado",
  "Monitor",
  "Mouse",
  "Headset",
  "Mouse",
  "Teclado"
];
// Crie um programa que conte quantas vezes um equipamento aparece no array.
  // O usuário deverá digitar o nome do equipamento pesquisado. O programa deverá apresentar 
// a quantidade de ocorrências encontradas.
  // Desafio adicional: modifique a solução para apresentar a quantidade de ocorrências de 
// "Mouse", "Teclado" e "Monitor" em uma única execução.

  let nomeEquipamento = question("Inserir nome do equipamento: ")

const quantidadeMouse = equipamentos.filter(x => x=== "Mouse").length
const quantidadeTeclado = equipamentos.filter(x => x=== "Teclado").length
const quantidadeMonitor = equipamentos.filter(x => x=== "Monitor").length

if (nomeEquipamento === "Mouse") {
  console.log(quantidadeMouse);
}
if (nomeEquipamento === "Teclado") {
  console.log(quantidadeTeclado);
}
if (nomeEquipamento === "Monitor") {
  console.log(quantidadeMonitor);
}







