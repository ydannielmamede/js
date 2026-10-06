const { question } = require("readline-sync");

console.log("===== ATENDIMENTO =====");
console.log(`\n1 - Comprar produto\n2 - Consultar estoque\n3 - Solicitar entrega\n4 - Sair\n`);
const opcao = Number(question("Selecione uma opção: "))

switch (opcao) {
    case 1:
        const VALOR_COMPRA = Number(question("Valor da compra: "))
        if (isNaN(VALOR_COMPRA)) {
            console.log("Digite um número válido");
            break;
        }
        const POSSUI_CARTAO = question("O cliente possui cartão da loja? (sim/nao) ")
        const MINIMO_PARA_DESCONTO = 200;
        let desconto = 0;


        if (VALOR_COMPRA >= MINIMO_PARA_DESCONTO && POSSUI_CARTAO === "sim") {
            desconto = 10;
            console.log(`valor da compra: ${VALOR_COMPRA} \nvalor do desconto : ${VALOR_COMPRA * (desconto / 100)}\nvalor final: ${VALOR_COMPRA - (VALOR_COMPRA * (desconto / 100))}`);
        } else if (VALOR_COMPRA >= MINIMO_PARA_DESCONTO || POSSUI_CARTAO === "sim") {
            desconto = 5;
            console.log(`valor da compra: ${VALOR_COMPRA}\nvalor do desconto: ${VALOR_COMPRA * (desconto / 100)}\nvalor final: ${VALOR_COMPRA - (VALOR_COMPRA * (desconto / 100))}`);
        } else {
            console.log(`valor da compra: ${VALOR_COMPRA} \nvalor do desconto : sem desconto\nvalor final: ${VALOR_COMPRA}`);
        }
        break;
    case 2:
        const QUANTIDADE_ESTOQUE = Number(question("Qual a quantidade de produtos disponíveis? "))
        if (QUANTIDADE_ESTOQUE > 20) {
            console.log("Estoque alto");
        } else if (QUANTIDADE_ESTOQUE > 6 && QUANTIDADE_ESTOQUE < 20) {
            console.log("Estoque normal");
        } else if (QUANTIDADE_ESTOQUE > 1 && QUANTIDADE_ESTOQUE < 5) {
            console.log("Estoque baixo");
        } else if (QUANTIDADE_ESTOQUE === 0 || QUANTIDADE_ESTOQUE < 0) {
            console.log("Produto esgotado");
        }
        break;
    case 3:
        const DISTANCIA = Number(question("Qual a distância da entrega? (km) "))
        if (isNaN(DISTANCIA)) {
            console.log("Digite um número válido");
        }
        else if (DISTANCIA <= 5) {
            console.log("Entrega disponível e gratuita");
        } else if (DISTANCIA > 5 && DISTANCIA <= 15) {
            console.log("Entrega disponível e com taxa");

        } else if (DISTANCIA > 15) {
            console.log("Entrega não disponível");
        }
        break
    case 4:
        console.log("Programa encerrado");
        break
    default:
        console.log("Digite uma valor entre 1-4");

        break;
}