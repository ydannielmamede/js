// Uma biblioteca de jogos mantém a seguinte lista:

const { question } = require("readline-sync");

let jogos = [
    "Minecraft",
    "Terraria",
    "Stardew Valley",
    "Hollow Knight",
    "Celeste"
];

// Desenvolva um programa que solicite o nome de um jogo e percorra o array para verificar se 
// ele está cadastrado.
// O resultado deverá indicar se o jogo foi encontrado. Se for encontrado, apresente também sua 
// posição na lista.
// Regras:
// • A pesquisa deve ser realizada com uma estrutura de repetição.
// • Utilize uma variável de controle para identificar se houve correspondência.
// • Não utilize objetos.
// • Considere que os nomes digitados precisam corresponder exatamente aos nomes 
// cadastrados.

while (true) {
    let buscarJogo = question("Buscar jogo: ")
    if (jogos.includes(buscarJogo) === true) {
        for (let i = 0; i < jogos.length; i++) {
            if (buscarJogo === jogos[i]) {
                console.log(`Jogo encontrado na posição ${i}`);
            }
        } break
    }else{
        console.log("Jogo não encontrado");
    }
}