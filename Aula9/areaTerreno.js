const { question } = require("readline-sync");


const lerNome = () => {
    while (true) {
        console.clear()
        let nomeCliente = question("Nome do cliente: ").trim()

        if (nomeCliente === "") {
            console.log("Não deixe o campo vazio, tente novamente.");
            question("Pressione ENTER para continuar...")
            continue
        }
        if (!isNaN(nomeCliente)) {
            console.log("Nao inserir numeros, tente novamente.");
            question("Pressione ENTER para continuar...")
            continue
        }

        return nomeCliente
    }
}
const lerNumero = (lado) => {
    while (true) {
        console.clear()
        let numero = question(`Inserir ${lado}`).trim()

        if (numero === "") {
            console.log("Não deixe o campo vazio.");
            question("Pressione ENTER para continuar...")
            continue
        }
        numero = Number(numero)
        if (!Number.isFinite(numero)) {
            console.log("Digite valores validos.");
            question("Pressione ENTER para continuar...")
            continue
        }
        if (numero < 0) {
            console.log("Digite apenas valores positivos.");
            question("Pressione ENTER para continuar...")
            continue
        }
        return numero
    }
}
const areaTerreno = (largura, comprimento) => largura * comprimento;

const classificacaoTerreno = (area) => {
    if (area < 200) {
        return "Terreno pequeno"
    } else if (area >= 200 && area < 500) {
        return "Terreno médio"
    } else {
        return "Terreno grande"
    }
}

const calcularPreco = (largura, comprimento, valorMetro) => largura * comprimento * valorMetro

const classificacaoPreco = preco => {
    if (preco < 50000) {
        return "Acessivel"
    } else if (preco >= 50000 && preco < 150000) {
        return "Intermediário"
    } return "Alto valor"

}

const mostrarResultados = () => {
    console.clear()
    console.log(`Nome do cliente: ${cliente}`);
    console.log(`Largura: ${largura} m²`);
    console.log(`Comprimento: ${comprimento} m²`);
    console.log(`Valor do metro quadrado: R$${valorMetro} `);
    console.log(`Valor da area: ${areaTerreno(comprimento, largura)} m² `);
    console.log(`Classificacão do terreno: ${classificacaoTerreno(area)}`);
    console.log(`Preço total: R$${calcularPreco(largura, comprimento, valorMetro)}`);
    console.log(`Classificação do preço: ${classificacaoPreco(preco)}`);
}




const cliente = lerNome();
const largura = lerNumero("largura em metros: ");
const comprimento = lerNumero("comprimento em metros: ");
const valorMetro = lerNumero("valor do metro quadrado: ")
const area = areaTerreno(comprimento, largura)
// console.log(`Classificacao do terreno: ${classificacaoTerreno(area)}`);
const preco = calcularPreco(largura, comprimento, valorMetro)
// console.log(`Classificacao do preco ${classificacaoPreco(preco)}`);


mostrarResultados()