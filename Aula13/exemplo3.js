const chalk = require("chalk");

let idade = -5

try{
    if (idade <= 0) {
        throw new Error("Idade inválida!");
    }
    console.log("Cadastro realizado!");
}catch (erro) {
    console.log(("Erro: ", erro.message));
    
}