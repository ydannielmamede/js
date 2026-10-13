const { question } = require("readline-sync");

const jogos = ["Minecraft", "FIFA", "GTA", "The Sims", "Valorant"]

//1
console.log(jogos);

//2
jogos.push(question("Qual jogo adicionar no final da lista? "))
console.log("Lista apos adicionar o jogo ao final: ");
console.log(jogos);

//3
jogos.pop()
console.log("Lista apos remover o ultimo jogo da lista: ");
console.log(jogos);

//4
jogos.unshift(question("Qual jogo adicionar no início da lista? "))
console.log("Lista apos adicionar o jogo ao inicio da lista: ");
console.log(jogos);

//5
let opcao = Number(question("1- Remover jogo, 2- Substituir: "))

 switch (opcao) {
    case 1:

        let indice = question("Remover o jogo de qual indice?")
        let quantosJogos = question("Quantos jogos remover a partir do indice? ")

        jogos.splice(indice,quantosJogos)

        console.log("Lista final de jogos: ");
        console.log(jogos);
        break;
    case 2:

        let indiceSubstituir = question("Qual indice do jogo para ser substituido? ")
        let novoJogo = question("Digite o novo nome do jogo: ")

        jogos.splice(indiceSubstituir,1,novoJogo)

        console.log("Lista final de jogos: ");
        console.log(jogos);
        break;
 
    default:
        break;
}   


