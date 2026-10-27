// Atividade 53 — Sistema de coleção musical
// Uma pessoa deseja organizar sua coleção de músicas por meio de um programa de terminal.
// Cada música possui título, artista e duração em segundos.
// O sistema deverá permitir cadastrar músicas, listar a coleção, pesquisar títulos, atualizar a
// duração, remover músicas e apresentar a duração total da coleção.
// Critérios técnicos:
// • Utilizar arrays para armazenar os dados.
// • Utilizar funções para separar as operações principais.
// • Utilizar condicionais para validar as escolhas do usuário.
// • Utilizar repetições para percorrer os registros e manter o menu ativo.
// • Impedir títulos vazios e durações negativas.
// • Apresentar a duração total em minutos e segundos.

const { question, questionInt } = require("readline-sync")

const titulos = []
const artistas = []
const duracoes = []

const pausar = () => question("Pressione ENTER para continuar...")
const listaTaVazia = (lista) => lista.length === 0 ? true : false

const lerTexto = (mensagem) => {
    while (true) {
        let texto = question(mensagem).trim()
        if (texto === "") {
            console.log("Erro: campo vazio, tente novamente.")
            continue
        }
        return texto
    }
}

const lerDuracao = (mensagem) => {
    while (true) {
        let valor = questionInt(mensagem)
        if (valor <= 0) {
            console.log("Erro: duração deve ser maior que zero.")
            continue
        }
        return valor
    }
}

const formatarDuracao = (segundos) => {
    let minutos = Math.floor(segundos / 60)
    let seg = segundos % 60
    return `${minutos}min ${seg}s`
}

while (true) {
    console.clear()
    console.log("1 - Cadastrar música")
    console.log("2 - Listar coleção")
    console.log("3 - Pesquisar título")
    console.log("4 - Atualizar duração")
    console.log("5 - Remover música")
    console.log("6 - Duração total da coleção")
    console.log("7 - Encerrar programa")
    let opcao = questionInt("Inserir opcao: ")

    if (opcao === 1) {
        let titulo = lerTexto("Inserir título: ")
        let artista = lerTexto("Inserir artista: ")
        let duracao = lerDuracao("Inserir duração em segundos: ")

        titulos.push(titulo)
        artistas.push(artista)
        duracoes.push(duracao)
        console.log("Música cadastrada com sucesso.")
        pausar()

    } else if (opcao === 2) {
        if (listaTaVazia(titulos) === true) {
            console.log("Coleção vazia, tente cadastrar uma música.")
            pausar()
        } else {
            console.log("===========================")
            for (let i = 0; i < titulos.length; i++) {
                console.log(`Título: ${titulos[i]}`)
                console.log(`Artista: ${artistas[i]}`)
                console.log(`Duração: ${formatarDuracao(duracoes[i])}`)
                console.log("===========================\n")
            }
            pausar()
        }

    } else if (opcao === 3) {
        if (listaTaVazia(titulos) === true) {
            console.log("Coleção vazia, tente cadastrar uma música.")
            pausar()
        } else {
            let busca = lerTexto("Inserir título para pesquisar: ")
            let encontrado = false

            for (let i = 0; i < titulos.length; i++) {
                if (titulos[i].toLowerCase() === busca.toLowerCase()) {
                    console.log(`Música encontrada: ${titulos[i]} - ${artistas[i]} (${formatarDuracao(duracoes[i])})`)
                    encontrado = true
                    break
                }
            }
            if (encontrado === false) {
                console.log("Nenhuma música encontrada.")
            }
            pausar()
        }

    } else if (opcao === 4) {
        if (listaTaVazia(titulos) === true) {
            console.log("Coleção vazia, tente cadastrar uma música.")
            pausar()
        } else {
            for (let i = 0; i < titulos.length; i++) {
                console.log(`${i} - ${titulos[i]}`)
            }
            let indice = questionInt("Selecionar índice da música para atualizar: ")

            if (indice < 0 || indice >= titulos.length) {
                console.log("Erro: índice inválido.")
            } else {
                let novaDuracao = lerDuracao("Inserir nova duração em segundos: ")
                duracoes[indice] = novaDuracao
                console.log(`Duração de "${titulos[indice]}" atualizada com sucesso.`)
            }
            pausar()
        }

    } else if (opcao === 5) {
        if (listaTaVazia(titulos) === true) {
            console.log("Coleção vazia, tente cadastrar uma música.")
            pausar()
        } else {
            for (let i = 0; i < titulos.length; i++) {
                console.log(`${i} - ${titulos[i]} - ${artistas[i]}`)
            }
            let indice = questionInt("Selecionar índice da música para remover: ")

            if (indice < 0 || indice >= titulos.length) {
                console.log("Erro: índice inválido.")
            } else {
                console.log(`Música "${titulos[indice]}" removida com sucesso.`)
                titulos.splice(indice, 1)
                artistas.splice(indice, 1)
                duracoes.splice(indice, 1)
            }
            pausar()
        }

    } else if (opcao === 6) {
        if (listaTaVazia(titulos) === true) {
            console.log("Coleção vazia, tente cadastrar uma música.")
            pausar()
        } else {
            let total = 0
            for (let i = 0; i < duracoes.length; i++) {
                total += duracoes[i]
            }
            console.log(`Duração total da coleção: ${formatarDuracao(total)}`)
            pausar()
        }

    } else if (opcao === 7) {
        console.log("Encerrando programa...")
        break
    }
}
