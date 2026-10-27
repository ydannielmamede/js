// Atividade 46 — Sistema de empréstimo de equipamentos
// Uma instituição possui equipamentos que podem ser emprestados aos alunos durante as aulas
// práticas.
    // Cada equipamento possui nome, identificação e situação de disponibilidade.
    // Desenvolva uma aplicação que permita:
// • Cadastrar equipamentos.
    // • Listar todos os equipamentos.
    // • Pesquisar um equipamento pela identificação.
    // • Registrar um empréstimo.
    // • Registrar uma devolução.
    // • Apresentar a quantidade de equipamentos disponíveis.
    // • Encerrar o programa.
    // Primeira versão: utilize arrays paralelos para armazenar os dados.
    // Segunda versão: utilize objetos simples para representar os equipamentos.
    // Requisitos das duas versões:
// • Impedir empréstimos de equipamentos já emprestados.
    // • Impedir devoluções de equipamentos disponíveis.
    // • Validar a identificação informada.
    // • Apresentar mensagens claras de sucesso e erro.
    // • Manter os dados atualizados durante a execução.
    // Ao finalizar, escreva um pequeno parágrafo explicando qual versão foi mais fácil de
// compreender e manter.

    const { question, questionInt } = require("readline-sync")


const nomes = []
const identificacoes = []
const disponibilidades = []

const pausar = () => question("Pressione ENTER para continuar...")
const listaTaVazia = (lista) => lista.length === 0? true: false
const lerTexto = mensagem => {
    while (true) {
        let texto =  question(mensagem).trim()
        if (texto === "") {
            console.log("Erro: campo vazio, tente novamente.")
            continue
        }
        return texto
    }
}

while (true) {

    let opcao;
    console.clear()
    console.log("1 - Cadastrar equipamentos.")
    console.log("2 - Listar todos os equipamentos.")
    console.log("3 - Pesquisar um equipamento pela identificação.")
    console.log("4 - Registrar um empréstimo.")
    console.log("5 - Registrar uma devolução.")
    console.log("6 - Apresentar a quantidade de equipamentos disponíveis.")
    console.log("7 - Encerrar programa.")
    opcao = questionInt("Inserir opcao: ")


    if (opcao === 1 ) {
        const nome = lerTexto("Inserir nome: ")
        const identificacao = questionInt("Inserir identificação (apenas numeros): ")
        const situacao = true

        nomes.push(nome)
        identificacoes.push(identificacao)
        disponibilidades.push(situacao)
        console.log("Equipamento registrado com sucesso.")
        pausar()
    }else if (opcao === 2) {
        while (true) {
            if (listaTaVazia(nomes) === true) {
                console.log("Lista vazia, tente adicionar um equipamento")
                pausar()
                break
            }

            console.log("===========================")
            for (let i = 0; i < nomes.length; i++) {
                console.log(`Nome: ${nomes[i]}`)
                console.log(`identificação: ${identificacoes[i]}`)
                console.log(`Disponivel: ${disponibilidades[i]}`)
                console.log("===========================\n")
            }
            pausar()
            break
        }
    }else if (opcao === 3) {
        while (true) {
            if (listaTaVazia(nomes) === true) {
                console.log("Lista vazia, tente adicionar um equipamento")
                pausar()
                break
            }
            let pesquisaIdentificacao = questionInt("Inserir número de identificação: ")
            let equipamentoEncontrado = 0;

            for (let i = 0; i < identificacoes.length; i++) {
                if (pesquisaIdentificacao === identificacoes[i]) {
                    console.log(`Equipamento encontrado: ${nomes[i]}`)
                    equipamentoEncontrado++
                    break
                }
            }if (equipamentoEncontrado === 0) {
                console.log("Nenhum equipamento encontrado.")
            }
            pausar()
            break
        }
    }else if (opcao === 4) {
        while (true) {
            if (listaTaVazia(nomes) === true) {
                console.log("Lista vazia, tente adicionar um equipamento")
                pausar()
                break
            }

            console.log("Lista de equipamentos disponíveis para empréstimo")
            for (let i = 0; i < identificacoes.length; i++) {
                if (disponibilidades[i] === true) {
                    console.log(`Equipamento disponível: ${nomes[i]} Num: ${identificacoes[i]}`)
                }
            }

            let numero = questionInt("Selecionar numero do identificador para fazer empréstimo: ")
            let indiceEquipamento = identificacoes.indexOf(numero)

            if (indiceEquipamento === -1) {
                console.log("Erro: Equipamento nao encontrado, tente novamente")
            }else if (disponibilidades[indiceEquipamento] === false) {
                console.log("Erro: Este equipamento já está emprestado.")
            }else {
                disponibilidades[indiceEquipamento] = false
                console.log(`Equipamento ${nomes[indiceEquipamento]} emprestado com sucesso.`)
            }
            pausar()
            break
        }

    }else if (opcao === 5) {
        while (true) {
            if (listaTaVazia(disponibilidades) === true) {
                console.log("Lista vazia, tente adicionar um equipamento.")
                pausar()
                break
            }else if (disponibilidades.includes(false)) {
                console.log("Lista de equipamentos emprestados para devolução.")
                for (let i = 0; i < identificacoes.length; i++) {
                    if (disponibilidades[i] === false) {
                        console.log(`Equipamento emprestado: ${nomes[i]} Num: ${identificacoes[i]}`)
                    }
                }

                let numero = questionInt("Selecionar numero do identificador para fazer devolução: ")
                let indiceEquipamento = identificacoes.indexOf(numero)

                if (indiceEquipamento === -1) {
                    console.log("Erro: Equipamento nao encontrado, tente novamente")
                }else if (disponibilidades[indiceEquipamento] === true) {
                    console.log("Erro: Este equipamento já está disponível.")
                }else {
                    disponibilidades[indiceEquipamento] = true
                    console.log(`Equipamento ${nomes[indiceEquipamento]} devolvido com sucesso.`)
                }
                pausar()
                break
            }else{
                console.log("Nenhum equipamento emprestado.")
                pausar()
                break
            }
        }
    }else if (opcao === 6) {

        if (listaTaVazia(nomes) === true) {
            console.log("Lista vazia, tente adicionar um equipamento")
            pausar()
        }else{
            console.log(`Quantidade de equipamentos: ${nomes.length}`)
            pausar()
        }
    }else if (opcao === 7) {
        console.log("Encerrando programa...")
        break
    }
}


