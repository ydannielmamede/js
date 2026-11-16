function salvarUsuario(nome, callback) {
    console.log(`Salvando usuario ${nome}`);

    setTimeout(() => {
        console.log("Usuário salvo com sucesso!");
        callback()

    }, 2000)
}

function exibirMensagem() {
    console.log("Redirecionando para tela principal...");
}

salvarUsuario("Maria", exibirMensagem)
