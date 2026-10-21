const { question } = require("readline-sync");

let nome = question("Digite o nome do jogo: ")
let genero = question("Digite o genero do jogo: ")
let horas = Number(question("Quantas horas voce jogou? "))

let jogo = {
    nome,
    genero,
    horasJogadas: horas
}

console.log("===== JOGO CADASTRADO =====");
console.log(`Nome: ${jogo.nome}`);
console.log(`Gênero: ${jogo.genero}`);
console.log(`Horas jogadas: ${jogo.horasJogadas}`);

