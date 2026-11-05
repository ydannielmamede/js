const { questionInt, question } = require("readline-sync");

let dadosJSON = ""


const cadastrarJogo = () => {
    try {
        const inputNome = question("Nome do jogo: ").trim()
        if (inputNome === "") {
            throw new Error("Nao deixar o campo nome vazio");
        }
        const inputCategoria = question("Categoria do jogo: ").trim()

        if (inputCategoria === "") {
            throw new Error("Nao deixar o campo categoria vazio");
        }
        const inputAnoLancamento = questionInt("Inserir ano de lancamento: ")

        jogos.push({
            nome: inputNome,
            categoria: inputCategoria,
            ano: inputAnoLancamento,
            disponibilidade: true
        })
        console.log("Jogo cadastrado com sucesso!");
        
        
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

const listarJogos = () => {
        
    try {
        if (jogos.length === 0) {
            throw new Error("Lista vazia");
        }
        console.log("========================");
        jogos.forEach(jogo => {
            const status = jogo.disponibilidade? "Disponivel" : "Indisponivel"
            console.log(`Nome ${jogo.nome}`);
            console.log(`Categoria ${jogo.categoria}`);
            console.log(`Ano ${jogo.ano}`);
            console.log(status);
            console.log("========================");
        });
        
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

const serializarDados = () => {
    if (jogos.length === 0) {
        console.log("Nao existem jogos para serializar");
        return
    }
    dadosJSON = JSON.stringify(jogos)
    console.log("Dados transformados em JSON");
    console.log(dadosJSON);
    
}
const desserializarDados = () => {
    if (dadosJSON === "") {
        console.log("Primeiro, serialize os dados");
        return
    }
    try {
        const jogosRecuperados = JSON.parse(dadosJSON)

        jogosRecuperados.forEach(jogo => {
            const status = jogo.disponibilidade? "Disponivel" : "Indisponivel"
            console.log(`Nome ${jogo.nome}`);
            console.log(`Categoria ${jogo.categoria}`);
            console.log(`Ano ${jogo.ano}`);
            console.log(status);
            console.log("========================");
        });
        
    } catch (error) {
        console.log("Nao foi possivel recuperar ");
        console.log(`Erro: ${error.message}`);
    }
}


const jogos = []

let opcao
while (true) {
    console.clear()
    console.log("1 - Adicionar jogo");
    console.log("2 - Listar jogos");
    console.log("3 - Serializar dados (JSON.stringify)");
    console.log("4 - Desserializar dados (JSON.parse)");

    opcao = questionInt("Inserir opcao: ")


    if (opcao === 1) {
        cadastrarJogo()
    }else if (opcao === 2) {
        listarJogos()
    }else if (opcao === 3) {
        serializarDados()
    }else if (opcao === 4) {
        desserializarDados()
    }else{
        console.log("Opcão inválida");
    }
    question("Pressione ENTER para continuar...")
}

