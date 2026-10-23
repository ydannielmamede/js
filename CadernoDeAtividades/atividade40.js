// Atividade 40 — Cadastro de equipamentos
// Crie um objeto chamado equipamento para representar um equipamento de informática.
// O objeto deverá armazenar:
// • Nome.
// • Marca.
// • Preço.
// • Quantidade em estoque.
// • Situação de funcionamento.
// Em seguida, desenvolva um programa que permita modificar a quantidade em estoque e a 
// situação de funcionamento.
// Ao final, apresente todas as informações do equipamento.
// Atenção: utilize apenas um objeto simples nesta atividade. Não é necessário criar arrays de 
// objetos

const { questionInt,question } = require("readline-sync")

equipamento = {
    nome: "Mouse",
    marca: "Lenovo",
    preco: 100,
    quantidadeEstoque: 500, 
    situacaoFuncionamento: true
}

const modificarEstoque = equipamento => {
    let novoEstoque = questionInt("Inserir nova quantidade de estoque: ")
    equipamento.quantidadeEstoque = novoEstoque;
    console.log(`Novo estoque : ${novoEstoque}`);
    
}

const alterarSituacaoFuncionamento = equipamento => {
    equipamento.situacaoFuncionamento = !equipamento.situacaoFuncionamento
    console.log(`Situação alterada para ${equipamento.situacaoFuncionamento}`);
    
}
const exibirMenu = () => {
    console.log("1 - Modificar quantidade de estoque.");
    console.log("2 - Alterar situação de funcionamento.");
    console.log("3 - Sair do programa.");
    
}

const main = () =>{
    let opcao;
    do {
        exibirMenu()
        opcao = question("Digita uma opcao: ")


        switch (opcao) {
            case "1":
                modificarEstoque(equipamento)
                break;
        
            case "2":
                alterarSituacaoFuncionamento(equipamento)
                break;

            case "3":
                console.log("Encerrando programa...");
                break;
            default:
                console.log("Opção invalida, tente novamente.");
                break;
        }
        
    } while (opcao!=="3");
}


main()
console.log(equipamento);
