const { question } = require("readline-sync");

const jogos = [{
    nome: "Minecraft",
    genero: "Aventura",
    horas: 45
},
{
    nome: "FIFA",
    genero: "Esporte",
    horas: 30
},
{
    nome: "The Sims",
    genero: "Simulação",
    horas: 20
},
]

function listarJogos() {
    console.log("\n===== MEUS JOGOS =====");

    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i + 1} - ${jogos[i].nome}`);
        console.log(`Gênero: ${jogos[i].genero}`);
        console.log(`Horas jogadas: ${jogos[i].horas}`);
        console.log("--------------------");
    }
}
function consultarHoras() {
    let total = 0;
    for (let i = 0; i < jogos.length; i++) {
        total += jogos[i].horas
    }
    return total;
}


let opcao 
while (opcao !== "3") {
    console.clear()

    console.log("\n ===== CATÁLOGO DE JOGOS =====");
    console.log("1 - Listar jogos");
    console.log("2 - Consultar total de horas");
    console.log("3 - Sair");

    opcao = question("Escolha uma opcao: ")

    if (opcao === "") {
        console.log("Não deixar o campo vazio");
        question("Pressione ENTER para continuar...")
        contnue
    }

    if (opcao === "1") {
        listarJogos();
        question("Pressione ENTER para continuar...")
    } else if (opcao === "2") {
        console.log(`Total de horas jogadas: ${consultarHoras()}`);
        question("Pressione ENTER para continuar...")
    } else if (opcao === "3") {
        console.log("Encerrando o sistema...");
    } else {
        console.log("Opção inválida!");
        question("Pressione ENTER para continuar...")
    }
}
