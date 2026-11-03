function cadastrarUsuario(nome, idade) {
    try {
        if (nome.trim() === "") {
            throw new Error("O nome não pode ficar vazio!")
        } if (idade <= 0) {
            throw new Error("Idade inválida!");
        } if (idade < 18) {
            throw new Error("Usuário precisa ser maior de idade!");
        }
        console.log("Usuário cadastrado com sucesso!");

    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}


cadastrarUsuario("Carlos", -10)
cadastrarUsuario("", 20)
cadastrarUsuario("Ana", 17)
cadastrarUsuario("Maria", 20)