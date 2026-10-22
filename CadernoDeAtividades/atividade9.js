// Uma sala de informática possui regras de acesso. Desenvolva um programa que receba o nome 
// do usuário e a quantidade de horas de treinamento concluídas.
// O acesso será liberado quando:
// • O nome não estiver vazio.
// • O usuário tiver concluído pelo menos 4 horas de treinamento.
// O programa deverá informar se o acesso foi liberado ou negado e explicar o motivo quando 
// houver uma restrição.
// Utilize if, else if e else, conforme considerar adequado.

const { question } = require("readline-sync");

let nomeUsuario = question("Digite seu nome: ")
let horasTreinamento = Number(question("Digitar horas de treinamento concluidas: "))

if (nomeUsuario === "") {
    console.log("Nome de usuario vazio! Acesso negado");
}else if (horasTreinamento < 4) {
    console.log("Horas de treinamento insuficiente! Acesso negado");
}else{
    console.log("Acesso liberado");
}